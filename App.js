/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState ,useEffect,useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StatusBar} from 'react-native'

import Main from './screens/Main';
import Auth from './screens/Auth';
import Login from './screens/Login';
import Register from './screens/Register'
import MessagesScreen from './screens/Messages'
import EventDetail from './screens/EventDetail'
import More from './screens/More'

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { GlobalContext, GlobalContextProvider } from './components/Context/GlobalContext';
import SearchScreen from './screens/SearchScreen';
import { auth } from './firebase';

const AuthStack = createStackNavigator();
const App = () => {
  // const { loggedIn } = useContext(GlobalContext)

  useEffect(()=>{
      // checkAuth()
  },[] )

// const checkAuth = ()=>{
//   auth.onAuthStateChanged(user=>{
//     if(user){
//       setLoggedIn(true)
      
//     }
//   })
// }

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <GlobalContextProvider>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar barStyle="dark-content" />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <AuthStack.Navigator>
            {/* <AuthStack.Screen name="Home" component={Home} />
            <AuthStack.Screen
              name="Login"
              options={{headerShown: false}}
              component={Login}
            />
            <AuthStack.Screen
              name="Register"
              options={{headerShown: false}}
              component={Register}
            /> */}
            {loggedIn ? (
              <>
                <AuthStack.Screen name="Main" component={Main}
                  options={{ headerShown: false }}
                />
                <AuthStack.Screen name="Messages" component={MessagesScreen}
                  options={{ headerShown: false }}
                />
              </>
            )
              :
              (
                <>
               
                  <AuthStack.Screen
                    name="Login"
                    options={{ headerShown: false }}
                    component={Login}
                  />
                  <AuthStack.Screen
                    name="Register"
                    options={{ headerShown: false }}
                    component={Register}
                  />
                  <AuthStack.Screen name="Main" component={Main}
                    options={{ headerShown: false }}
                  />
                  <AuthStack.Screen name="Messages" component={MessagesScreen}
                  options={{ headerShown: false }}
                />
                  <AuthStack.Screen name="EventDetail" component={EventDetail}
                  options={{ headerShown: false }}
                />
                  <AuthStack.Screen name="More" component={More}
                  options={{ headerShown: false }}
                />
                  <AuthStack.Screen name="Search" component={SearchScreen}
                  options={{ headerShown: false }}
                />
                </>

              )

            }


            {/* {loggedIn ? (
            ) : (
              <Auth />
            )} */}
          </AuthStack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </GlobalContextProvider>
  );
};

export default App;
