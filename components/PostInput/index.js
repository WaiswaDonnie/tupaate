import React,{useState,useEffect,useContext} from 'react'
import {View,Image,StyleSheet,Text,TouchableOpacity,Platform} from 'react-native'
import {Input} from '@ui-kitten/components'
import COLORS from '../../constants/colors'
import FeatherIcons from 'react-native-vector-icons/Feather'
import Ionicons  from 'react-native-vector-icons/Ionicons'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { GlobalContext } from '../Context/GlobalContext'
import * as ImagePicker from 'expo-image-picker';
import {storage} from '../../firebase'
function PostInput() {
const {setImageUri,imageUri,addPost} = useContext(GlobalContext)
const [percentUploaded,setPercentUploaded] =useState(null)
const [showImageView,setImageView] = useState(false)
const [image,setImage] = useState("")

const [message,setMessage] =  useState("")


useEffect(() => {
//  checkPermission()
}, []);


  const sendPost = ()=>{
   
    
    if(message.length > 0){
      addPost({message})
      setMessage("")
    }else{
      alert("Aaaaah, say something please")
    }
    
  }



  const handleMedia = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64:true
    });
// launchImageLibrary(options,result=>{
 
  if (!result.cancelled) {
    // setImageUri(result.uri);
    setImageView(true)
   setImage(result.uri)

    const uploadUri = Platform.OS === 'ios' ? image.replace('file://', '') : image;
    console.log("cascasC",uploadUri)
   
    uploadImage(uploadUri)
   
  
  
    // const storageRef = storage.ref('images')
  // alert(result.uri)
  // storageRef.put(result)
  // .then(snapshot=>{
  //   const percentUploaded = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  //   setPercentUploaded(percentUploaded)
  //   snapshot.ref.getDownloadURL()
  //   .then(url => {
  //     setImageUri(url)
  //     console.log('From Pic', url)
  //   }).catch(error=>alert(error.message))
  // }).catch(error=>alert(error.message))
}
// })

  }


  const uploadImage = async (uploadUri)=>{
    const filename = uploadUri.substring(uploadUri.lastIndexOf('/' + 1));


    const storageRef  =  storage.ref('images/IMG-' + filename);
 const task = storageRef.put(uploadUri)

 task.on('state_changed', taskSnapshot => {
  console.log(`${taskSnapshot.bytesTransferred} transferred 
  out of ${taskSnapshot.totalBytes}`);
});

task.then(() => {
  console.log('Image uploaded to the bucket!');
})

    // await storageRef.put(uploadUri)
    // .then(snapshot=>{
    //   const percentUploaded = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //   setPercentUploaded(percentUploaded)
    //   snapshot.ref.getDownloadURL()
    //   .then(url => {
    //     setImageUri(url)
    //     console.log('From Pic', url)
    //   }).catch(error=>alert(error.message))

    // }).catch(error=>alert(error.message))



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
        value={message}
        onChangeText={text=>setMessage(text)}
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
onPress={sendPost}
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
