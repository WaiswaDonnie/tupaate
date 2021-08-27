import React from 'react'
import { Text,View,Image ,StyleSheet, TouchableOpacity} from 'react-native'


export default function index() {
    return (
        <View>
{/* <TouchableOpacity>
<Image source={require('../../components/Events/image2.jpg')} style={{
  width:150,
  height:150,
  marginLeft:10,
  marginTop:10,
  borderRadius:30
}}/>
<Text style={{
  marginLeft:20
}}> Crush Festival</Text>
</TouchableOpacity> */}


<TouchableOpacity>
<Image source={require('../../components/Events/image3.png')} style={{
  width:150,
  height:150,
  marginLeft:10,
  marginTop:10,
  borderRadius:30
}}/>
<Text style={{
  marginLeft:20
}}> Crush Festival</Text>
</TouchableOpacity>


        </View>
    )
}
