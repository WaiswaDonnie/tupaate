/* eslint-disable prettier/prettier */
import React from 'react'
import {View,Text,TouchableOpacity, Avatar, FlatList} from 'react-native';
import ChatList from '../../components/ChatList';
import {ListItem} from 'react-native-elements';


function Chats({navigation}){

    const List=[
        {
            key:Math.random(),
            name:'Donnie',
            Avatarurl:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/2020-04-11-12-17-19-014_2_vc7tRp3.jpg',
            subtittle:'lit programmers',
    
        },
        {
            key:Math.random(),
            name:'Donnie',
            Avatarurl:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/2020-04-11-12-17-19-014_2_vc7tRp3.jpg',
            subtittle:'lit programmers',
        },

    ]



    return(
        <View>
            <FlatList
            data={List}
            renderItem={
                ()=>(
                    <TouchableOpacity
                        onPress={
                            ()=>{navigation.navigate('Messages')}
                        }>
                        <ChatList/>
                    </TouchableOpacity>
                )
            }
            />
           <TouchableOpacity  onPress={()=>{navigation.navigate('Messages')}
                        }>
               <ChatList/>
                   </TouchableOpacity> 
            

     
        </View>
    
    )
}

export default Chats;
