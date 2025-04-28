import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../configs/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

export default function Slider() {
  const [sliderData, setSliderData] = useState([]); // ✅ Veriyi saklamak için state

  useEffect(() => {
    const fetchData = async () => {
      await getSliderList();
    };
    fetchData();
  }, []);

  const getSliderList = async () => {
    try {
      const q = query(collection(db, "Slider"));
      const querySnapshot = await getDocs(q);
      const sliders = [];

      querySnapshot.forEach((doc) => {
        sliders.push(doc.data()); //Veriyi diziye ekleme
      });

      setSliderData(sliders); //State'e kaydet
    } catch (error) {
      console.error("Firestore verisi alınamadı:", error);
    }
  };

  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
          paddingLeft: 20,
          paddingTop: 20,
          marginBottom:5
        }}
      >
        #Special for you
      </Text>

      <FlatList
        data={sliderData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        style={{ paddingLeft: 20 }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.imageUrl }} 
            style={{
              width: 300,
              height: 150,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        )}
      />
    </View>
  );
}
