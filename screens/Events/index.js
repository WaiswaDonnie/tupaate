/* eslint-disable prettier/prettier */
import React from 'react'
import { View,TextInput,Alert,TouchableOpacity,Button ,StyleSheet, ScrollView,Image} from 'react-native';
import Try from '../../components/Events/Try'
import Trial from '../../components/Events/Trial'
import { Input, Text } from '@ui-kitten/components';
import COLORS from '../../constants/colors'
import { Avatar } from '@ui-kitten/components';


export default function index({navigation}) {
  
    return (
        <View>
        <View style={{
        marginBottom:10,
        // backgroundColor:'gray'
        flexDirection:'row'
        }}
        
        backgroundColor={COLORS.primary}
        >
          <Input
          style={home.search}
          placeholder= "Search"
          placeholderTextcolor="black"
/>

<Text>Avatar</Text>

        </View>


<ScrollView
horizontal={true}
showsHorizontalScrollIndicator={false}
style={{
  marginTop:2
}}
>

  <TouchableOpacity 
  style={{
  borderColor:'black'
  }} >
<Text
style={{
  
    fontSize:20,
    marginLeft:10,
  }}>Music</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=>{
navigation.navigate('More')
}}
>
<Text style={{
    fontSize:20,
    marginLeft:20
  }}>Sport</Text>
  </TouchableOpacity>

  <TouchableOpacity>
<Text style={{
    fontSize:20,
    marginLeft:20
  }}>Art</Text>
</TouchableOpacity>

<TouchableOpacity>
<Text style={{
    fontSize:20,marginLeft:20
  }}>Campus Bee</Text>
  </TouchableOpacity>

  <TouchableOpacity>
<Text style={{
    fontSize:20,
    marginLeft:20
  }}>Drama</Text>
</TouchableOpacity>

<TouchableOpacity>
<Text style={{
    fontSize:20,
    marginLeft:20
  }}>More</Text>
</TouchableOpacity>

</ScrollView>


<Text style={{
  fontSize:20,
  fontWeight:"bold",
  marginTop:15,
  marginLeft:5
}}>This Weekend</Text>

  <ScrollView  
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >

<Try/>
<Trial/>
<Try/>
<Trial/>
<Try/>
<Trial/>

        </ScrollView>
        
          
        <Text style={{
  fontSize:20,
  fontWeight:"bold",
  marginTop:25,
  marginLeft:5
}}>Featured</Text>




  <ScrollView  
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
<Trial/>
<Try/>
<Trial/>
<Try/>
<Trial/>
<Try/>
        </ScrollView>
        


           </View>
    )
}

const home = StyleSheet.create({
  container:{
    flex:1
  },
  search:{
    borderColor:'black',
    borderRadius:50,
    borderWidth:1,
    margin:20,
    marginLeft:5,
    fontSize:20,
    width:250,
    height:40,
    // color:'blue',
    backgroundColor:COLORS.primary,
    fontWeight:"500"
    
    
    
  },
  touchable:{
    borderRadius:10,
    borderColor:'black'
  }
})





/* eslint-disable prettier/prettier */
// import React from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// const Events = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={{ color: '#fff', fontSize: 30 }}>Featured</Text>
//       <Button
//         onPress={() => {
//           navigation.navigate('EventDetail');
//         }}
//         title="Go to Event Detail"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default Events;
