/* eslint-disable prettier/prettier */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Avatar,} from '@ui-kitten/components';
import { ListItem } from 'react-native-elements'


function ChatList({data}){

    return(
        <View style={styles.container}>
          <ListItem bottomDivider>
    <Avatar source={{uri: data.avatar_url}} size="giant" />
    <ListItem.Content>
      <ListItem.Title>{data.name}</ListItem.Title>
      <ListItem.Subtitle>{data.subtittle}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem> 
    
        {/* <View style={styles.chatscontainer}>
            <View style={styles.subheader}>
            <Avatar 
            style={styles.Imageheader}
                      source={{ uri:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/2020-04-11-12-17-19-014_2_vc7tRp3.jpg'}}
                      size="giant"
               />
               <Text style={styles.contactname}>Donnie</Text>
        </View>
        <View style={styles.badgeContainer}>
            <Text style={styles.badge}>00.00</Text>
        </View>
    
        </View> */}
    
               
               
               


        </View>
    )
}
export default ChatList;
const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        justifyContent:'center',  
   
    },
    
    Imageheader:{
        // padding:5,
        marginHorizontal: 10,
        // height:70,
        // width:70,

    },
    contactname:{
        fontSize: 17,
        color:'black',
        // paddingLeft:20,
    },
    chatHeader:{
        fontSize:30,
        paddingRight:250,
    },
    chatscontainer:{
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        
        
    },
    subheader:{
        flexDirection:'row',
    },
    badge:{
        paddingRight:5,
    },
    badgeContainer:{
        justifyContent:'center'
    }
   
     
})