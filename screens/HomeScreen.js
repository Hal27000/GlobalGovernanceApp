import { View, StatusBar, Text, Pressable, StyleSheet, Image, Alert, useWindowDimensions, PixelRatio} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import AppLoading from 'expo-app-loading';
import { colors, course } from "../config/config";
import { useFonts
} from '@expo-google-fonts/quattrocento'
import {AndroidFonts} from '../components/AndroidFonts'

import React from 'react';






function HomeScreen() {

  const { height, width } = useWindowDimensions(); 
  let iconSize = 36;
  let buttonFontSize = 14;
  let courseTitleSize = 26;

  if (PixelRatio.get() <2){
    iconSize=18
    buttonFontSize = 10;
    courseTitleSize = 18;
  }

  console.log( height +' and '+ width)
  console.log( PixelRatio.get())

  const mainAlert = (() => 
    Alert.alert(
      "Warning",
      "Welcome. This app is a very important step for Global Governance and Tor Vergata. It aims to become the first app that the University has ever released. It is currently in beta testing version. If you encounter any problem, please write an email to alessiohuma@gmail.com. Leave the world better than you found it.",
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
      <StatusBar barStyle="light-content" backgroundColor={colors.mediumColor}/>

      

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
                  <Text style={styles.testo}>{course.type}</Text>
                  <Text style={[styles.testo,{fontSize:courseTitleSize}]}>{course.name}</Text>
                  
                </View>
            </View>
      </Pressable>

      <View style={[styles.viste,{flex:3, justifyContent:'center'}]}>

        <View style={{flex:1, flexDirection:"row", paddingVertical:10}}>
          <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#f2f2f2' : 'white'}, styles.blocchettoLezione]} 
          onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance/dida/courses')} >
            <MaterialCommunityIcons name="book-open-page-variant" color={colors.mediumColor} size={iconSize} />
            <Text style={{fontFamily:'sans-serif-light', fontSize:buttonFontSize}}>Courses</Text>
          </Pressable>

          <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#f2f2f2' : 'white'},{marginHorizontal:20}, styles.blocchettoLezione]} 
          onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance/programme-structure/')} >
          <MaterialCommunityIcons name="table" color={colors.mediumColor} size={iconSize} />
            <Text style={{fontFamily:'sans-serif-light', fontSize:buttonFontSize}}>Programme Structure</Text>
          </Pressable>

          <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#f2f2f2' : 'white'}, styles.blocchettoLezione]} 
          onPress={()=>WebBrowser.openBrowserAsync('https://delphi.uniroma2.it/totem/jsp/homeStudenti.jsp?language=EN')} >
          <Ionicons name="person" size={iconSize} color={colors.mediumColor} />
            <Text style={{fontFamily:'sans-serif-light', fontSize:buttonFontSize}}>Students Delphi</Text>
          </Pressable>
        </View>
       
        <View style={{flex:2}}>
          <AndroidFonts></AndroidFonts>
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
      shadowColor: "black",
      shadowOpacity: 0.4,
      shadowRadius:2,
      shadowOffset:{width:0,height:3},
      
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
    
   
    flex:1,
    alignItems:'center',
    justifyContent:'center', 
    borderRadius:10, 
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius:2,
    shadowOffset:{width:0,height:3},
    elevation: 5,
  }  
});

export {HomeScreen}