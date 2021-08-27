/* eslint-disable prettier/prettier */
import React, { useLayoutEffect } from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import { Avatar } from '@ui-kitten/components';
import PostCard from '../../components/PostCard'
const Home = ({ navigation }) => {
  const data = [

    {
      id: Math.random(),
      image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/2020-04-11-12-17-19-014_2_vc7tRp3.jpg'

    },
    {
      id: Math.random(),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIARy7jSiGEZIOnN-d0dKW8XM6mMVvu5NzA&usqp=CAU'
    },
    {
      id: Math.random(),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIARy7jSiGEZIOnN-d0dKW8XM6mMVvu5NzA&usqp=CAU'
    },
    {
      id: Math.random(),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIARy7jSiGEZIOnN-d0dKW8XM6mMVvu5NzA&usqp=CAU'
    },
    {
      id: Math.random(),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIARy7jSiGEZIOnN-d0dKW8XM6mMVvu5NzA&usqp=CAU'
    },
    {
      id: Math.random(),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIARy7jSiGEZIOnN-d0dKW8XM6mMVvu5NzA&usqp=CAU'
    },
    {
      id: Math.random(),
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIARy7jSiGEZIOnN-d0dKW8XM6mMVvu5NzA&usqp=CAU'
    },

  ]
  const ListItem = ({ item }) => {
    return (
      <SafeAreaView>


        <Avatar style={feedStyles.avatar} source={{ uri: item.image }} size="giant" />
      </SafeAreaView>
    )
  }
  return (
    <View>
      <View style={feedStyles.header}>
        <TouchableOpacity>
         <Avatar size="large" source={{ uri:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/2020-04-11-12-17-19-014_2_vc7tRp3.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity>

        <SimpleLineIcons name="settings" size={23} />
        </TouchableOpacity>
      </View>

      {/* <View
        style={feedStyles.stories}

      >

        <FlatList
          horizontal={true}
          data={data}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <ListItem item={item} />
          }}
        />


      </View> */}
      <View>
        <PostCard />
      </View>


    </View>
  );
};

export default Home;
const feedStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: 10,

    paddingVertical: 5
  },
  stories: {
    backgroundColor: 'lightgrey',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 10,
    flexDirection: 'row'
  },
  avatar: {
    marginHorizontal: 5
  }
})