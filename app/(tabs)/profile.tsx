import { View, Text } from 'react-native'
import React from 'react'
import UserInto from '../../components/Profile/UserInto'
import MenuList from '../../components/Profile/MenuList'

export default function profile() {
  return (
    <View style={{
       padding:20
    }}>
      <Text style={{
         fontFamily:'outfit-bold',
         fontSize:35
      }}>profile</Text>
      {/*User Into */}
      <UserInto/>
      {/*Menu List */}
      <MenuList/>
    </View>
  )
}