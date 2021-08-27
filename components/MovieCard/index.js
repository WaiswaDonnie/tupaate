/* eslint-disable prettier/prettier */
import React from 'react';
import {View, SafeAreaView,StyleSheet,ImageBackground, TouchableOpacity,Image} from 'react-native';
import {Card,Button} from 'react-native-paper'
import {Text} from '@ui-kitten/components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../constants/colors'
function MovieCard({height,width,movie}){
    return(
      <SafeAreaView>
            <Card
             style={{
                height:height,
                width:width,
               
                margin:5,
                elevation:5
            }}
            >
                <ImageBackground 
                source={{ uri: movie.large_cover_image}}
                resizeMode="cover"
                style={styles.poster}
                >
                    <View style={{
                        justifyContent: 'center',
                        alignItems:'flex-end'

                    }}>
                        <Text>

                        {movie.year}  
                       
                        </Text>
                        <Text>
                        {movie.rating}
                        </Text>
                        {/* <MaterialCommunityIcons 
                        name="movie-roll" 
                        size={30} 
                        color={COLORS.primary}
                        /> */}
                    </View>

         
                </ImageBackground>
                <Card.Actions>
                    
                </Card.Actions>
            </Card>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
   card:{
       backgroundColor:'lightgrey'
   },
   poster: {
       ...StyleSheet.absoluteFillObject,
   }
})
export default MovieCard