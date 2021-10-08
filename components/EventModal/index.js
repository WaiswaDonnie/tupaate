import React,{useContext,useState} from 'react'
import {View,Button,StyleSheet,TouchableOpacity} from 'react-native'
import Modal from "react-native-modal";
import { GlobalContext } from '../Context/GlobalContext';
import { Input, Text } from '@ui-kitten/components';
// name: 'Nyege Nyege Festival',
// // image:require('../../components/assets/pic.jpg'),
// image:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/09/screenshot-2017-09-26-22.56.18.png?width=982&height=726&auto=webp&quality=75',
// description:'FESTIVALS ARE FUN FOR KIDS, FUN FOR PARENTS AND OFFER A WELCOME BREAK FROM THE STRESSES OF THE NUCLEAR FAMILY. THE SHEER QUANTITIES OF PEOPLE MAKE LIFE EASIER: LOADS OF ADULTS FOR THE ADULTS TO TALK TO AND LOADS OF KIDS FOR THE KIDS TO PLAY WITH.',
// time:'11am to 9pm',
// duration:'3 days',
// participants:293,
// location:'Jinja',
// date:'12 Nov'


function EventModal() {
    const {openModal,toggleModal} = useContext(GlobalContext)
    const [eventName,setEventName] = useState('')
    const [eventDescription,setEventDescription] = useState('')
    const [eventImage,setEventImage] = useState('')
    const [eventTime,setEventTime] = useState('')
    const [eventDate,setEventDate] = useState('')
    const [eventDuration,setEventDuration] = useState('')
    const [eventLocation,setEventLocation] = useState('')
    return (
        <View style={{
             flex: 1,
             justifyContent: 'center',
             alignItems: 'center'
        
        }}>
        <Button title="Show modal" onPress={openModal} />
  
        <Modal
        
        isVisible={openModal}
        coverScreen
        // backdropColor=""
        >
          <View style={{
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center'
               
               }}>
            <Text>Hello!</Text>
            <Input placeholder="Event name"
        placeholderStyle={{
          fontSize:50,
        }}
        value={eventName}
        onChangeText={text=>setEventName(text)}
    
          placeholderTextColor="white"
          style={styles.input}
        />
         <Input placeholder="Duration"
        placeholderStyle={{
          fontSize:50,
        }}
        value={eventDuration}
          placeholderTextColor="white"
          style={styles.input}
        />
         <Input placeholder="Location"
        placeholderStyle={{
          fontSize:50,
        }}
        value={eventLocation}
        onChangeText={text=>setEventLocation(text)}
          placeholderTextColor="white"
          style={styles.input}
        />
        <View
        style={{
            flexDirection:'row',
            alignItems: 'center'
         }}
        > 
         <Input placeholder="Date"
        placeholderStyle={{
          fontSize:50,
        }}
    value={eventDate}
    onChangeText={text=>setEventDate(text)}
          placeholderTextColor="white"
          style={styles.dateInput}
        />
           <Input placeholder="Time"
        placeholderStyle={{
          fontSize:50,
        }}
        value={eventTime}
        onChangeText={text=>setEventTime(text)}
    
          placeholderTextColor="white"
          style={styles.timeInput}
        />
        

        </View>
       
         <Input placeholder="Description"
         multiline={3}
        placeholderStyle={{
          fontSize:50,
        }}
        value={eventDescription}
        onChangeText={text=>setEventDescription(text)}
    
          placeholderTextColor="white"
          style={styles.input}
        />
  <TouchableOpacity
  style={styles.button}
  >
        <Text style={styles.btnText}>CREATE EVENT</Text>
  </TouchableOpacity>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    )
}

export default EventModal
const styles =  StyleSheet.create({
    input:{
        width: '100%',
        margin: 10,
        backgroundColor: '#FFFFFF50',
        fontWeight:'500',
        color:'white',
    },
   timeInput:{
flex:.4,
marginVertical:10,

marginLeft:5,
backgroundColor: '#FFFFFF50',
fontWeight:'500',
color:'white',
   },
   dateInput:{
       flex:.6,
       marginVertical:10,
    //    width: '100%',÷


       backgroundColor: '#FFFFFF50',
       fontWeight:'500',
       color:'white',
   },
   button:{
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
   }

})