import { View, StatusBar, Text, Pressable, StyleSheet, Image} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import AppLoading from 'expo-app-loading';
import { mediumColor } from "../colors/palette";
import { useFonts,
  Quattrocento_400Regular,
  Quattrocento_700Bold 
} from '@expo-google-fonts/quattrocento'
import React from 'react';






function HomeScreen() {

  let [fontsLoaded] = useFonts({Quattrocento_400Regular, Quattrocento_700Bold})
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={mediumColor}/>

      

      <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#f2f2f2' : 'green'}, styles.pressabili]}
          onPress={()=>WebBrowser.openBrowserAsync('http://web.uniroma2.it/')}>
            <View style={styles.viste}>
                <Image source={require('../assets/due.png')} resizeMode='center' style={{ height:60}} /> 
            </View>  
      </Pressable>
            
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#f2f2f2' : '#990033'}, styles.pressabili]}
          onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/')}>
            <View style={styles.viste}>
                <Image source={require('../assets/economia.png')} resizeMode='center' style={{ height:60}} />
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

      <View style={[styles.viste,{flex:3, flexDirection:"row", alignItems:'flex-start', justifyContent:'flex-start'}]}>
       {/* pulsante Course Page*/}
       <Pressable style={({ pressed }) => [{backgroundColor: pressed ? darkColor : mediumColor}, {marginRight:10}]}
              onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance/corso/'+courseId)}>
                          
              <Text style={{color:'white'}}>Courses Page </Text>
                           
                              
          </Pressable>

          {/* pulsante Teaching Material*/}
          <Pressable style={({ pressed }) => [{backgroundColor: pressed ? darkColor : mediumColor}]}
              onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance/corso/materiali/'+courseId)}>
                          
              <Text style={{color:'white'}}>Teaching Material </Text>
                             
                              
          </Pressable>
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
});

export {HomeScreen}