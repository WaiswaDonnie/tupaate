/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useContext,useEffect,useState} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import { MovieContext } from '../../components/Context/MovieContext';
import MovieCard from '../../components/MovieCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Input} from '@ui-kitten/components'
const SearchScreen = ({route,navigation})=>{
    const {searchMovies,searchResults} = useContext(MovieContext)
    const [data,setData] =  useState([])
    const [query,setQuery] = useState('')


    useEffect(()=>{
        searchMovies(query)
    },[query])
    

    return (
        <>
        <View style={styles.container}>
            <View
            
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
            }}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Movies')
                }}
                >

                <MaterialIcons
                name="chevron-left"
                color="white"
                size={20}
                />
                </TouchableOpacity>
                <Text style={{
                    color:'white',
                    fontSize:20
                }}>{route.params.name} Movies</Text>
                <TouchableOpacity
style={{
//   backgroundColor:'#383838',
//   height: 30,
//   width:30,
//   borderRadius:50,
//   justifyContent:'center',
//   alignItems: 'center',
}}
>
{/* <MaterialIcons name="search" size={15} color="white" /> */}
</TouchableOpacity>
            </View>
             <View style={styles.search}>
        <Input
        value={query}
          style={styles.input}
          onChangeText={(text)=>{
                setQuery(text)
          }}
          accessoryLeft={()=>(
            <MaterialIcons name="search" />
            )}
            />
            </View>
            <View
            style={styles.movieContainer}
            >

            <FlatList
            numColumns={3}
            data={searchResults}
            renderItem={({item})=>(
                <>
            <MovieCard height={170} width={120} movie={item} />
                </>
            )}
            />
            </View>
        </View>
        </>
    )
}

export default SearchScreen

const styles  =  StyleSheet.create({
    container:{
          flex:1,
    backgroundColor:'black',
    // ...StyleSheet.absoluteFillObject,
    paddingHorizontal: 10,
   
    
    },
    movieContainer:{
        marginTop:20,
        justifyContent:'center',
        alignItems: 'center',
    },
    input:{
        width:300,
       
    },
    search:{
        alignItems: 'center',
        marginTop:10
    }
})