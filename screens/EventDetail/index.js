/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet,SafeAreaView, ImageBackground,TouchableOpacity, ScrollView} from 'react-native';
import COLORS from '../../constants/colors';

const image = {uri:'https://c4.wallpaperflare.com/wallpaper/821/662/561/bar-club-dance-dancing-wallpaper-preview.jpg'};

const EventDetail = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titlecard}>
        <ImageBackground style={styles.eventimage}
        source={{uri:'https://c4.wallpaperflare.com/wallpaper/821/662/561/bar-club-dance-dancing-wallpaper-preview.jpg'}}
        >
          <View style={styles.dateicon}>
            <Text style={{color:'white',fontWeight:'bold',}}>
              24
              Dec
            </Text>
            
          </View>
          <Text style={styles.eventtext}>
            Moon Crush Festival
          </Text>

        </ImageBackground>        
      </View>

      <View style={styles.abouttext}>
        <View style={styles.eventdetails}>
          <Text style={styles.words}>Barclays Center</Text>
          <Text style={styles.words}>19PM-22PM</Text>
        </View>
        <View style={styles.eventdetails}>
          <Text style={styles.words}>1947 participants</Text>
          <Text style={styles.words}>3 days duration</Text>
        </View>
          <TouchableOpacity style={styles.buybutton}>
            <Text style={{color:'white'}}>BUY TICKET</Text>
          </TouchableOpacity>
          <Text style={styles.about}>About</Text>        
        <ScrollView style={styles.aboutscreen}>
          
          <Text style={styles.words}>
            jhagjdagfjhsdfgsdjkfhaiufshdfkjhsdk
            jfhsdkhfksdfkhsdkjhgfkjdsflsjdlfhsdkjgaksjhfkdshgfkdsgbf
            sdkjfsdkhfjdhgkhdfkgjhdf
            gdfghdfkghdkfjhgkdfhgkjdfg
            dfgkjhdfgkhdfgjhjkdhkfhgkjdfhkgdf
            gdfkgjhdfkjhgkjdfhkg
          </Text>
          <Text style={styles.words}>
            jhagjdagfjhsdfgsdjkfhaiufshdfkjhsdk
            jfhsdkhfksdfkhsdkjhgfkjdsflsjdlfhsdkjgaksjhfkdshgfkdsgbf
            sdkjfsdkhfjdhgkhdfkgjhdf
            gdfghdfkghdkfjhgkdfhgkjdfg
            dfgkjhdfgkhdfgjhjkdhkfhgkjdfhkgdf
            gdfkgjhdfkjhgkjdfhkg
          </Text>
          <Text style={styles.words}>
            jhagjdagfjhsdfgsdjkfhaiufshdfkjhsdk
            jfhsdkhfksdfkhsdkjhgfkjdsflsjdlfhsdkjgaksjhfkdshgfkdsgbf
            sdkjfsdkhfjdhgkhdfkgjhdf
            gdfghdfkghdkfjhgkdfhgkjdfg
            dfgkjhdfgkhdfgjhjkdhkfhgkjdfhkgdf
            gdfkgjhdfkjhgkjdfhkg
          </Text>

        </ScrollView>
        


      </View>            
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
        
  },
  titlecard: {
    flex: 1,
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
  },
  dateicon:{
    width:50,
    height:50,
    backgroundColor:"#ff385c",
    borderRadius:100,
    alignSelf:'flex-end',
    position:'absolute',
    right:5,
    top:5,
    alignItems:'center',
    justifyContent:'center',

    
  },
  eventtext:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    position:'absolute',
    top:250,
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
    marginTop:1,
    marginLeft:5
    
    
    
    

  },
  about:{
    fontSize:30,
    fontWeight:'bold',
    marginLeft:5,
    color:'white'

  },
  words:{
    color:'white'
  }
   
  
});

export default EventDetail;
