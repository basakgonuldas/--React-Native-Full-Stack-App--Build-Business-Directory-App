import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { db } from '@/configs/FirebaseConfig';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';
import { Colors } from '@/constants/Colors';

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, [category]);

  const getBusinessList = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'BusinessList'), where("category", '==', category));
      const querySnapshot = await getDocs(q);
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({id:doc?.id,...doc.data()});
      });
      setBusinessList(results);
    } catch (error) {
      console.error("Error fetching business list:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: '60%' }}
          size="large"
          color={Colors.PRIMARY}
        />
      ) : businessList.length === 0 ? (
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'outfit-bold',
            color: Colors.GRAY,
            textAlign: 'center',
            marginTop: '50%',
          }}
        >
          No Businesses Found.
        </Text>
      ) : (
        <FlatList
          data={businessList}
          onRefresh={getBusinessList}
          refreshing={loading}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      )}
    </View>
  );
}
