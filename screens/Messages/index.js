/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler'
import React from 'react'
import {View,StyleSheet,TouchableOpacity,TextInput,StatusBar} from 'react-native'
import {Text} from '@ui-kitten/components'
import Backicon from 'react-native-vector-icons/Ionicons'
import Doticon from 'react-native-vector-icons/Feather'
import COLORS from '../../constants/colors';
import { color } from 'react-native-reanimated'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
function MessagesScreen(props){
return(
    
    <View style={mystyle.container}>
<StatusBar backgroundColor="#ff385c" />
        <View style={mystyle.header}>
        
<View >
    <TouchableOpacity onPress={()=>{props.navigation.navigate('Chats')}}>
<Backicon name='chevron-back'  style={mystyle.backicon}/>
</TouchableOpacity>
</View>


<View>
<TouchableOpacity>
<Text style={mystyle.name}>Name</Text>
</TouchableOpacity>
</View>

<View >
    <TouchableOpacity>
<Doticon name='more-vertical'  style={mystyle.threedots}/>
</TouchableOpacity>
</View>

        </View>

        <View style={mystyle.footer}>
            <TextInput style={mystyle.textbox}>text here</TextInput>
        </View>

    </View>
    
)
}

export default MessagesScreen;
const mystyle= StyleSheet.create({
container:{
    backgroundColor:COLORS.white,
    flex:1
},
header:{
    paddingTop:1,
    paddingBottom:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:COLORS.primary,
},
footer:{
  position:'absolute',
  left:0,
  right:0,
  bottom:0,
  backgroundColor:COLORS.primary

},
textbox:{
color:COLORS.white
},
backicon:{
color:COLORS.white,
fontSize:31
},

 

name:{
fontSize:21,
color:COLORS.white,

},

  threedots:{
    color:COLORS.white,
    fontSize:31
}
})

