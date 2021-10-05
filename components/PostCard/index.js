/* eslint-disable prettier/prettier */

import React,{useState,useContext} from 'react';
import { View, FlatList, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Avatar, Text } from '@ui-kitten/components';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GlobalContext } from '../Context/GlobalContext';
const PostCard = ({item}) => { 
// alert(JSON.stringify(item.data.user.photoURL)) 
 
    
    
    const [liked,setLiked] = useState(true)
    const data = [
        {
            id: Math.random(),
            name: 'Donnie',
            image: require('../assets/pic.jpg')
        },
        {
            id: Math.random(),
            name: 'Juma Tech',
            image: require('../assets/pic2.jpg')
        },
        {
            id: Math.random(),
            name: 'Choco',
            image: require('../assets/pic.jpg')
        },
    ]
    const likePost = ()=>{
        setLiked(!liked)
        alert("LIKED")
    }
    const unLikePost=()=>{
        setLiked(false)
        alert("unliked")
    }

    // const RenderCard = ({ item }) => {
    //     return (

          

          
    //     )}
    return (
        // <ScrollView>
        //     {/* <FlatList
        //         data={data}
        //         keyExtractor={item => item.id}
        //         renderItem={({ item }) => {
        //             return <RenderCard item={item} />
        //         }}
        //     /> */}
        //     {
        //         posts.map(item =>(
        //             <RenderCard item={item} key={item.id} />
        //         ))
        //     }
        // </ScrollView>
        <>
          <Card style={styles.card}>
                <View style={styles.header}>
                    <Avatar
                        style={styles.avatar}
                        // source={item.data.user.photoURL}
                        source={{ uri:item.data.user.photoURL}}
                        size="medium"
                    />
                    <View style={styles.subHeader}>
                        <Text style={styles.displayName}>{item.data.user.displayName}</Text>
                        <Text style={styles.title}>{item.data.message}</Text>
                    </View>
                </View>
                {item?.data?.photo?.length > 0 
                ?
                <Image source={item.image}
                    style={styles.cardImage}
                  resizeMode="cover"
                />
                :
                <></>
                }
                
                <Card.Actions >
                    <View style={styles.cardfooter}>
            <View>

                    <TouchableOpacity
                     style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                    >
                       <MaterialCommunityIcons
                       color="#ff385c"
                        name={!liked ? "heart-multiple-outline":"heart-multiple"} 
                        onPress={ likePost}
                       size={25} />
                       <Text>500</Text>
                    </TouchableOpacity>
            </View>
            <View>

                    <TouchableOpacity
                    style={{
                        
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                    >
                       <EvilIcons name="comment" size={30} color="#ff385c"/>
                       <Text>500</Text>
                    </TouchableOpacity>
            </View>
                    </View>
                </Card.Actions>
            </Card>
        </>

    );
};


export default PostCard;
const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        paddingVertical: 10
    },
    header: {
        flexDirection: 'row',
        zIndex: 1,
        paddingHorizontal: 10,
    },
    subHeader: {
        paddingLeft: 10,
    },
    cardImage: {
        height: 473,
        marginTop: -28,
        width: '100%',



    },
    displayName: {
        fontSize: 15,
        margin: 0,
    },
    title: {
        color: 'grey',
        textTransform: 'capitalize',
        fontSize: 13,
        margin: 0
    },
    cardfooter: {

            alignItems:'center',
            flexDirection:'row'
    },
    avatar: {
        height: 70,
        width: 70,
        // borderColor: '#ff385c',
        borderColor: 'white',
        borderWidth: 5,
        
    },
});
