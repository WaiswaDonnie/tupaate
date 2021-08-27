/* eslint-disable prettier/prettier */
import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
} from 'react-native';
import { Input, Text } from '@ui-kitten/components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Login = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [password, setPassword] = useState('');

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = () => {
    return (

      <TouchableWithoutFeedback onPress={toggleSecureTextEntry}>
        <FontAwesome name={secureTextEntry ? 'eye-slash' : 'eye'} size={20} color="white" />
      </TouchableWithoutFeedback>
    );
  };

  return (
    // <SafeAreaView>
    <View style={styles.container}       >
      <StatusBar
        barStyle="dark-content"
        // dark-content, light-content and default
        hidden={false}
        //To hide statusBar
        backgroundColor="transparent"
        //Background color of statusBar only works for Android
        translucent={false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      />
      <ImageBackground

        style={styles.backgroundImage}
        resizeMode="cover"
        source={require('../assets/image-background.jpg')}
      // source={{uri:'https://raw.githubusercontent.com/akveo/kittenTricks/master/src/layouts/auth/sign-up-4/assets/image-background.jpg'}}
      />
<View>
     
  <Image
  source={require('../assets/logo.png')}
  style={{
    height:200,
    width:200,
  }}
  />
</View>

      <View style={styles.form}>


      
      
        <Input placeholder="Email"
        placeholderStyle={{
          fontSize:50,
        }}
          placeholderTextColor="white"
          accessoryRight={() => (

            <FontAwesome name="envelope" size={20} color="white" />
          )
          }
          style={styles.input}
        />
        <Input placeholder="Password"
        placeholderStyle={{
          fontSize:50,
        }}
          placeholderTextColor="white"
          secureTextEntry={secureTextEntry}
          accessoryRight={renderIcon}
          style={styles.input}
        />
      <View style={styles.btnSection}>

          <TouchableOpacity style={styles.btn}
            onPress={()=>{
              navigation.replace('Main')
            }}
          >

            <Text
           style={styles.btnText} 
            >SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
          
          >
          <Text
          
          style={styles.text}
          >Or  Sign in using Social Media</Text>
        </TouchableOpacity>
          <View style={styles.socialSection}>
  <TouchableOpacity style={styles.socialBtn}>

  <FontAwesome name="google" size={30} color="white" />
  </TouchableOpacity>
  <TouchableOpacity  style={styles.socialBtn}>

  <FontAwesome name="twitter" size={30} color="white" />
  </TouchableOpacity >
  <TouchableOpacity  style={styles.socialBtn}>

  <FontAwesome name="facebook" size={30} color="white" />
  </TouchableOpacity>
</View>
        <TouchableOpacity
       onPress={()=>{
         navigation.navigate('Register')
       }}
        >
          <Text
          style={styles.text}
          >Dont have an Account? Sign Up</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
    // </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'center',
    backgroundColor:'black',
  },
  backgroundImage: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
   opacity:0.4,



  },
  form: {
    padding: 20,
  },
  input: {
    width: '100%',
    margin: 10,
    backgroundColor: '#FFFFFF50',
    fontWeight:'500',
    color:'white',

    // backgroundColor:'transparent'
  },
  btnSection: {
paddingLeft:10,
paddingRight:10,
justifyContent:'center',
alignItems:'center',

  },
  btn:{
    width: '100%',
    height:50,
    alignItems:'center',
  justifyContent:'center',
    backgroundColor: 'white',
    fontWeight:'500',
    color:'white',
    margin:10
  },
  btnText:{
    fontWeight:'bold',
    color:'black',
    fontSize:20
  },
  socialSection:{
    width:'100%',
flexDirection:'row',
justifyContent:'space-evenly',
alignItems:'center',
  },
  socialBtn:{
margin:20,

  },
  text:{
    color:'white',
    fontWeight:'500',
  }
});
