/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text,SafeAreaView,StyleSheet, TextInput} from 'react-native';
import {Input } from '@ui-kitten/components'
import FontAwesome from 'react-native-vector-icons/FontAwesome' 
function SearchInput(){
 return(
     <SafeAreaView>
<View style={styles.container}>
  <Input
  style={styles.input}
 accessoryLeft={()=>(
     <FontAwesome name="search" />
 )}

  />
</View>
     </SafeAreaView>
 )
 }

 export default SearchInput;

 const styles  =  StyleSheet.create({
container: {
marginTop:-20,
alignItems: 'center',

marginHorizontal:10
},
input:{
    height:80
}
 })