import { View, StatusBar, Text, Pressable, StyleSheet, Image, Alert} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as WebBrowser from 'expo-web-browser';
import AppLoading from 'expo-app-loading';
import { mediumColor } from "../colors/palette";
import { useFonts
} from '@expo-google-fonts/quattrocento'

import React from 'react';






function HomeScreen() {

  const mainAlert = (() => 
    Alert.alert(
      "Warning",
      "Welcome. This app is a very important step for Global Governance and Tor Vergata. It aims to become the first app that the University will ever release. It is currently in beta testing version. If you encounter any problem, please write an email to alessiohuma@gmail.com. Leave the world better than you found it.",
      [
        
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    ))();

  let [fontsLoaded] = useFonts({
    'Quattrocento_400Regular':require('../assets/fonts/Quattrocento-Regular.ttf')
  })
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={mediumColor}/>

      

      <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#f2f2f2' : 'green'}, styles.pressabili]}
          onPress={()=>WebBrowser.openBrowserAsync('http://web.uniroma2.it/')}>
            <View style={styles.viste}>
                <Image source={require('../assets/due-en.png')} resizeMode='center' style={{ height:65}} /> 
            </View>  
      </Pressable>
            
      <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#f2f2f2' : 'white'}, styles.pressabili]}
          onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/')}>
            <View style={styles.viste}>
                <Image source={require('../assets/economia-en.png')} resizeMode='center' style={{ height:90}} />
            </View>
      </Pressable>
    
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#f2f2f2' : 'white'}, styles.pressabili]}
          onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance')}>
            <View style={styles.viste}>
                <View>
                  <Text style={styles.testo}>BACHELOR DEGREE IN</Text>
                  <Text style={[styles.testo,{fontSize:26}]}>GLOBAL GOVERNANCE</Text>
                  
                </View>
            </View>
      </Pressable>

      <View style={[styles.viste,{flex:3, justifyContent:'center'}]}>

        <View style={{flex:1, flexDirection:"row"}}>
          <Pressable style={styles.blocchettoLezione}>
            <MaterialCommunityIcons name="book-open-page-variant" color={mediumColor} size={50} />
            <Text>Courses</Text>
          </Pressable>

          <Pressable style={styles.blocchettoLezione}>
          <MaterialCommunityIcons name="table" color={mediumColor} size={50} />
            <Text>Programme Structure</Text>
          </Pressable>
        </View>
       
        <View style={{flex:2}}>
          
        </View>
      </View> 

      
               
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20
  },
  pressabili:{
      flex:1,
      
      marginBottom:20,
      borderRadius:5,
      elevation:10
  },
  viste:{
      justifyContent:'center',
      alignItems:'center',
      flex:1
  },
  testo:{
    color:'green',
    fontFamily:'Quattrocento_400Regular'
  },
  blocchettoLezione: {
    margin:10,
    backgroundColor:'white',
    flex:1,
    alignItems:'center',
    justifyContent:'center', 
    borderRadius:10, 
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 5,
  }  
});

export {HomeScreen}