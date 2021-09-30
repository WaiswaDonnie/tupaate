import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {Input} from '@ui-kitten/components'
import COLORS from '../../constants/colors'
import FeatherIcons from 'react-native-vector-icons/Feather'
function PostInput() {
    return (
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
<TouchableOpacity>
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
  }
})
