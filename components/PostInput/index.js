import React,{useState,useEffect,Platform,useContext} from 'react'
import {View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {Input} from '@ui-kitten/components'
import COLORS from '../../constants/colors'
import FeatherIcons from 'react-native-vector-icons/Feather'
import Ionicons  from 'react-native-vector-icons/Ionicons'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { GlobalContext } from '../Context/GlobalContext'
import * as ImagePicker from 'expo-image-picker';
import {storage} from '../../firebase'
function PostInput() {
const {setImageUri,imageUri,image} = useContext(GlobalContext)
const [percentUploaded,setPercentUploaded] =useState(null)
const [showImageView,setImageView] = useState(false)
useEffect(() => {
//  checkPermission()
}, []);


async function checkPermission(){

    // if (Platform.OS !== 'web') {
    //   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //   if (status !== 'granted') {
    //     alert('Sorry, we need camera roll permissions to make this work!');
    //   }
    // }

}
  const handleMedia = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64:true
    });

    let options = {
      mediaTypes: "photo",
      maxWidth:300,
      maxHeight:400,
      quality:1
    }
// launchImageLibrary(options,result=>{
  alert(result)
  if (!result.cancelled) {
    // setImageUri(result.uri);
    setImageView(true)
  const storageRef = storage.ref('images')
  alert(result.uri)
  storageRef.put(result)
  .then(snapshot=>{
    const percentUploaded = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    setPercentUploaded(percentUploaded)
    snapshot.ref.getDownloadURL()
    .then(url => {
      setImageUri(url)
      console.log('From Pic', url)
    }).catch(error=>alert(error.message))
  }).catch(error=>alert(error.message))
}
// })

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
<TouchableOpacity

style={styles.btn}
>

  <Text
 style={styles.btnText} 
  >POST</Text>
</TouchableOpacity>
</View>
        </View>
        {showImageView&& (
      <>
      {imageUri.length > 0 
      ?
      (<>
   
        <View style={styles.imageView}>
          <TouchableOpacity
          style={styles.cancelbtn}
          onPress={()=>{
            setImageUri("")
            setImageView(false)
          }}
          >
            <Ionicons name="close-circle-outline" size={35} />
             </TouchableOpacity>
          <Image
          source={{url:imageUri}}
          style={{
            width:300,
            height:400
           }}
          />
          
        
        </View>
    
      </>)
      :
      (<>
      <Text> Getting</Text>
      </>)}
      </>
    )
    
    }
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
    position:'relative',    
    justifyContent:'center',
    flexDirection: 'row'
  },
  cancelbtn:{
    position:'absolute',
    right:10,
    top:10
  }
})
