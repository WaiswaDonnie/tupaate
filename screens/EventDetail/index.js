/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet,SafeAreaView, ImageBackground,TouchableOpacity, ScrollView} from 'react-native';
import COLORS from '../../constants/colors';

const image = {uri:'https://c4.wallpaperflare.com/wallpaper/821/662/561/bar-club-dance-dancing-wallpaper-preview.jpg'};

const EventDetail = ({navigation, route}) => {

  return (
    // <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
      <View style={styles.titlecard}>
        <ImageBackground style={styles.eventimage}
        source={{ uri:route.params.item.image}}
        // source={{uri:'https://c4.wallpaperflare.com/wallpaper/821/662/561/bar-club-dance-dancing-wallpaper-preview.jpg'}}
        >
          <View style={styles.dateicon}>
            <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}}>
              {route.params.item.date}
            </Text>
            
          </View>
          <Text style={styles.eventtext}>
            {route.params.item.name}
          </Text>

        </ImageBackground>        
      </View>

      <View style={styles.abouttext}>
        <View style={styles.eventdetails}>
          <Text style={styles.words}>{route.params.item.location}</Text>
          <Text style={styles.words}>{route.params.item.time}</Text>
        </View>
        <View style={styles.eventdetails}>
          <Text style={styles.words}>{route.params.item.participants} participants</Text>
          <Text style={styles.words}>{route.params.item.duration} duration</Text>
        </View>
          <TouchableOpacity style={styles.buybutton}>
            <Text style={{color:'white'}}>BUY TICKET</Text>
          </TouchableOpacity>
          {/* <Text style={styles.about}>About</Text>         */}
        <ScrollView style={styles.aboutscreen}>
          
          <Text style={styles.words}>
          
          {route.params.item.description}
          </Text>
         
         
         
         

        </ScrollView>
        


      </View>            
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({ 
  safe:{
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
        
  },
  titlecard: {
    flex: 1,
    // backgroundColor:'black',
    backgroundColor:'black'
  },
  abouttext: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'black',
    
    
  },
  eventimage: {
    width:'100%',
    height:'100%',
    flexDirection:'column',
    opacity:.7,
  

  },
  dateicon:{
    width:50,
    height:50,
    backgroundColor:"#ff385c",
    borderRadius:100,
    alignSelf:'flex-end',
    position:'absolute',
    right:5,
    top:40,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',

    
  },
  eventtext:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    position:'absolute',
    top:350,
    left:5
  },
  eventdetails:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5
  },
  buybutton:{
    width:'80%',
    height:35,
    backgroundColor:'#ff385c',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
    
  },
  aboutscreen:{
     
    width:'100%',
    height:'100%',
    marginTop:15,
    marginLeft:5
    
    
    
    

  },
  about:{
    fontSize:30,
    fontWeight:'bold',
    marginLeft:5,
    color:'white'

  },
  words:{
    color:'white',
    fontSize:20,
  }
   
  
});

export default EventDetail;
