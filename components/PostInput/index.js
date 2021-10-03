import React,{useState,useEffect,Platform,useContext} from 'react'
import {View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {Input} from '@ui-kitten/components'
import COLORS from '../../constants/colors'
import FeatherIcons from 'react-native-vector-icons/Feather'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { GlobalContext } from '../Context/GlobalContext'
import * as ImagePicker from 'expo-image-picker';
import {storage} from '../../firebase'
function PostInput() {
const {setImageUri,imageUri,image} = useContext(GlobalContext)

useEffect(() => {
 checkPermission()
}, []);


async function checkPermission(){

    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }

}
  const handleMedia = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
    
  }

  const uploadImage = async ()=>{
    const storageRef = storage.ref('tutors/'+ file.name)
storageRef.put(file)
.then((snapshot)=>{
  const percentUploaded = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
setLoadedBytes(percentUploaded)
  snapshot.ref.getDownloadURL()
  
  .then(url=>{
    // setPhoto(url)
    setTutorImage(url)
    console.log('From Pic', url)
  })
})
  }

    return (
      <View>
        <View
        style={{ 
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            width:'100%',
   
        }}
        
        >
        <Input placeholder="You saying?"
        placeholderStyle={{
          fontSize:50,
        }}
          placeholderTextColor="black"
          // secureTextEntry={secureTextEntry}
          // accessoryRight={renderIcon}
          style={styles.input}
        />
        <View style={styles.btnSection}>
<TouchableOpacity
onPress={handleMedia}
>
<FeatherIcons name="image" 
size={35} 
color={COLORS.primary}
/>    
 </TouchableOpacity>
<TouchableOpacity style={styles.btn}
>

  <Text
 style={styles.btnText} 
  >POST</Text>
</TouchableOpacity>
</View>
        </View>
        <View style={styles.imageView}>
        <Image
         source={{uri:imageUri}}
         style={{
           width:200,
           height:300
         }}
         />
        </View>
        </View>
    )
}

export default PostInput;

const styles = StyleSheet.create({
     btnSection: {
// ÷
justifyContent:'center',
alignItems:'center',
flexDirection: 'row',
marginHorizontal:5

  },
  btn:{
    // width: '100%',
    height:35,
    alignItems:'center',
    borderRadius:3,

  justifyContent:'center',
paddingHorizontal: 10,
paddingVertical: 10,
  borderColor:COLORS.primary,
  borderWidth:1,
    fontWeight:'500',

    // backgroundColor:COLORS.primary,
    // margin:10
    marginLeft:5
  },
  btnText:{
    fontWeight:'bold',
    color:COLORS.primary,
    fontSize:12
  },
  input:{
   width:'70%'
  },
  imageView:{
    // padding:20,
    paddingVertical:20,
    justifyContent:'center',
    flexDirection: 'row'
  }
})
