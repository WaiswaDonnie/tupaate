/* eslint-disable prettier/prettier */
import React,{useState,useEffect,useLayoutEffect,useContext} from 'react';
import COLORS from '../../constants/colors';
import {View,StyleSheet,SectionList,TouchableOpacity,FlatList,SafeAreaView,StatusBar,ScrollView,ActivityIndicator} from 'react-native';
import {Text} from '@ui-kitten/components';
import {Input } from '@ui-kitten/components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from '../../components/SearchInput';
import MovieCard from '../../components/MovieCard';
import axios from 'axios'
import { MovieContext } from '../../components/Context/MovieContext';
function Movies({navigation,route}) {

const {movies,popularMovies} = useContext(MovieContext)
const [turnToWhite,setTurnToWhite] = useState("dark-content")
 const MOVIE_API =  'https://yts.mx/api/v2/list_movies.json?sort_by=year';

 



 useLayoutEffect(()=>{

   navigation.setOptions({
     title:'',
     headerStyle:{
       backgroundColor:'black'
     },
     headerLeft:()=>(
       <View >
<Text 
style={styles.logo} 
>Onieflix</Text>
</View>
     ),
     headerRight:()=>(
       <View>
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate('Search',{name:'Search'})
      }}
      style={{
        backgroundColor:'#383838',
        height: 30,
        width:30,
        borderRadius:50,
        justifyContent:'center',
        alignItems: 'center',
        marginHorizontal: 10
      }}
      >
      <FontAwesome name="search" size={15} color="white" />
      </TouchableOpacity>
      </View>
     )
   })
 },[route])

 useEffect(()=>{

  

 },[])
 const DATA = [
  {
    id:"1",
    title: "Popular",
    data: ["popularMovies","insjdf"]
  },
  {
    id:"2",
    title: "Latest",
    data: ["asdadsasd","vukvvkhha"]
  },

];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'rgba(0,0,0,0)'}}>


      <View style={styles.container}>

    

        <View style={styles.header}>
{/* <Text 
style={styles.logo} 
>Onieflix</Text> */}
{/* <TouchableOpacity
onPress={()=>{
  navigation.navigate('Search',{name:'Search'})
}}
style={{
  backgroundColor:'#383838',
  height: 30,
  width:30,
  borderRadius:50,
  justifyContent:'center',
  alignItems: 'center',
}}
>
<FontAwesome name="search" size={15} color="white" />
</TouchableOpacity> */}
        </View>
        {/* <View style={styles.search}>
        <Input
          style={styles.input}
          accessoryLeft={()=>(
            <FontAwesome name="search" />
            )}
            />
            </View> */}
        



{

      movies.length < 1 ? 
      <View

          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position:'absolute',
            top:'45%',
            left:'35%'
            
          }}
            >
            <ActivityIndicator size="large" color="#00ff00"
style={styles.loader}

/>
<Text>Getting Movies</Text>
            </View>

            :
            (
<View>
<View style={styles.Section}>

<Text style={styles.sectionHeader}>Popular Downloads</Text>
<TouchableOpacity onPress={()=>{
  navigation.navigate('More',{name:'Popular'})
}}>

<Text style={styles.sectionHeader}>See More</Text>
</TouchableOpacity>
</View>
<View
style={{
  flexDirection:'row',
}}
>

<FlatList
horizontal={true}
        // columnWrapperStyle={{
        //   justifyContent:'space-evenly',
        // }}
      
        // ListHeaderComponent={()=><Text>1231312</Text>}
        showsVerticalScrollIndicator={false}
      
        keyExtractor={item=> item.id}

        data={popularMovies}
        renderItem={({item})=>(
<View style={{
  justifyContent: 'space-evenly',
  flexDirection: 'row',
}}>

            <MovieCard height={250} width={200} movie={item}  />
            </View>
          )}
          /> 
  
</View> 
<View style={styles.Section}>

<Text style={styles.sectionHeader}>Latest Movies</Text>
<TouchableOpacity onPress={()=>{
  navigation.navigate('More',{name:'Latest'})
}}>

<Text style={styles.sectionHeader}>See More</Text>
</TouchableOpacity>
</View>
         <FlatList
    horizontal={true}
        // columnWrapperStyle={{
        //   justifyContent:'space-evenly',
        // }}
        showsVerticalScrollIndicator={false}
        // numColumns={2}
        keyExtractor={item=> item.id}

        data={movies}
        renderItem={({item})=>(
<View style={{
  justifyContent: 'space-evenly',
  flexDirection: 'row',
}}>

            <MovieCard height={250} width={200} movie={item} />
            </View>
          )}
          /> 
          </View>
            )

}        
            
    

  



      </View>
    </SafeAreaView>
  );
}

export default Movies;

const styles =  StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor:'black',
    ...StyleSheet.absoluteFillObject,
  
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 10,
    // backgroundColor:COLORS.dark,
    paddingVertical:20,
    alignItems: 'center',
    
  },
  logo:{
    color:COLORS.primary,
    fontStyle:'normal',
    fontSize:30,
    marginHorizontal:15
  },
  search:{
zIndex:1,
// position:'absolute',
alignItems: 'center',
width: '100%',
marginTop:-20,
  },
  input: {
    // marginHorizontal:20,
    textAlign:'center',
    height:80,
    width:'80%',
    elevation:20,
  },
  loader:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  Section:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 10,
  },
  sectionHeader: {
    color:'white'
  }
});
