import React from 'react'
import { Text,View,Image ,StyleSheet, TouchableOpacity} from 'react-native'


export default function index({event,navigation}) {

    return (
        <View >
<TouchableOpacity
style={{
  
  alignItems:'center',
  justifyContent:'center'
}}

onPress={()=>{
  navigation.navigate('EventDetail',{item: event})

}}


>
<Image
resizeMode="cover"
source={{uri:event?.image}} style={{
  width:150,
  height:250,
  marginLeft:10,
  marginTop:10,
  borderRadius:10
}}/>
<Text style={{
  // marginLeft:20
}}>{event?.name} </Text>
</TouchableOpacity>
</View>

)}