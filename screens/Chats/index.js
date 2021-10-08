/* eslint-disable prettier/prettier */
import React,{ useLayoutEffect,useContext} from 'react'
import {View,Text,TouchableOpacity, Avatar, FlatList} from 'react-native';
import ChatList from '../../components/ChatList';
import {ListItem} from 'react-native-elements';
import { GlobalContext } from '../../components/Context/GlobalContext';


function Chats({navigation}){
    const {users} = useContext(GlobalContext)
    useLayoutEffect(()=>{

        navigation.setOptions({
            headerRight:()=>(
                <View
                style={{
                    marginHorizontal:20
                 }}
                > 
      <Text>{users.length} Joined</Text>
                </View>
          
            )
        })
     },[])

    const List=[
        {
            key:Math.random(),
            name:'Juma',
            avatar_url:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/2020-04-11-12-17-19-014_2_vc7tRp3.jpg',
            subtittle:'Man am really neshing with these staff please help me',
    
        },
        {
            key:Math.random(),
            name:'Dee',
            avatar_url:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/dee.jpg',
            subtittle:'lit programmers',
        },
        {
            key:Math.random(),
            name:'Hellen',
            avatar_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIARy7jSiGEZIOnN-d0dKW8XM6mMVvu5NzA&usqp=CAU',
            subtittle:'Hello guys',
        },
        {
            key:Math.random(),
            name:'Belinda',
            avatar_url:'data:image/jpeg;base64,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',
            subtittle:'lit programmers',
        },
        {
            key:Math.random(),
            name:'Code Maistro',
            avatar_url:'https://pbs.twimg.com/profile_images/1204999009036845057/PSGNBV25_400x400.jpg',
            subtittle:'lit programmers',
        },

    ]



    return(
        <View>
            {/* <FlatList
            data={List}
            renderItem={
                ()=>(
                    <TouchableOpacity
                        onPress={
                            ()=>{navigation.navigate('Messages')}
                        }>
                        <ChatList      />
                    </TouchableOpacity>
                )
            }
            /> */}
            {
                List.map(item =>(
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Messages')
                    }}>
<ChatList  data={item}   />
                    </TouchableOpacity>
                    
                    
                ))
                    
            }



           {/* <TouchableOpacity  onPress={()=>{navigation.navigate('Messages')}
                        }>
               <ChatList/>
                   </TouchableOpacity> 
             */}

     
        </View>
    
    )
}

export default Chats;
