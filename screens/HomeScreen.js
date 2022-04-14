import { View, StatusBar, Text, Pressable, StyleSheet, Image, Alert, useWindowDimensions, PixelRatio} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import AppLoading from 'expo-app-loading';
import { colors, course } from "../config/config";
import * as Network from 'expo-network';



import React from 'react';



let marginSize = 2


function HomeScreen() {

  const { height, width } = useWindowDimensions(); 
  let iconSize = 36;
  let buttonFontSize = 14;
  let courseTitleSize = 36;

  
  let squareSize = 173

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

  
  
  

  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.mediumColor}/>

      
      {/* blocco Ateneo + Economia */}
        <View style={{ flexDirection:'row'}}>

          <Pressable style={({pressed}) => [{backgroundColor: pressed ? colors.tvColorPressed : colors.tvColor}, styles.pressabili]}
                onPress={()=>WebBrowser.openBrowserAsync('http://web.uniroma2.it/')}>
                  <View style={styles.viste}>
                    <Image source={require('../assets/logo_tv.png')} style={{ height:squareSize, width:squareSize}} />
                    <View style={{position:'absolute', bottom:0, right:0, margin:10, color:'white'}}>
                      <Text style={styles.testoBottoni}>Tor Vergata</Text>
                      <Text style={styles.testoBottoni}>University</Text>
                    </View>
                  
                  </View>  
          </Pressable>
                
          <Pressable style={({pressed}) => [{backgroundColor: pressed ? colors.economiaColorPressed : colors.economiaColor}, styles.pressabili]}
              onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/')}>
                
                    
                    <Image source={require('../assets/logo_eco.png')} style={{ height:squareSize, width:squareSize}} />
                    <View style={{position:'absolute', bottom:0, right:0, margin:10, color:'white'}}>
                      <Text style={styles.testoBottoni}>School of</Text>
                      <Text style={styles.testoBottoni}>Economics</Text>
                    </View>
                
          </Pressable>

        </View>

      {/* ---------------------------------------------------------------------------------- */}

      {/* blocco corso di Laurea */}

        <View>

          <Pressable style={({pressed}) => [{backgroundColor: pressed ? colors.darkColor : colors.mediumColor}, styles.pressabili]}
              onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance')}
              onLongPress={()=>Alert.alert('Secret Message','This app has been proposed and developed by Alessio Huma.\n\nLeave the world better than you found it')}
              delayLongPress={10000}>
                <View style={{ height:(squareSize*2)+marginSize*2, width:(squareSize*2)+marginSize*2, justifyContent:'center'}}>
                    
                <View style={{marginLeft:20}}>
                  
                  <Text style={[styles.testoCorso,{fontSize:courseTitleSize}]}>GLOBAL</Text>
                  <Text style={[styles.testoCorso,{fontSize:courseTitleSize}]}>GOVERNANCE</Text>
                  <Text style={{color:'white', fontFamily:'sans-serif-light', fontSize:20}}>Beta</Text>
                </View>
                      
                <View style={{position:'absolute', bottom:0, right:0, margin:10, color:'white'}}>
                      <Text style={styles.testoBottoni}>Bachelor</Text>
                      <Text style={styles.testoBottoni}>Degree</Text>
                    </View>
                </View>
          </Pressable>        

        </View>

      {/* ---------------------------------------------------------------------------------- */}


      {/* blocchetto Delphi e QuickLinks */}
        <View style={{ flexDirection:'row'}}>  

          <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#b6b6b6' : '#e6e6dc'}, styles.pressabili]}
              onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/linktree')}>
                <View style={styles.viste}>
                  <Image source={require('../assets/logo_linktree.png')} style={{ height:squareSize, width:squareSize}} />
                  <View style={{position:'absolute', bottom:0, right:0, margin:10, color:'white'}}>
                      <Text style={[styles.testoBottoni,{color:colors.economiaColor}]}>@economia</Text>
                      <Text style={[styles.testoBottoni,{color:colors.economiaColor}]}>torvergata</Text>
                    </View>
                </View>
          </Pressable>     

          <Pressable style={({pressed}) => [{backgroundColor: pressed ? colors.delphiGreenColorPressed : colors.delphiGreenColor}, styles.pressabili]}
              onPress={()=>WebBrowser.openBrowserAsync('https://delphi.uniroma2.it/totem/jsp/homeStudenti.jsp?language=EN')}>
                <View style={styles.viste}>
                    <View>
                    <Image source={require('../assets/delphi.png')} style={{ height:squareSize, width:squareSize}} />

                    <View style={{position:'absolute', bottom:0, right:0, margin:10, color:'white'}}>
                      <Text style={styles.testoBottoni}>Student's</Text>
                      <Text style={styles.testoBottoni}>Delphi</Text>
                    </View>
                    </View>
                </View>
          </Pressable>

          

          

        </View>         
      {/*<View style={{flex:2}}>
          <AndroidFonts></AndroidFonts>
      </View> */}
        
      

      
               
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:5,
    backgroundColor:'white',
    alignItems:'center'
  },
  pressabili:{      
      elevation:2,
      shadowColor: "#000",
      shadowOpacity: 0.4,
      shadowRadius:2,
      shadowOffset:{width:0,height:3},      
      margin:marginSize,
      borderRadius:10,  
  },
  viste:{   
      
  },
  testoCorso:{
    color:'white',
    fontFamily:'sans-serif-light',
    fontSize:60
  },
  testoBottoni:{
    textAlign:'right',
    color:'white',
    fontFamily:'sans-serif-light'
  }
});

export {HomeScreen}