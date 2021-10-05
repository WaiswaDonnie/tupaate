/* eslint-disable prettier/prettier */
import React,{useLayoutEffect} from 'react';
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  AntDesign  from 'react-native-vector-icons/AntDesign'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import Zocial  from 'react-native-vector-icons/Zocial'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../Home';
import Events from '../Events';
import Movies from '../Movies';
import Post from '../Post'
import Chats from '../Chats';
const Tab = createBottomTabNavigator();
function Main({navigation}) {

//   const CustomButton = ({children,onPress})=>{
//     return(

  
// <TouchableOpacity
// style={{
//   top:-30,
//   ...styles.shadow
// }}
// onPress={onPress}
// >
//   <View
//   style={{
//     width:70,
//     height:70,
//     borderRadius:35,
//     backgroundColor:'#ff385c',
//     ...styles.btnShadow
    
//     }}
//   >{children}</View>
// </TouchableOpacity>
//   )
//   }

  const CustomIcon = ({focused})=>{
    return(
      <>
      {focused ? 
       <Entypo
       name="home"
       color={focused ?'#ff385c':'#748c96'}
       size={21}
      
     />
     :
     <AntDesign
     name="home"
     color={focused ?'#ff385c':'#748c96'}
     size={21}
    
   />

      }
      </>
    )
  }

  return (
    <Tab.Navigator 
    
    tabBarOptions={{
  
      showLabel: false,
      style:{
      position:'absolute',
      bottom:10,
      left:20,
      right:20,
      elevation:0,
      borderRadius:20,
      height:70,
      justifyContent:'center',
      ...styles.shadow
      }
    }} >
      <Tab.Screen name="Home" component={Home}
       options={{
        tabBarLabel: "Feed",

               
        
 
      
      
        tabBarIcon: (props) => (
          
  
          <CustomIcon {...props}/>
        ),
      }}
      
      />
  
      <Tab.Screen name="Events" component={Events} 
      options={{
        tabBarLabel:"Events",
        tabBarIcon:({focused})=>(
          <Zocial 
          name="eventasaurus"
          color={focused ? '#ff385c':'#748c96'}
          size={15}
          />
        )
      }}
      
      />
          {/* <Tab.Screen name="Post" component={Post}
      options={{
        tabBarIcon:({ color })=>(
            <FontAwesome name="plus" size={35} color="#fff" />
            
        ),
        tabBarButton:(props)=>(
         <CustomButton {...props} />
         
        )
        
      }}
      /> */}
      <Tab.Screen name="Movies" component={Movies}
      options={{
        tabBarIcon:({ focused }) => (
          <MaterialCommunityIcons name={focused ?"movie-open":"movie-outline"} size={21}
          color={focused ? '#ff385c':'#748c96'}
          />
        )
      }}
      />
      <Tab.Screen name="Chats" component={Chats} 
      options={{
        tabBarIcon:({focused})=>(
          <Ionicons name={focused ?'chatbubbles':'chatbubbles-outline'} 
          size={21}
          color={focused ? '#ff385c':'#748c96'}
          />
        )
      }}
      />
    </Tab.Navigator>
  );
}

export default Main;


const styles  = StyleSheet.create({
  shadow:{
    shadowColor:'#7f5df0',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  },
  btnShadow:{
    shadowColor:'black',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.85,
    shadowRadius:3.5,
    elevation:10
  }
})