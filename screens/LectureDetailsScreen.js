import { View, Text, ScrollView, StatusBar, TouchableHighlight, Pressable, StyleSheet, PixelRatio} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { listaCorsi } from '../api/fetch';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { colors, course,  fonts, AppContext } from '../config/config';
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";



function LectureDetailsScreen({route}){

  const context = React.useContext(AppContext)
  const {nomeCorso, data, courseId, aula, nomeDocente} = route.params
  
  while (listaCorsi[courseId] === undefined){return <Text>Ciao</Text>}

  //console.log(listaCorsi[courseId].corso.btnpresenza)


  return(
    <View style={{flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor={context[0].darkColor} />

      <View style={{ backgroundColor:"white", shadowColor:'black', elevation:5}}>
              
        {/*Titolo*/} 

          <View style={{margin:10}}>

            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:24, fontWeight:'bold'}}>
                  {listaCorsi[courseId].corso.NAME}                
              </Text>
            </View>
            {listaCorsi[courseId].corso.TITOLARE?(
              <Text>
                {listaCorsi[courseId].corso.TITOLARE}
              </Text>
            ):(
              <></>
            )}


          </View>                    
          
          

        {/* riga pulsanti mini */}
          <View style={{ flexDirection:'row', alignItems:'center', marginBottom:10}}>

            {/* pulsante Course Page*/}
            <View style={styles.viewPressabili}>
              <Pressable android_ripple={{color:context[0].darkColor}} style={[styles.pressabili,{backgroundColor: context[0].mediumColor}]}
                  onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/'+context[0].api+'/corso/'+courseId)}>
                              
                  <View style={{ flexDirection:'row', alignItems:'center'}}>
                    <Text style={styles.stileTestoBottoni}>Course Page </Text>
                    <Ionicons name="open-outline" color={'white'} size={15} />
                  </View>              
                                  
              </Pressable>
            </View>
            

            {/* pulsante Teaching Material*/}
            <View style={styles.viewPressabili}>
            <Pressable android_ripple={{color:context[0].darkColor}} style={[styles.pressabili,{backgroundColor: context[0].mediumColor}]}
                onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/'+context[0].api+'/corso/materiali/'+courseId)}>
                            
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                  <Text style={styles.stileTestoBottoni}>Teaching Material </Text>
                  <Ionicons name="open-outline" color={'white'} size={15} />
                </View>              
                                
            </Pressable>  
            </View>               
          </View>

        {/* riga pulsante PRESENZA */}
          {/* { listaCorsi[courseId].corso.btnpresenza ? 
            
            <View style={{marginBottom:10}}>
              <Pressable style={({ pressed }) => [{backgroundColor: pressed ? colors.economiaColorPressed : colors.economiaColor}, [styles.pressabili,{backgroundColor: context[0].mediumColor}]]}
              onPress={()=>WebBrowser.openBrowserAsync(listaCorsi[courseId].corso.btnpresenza)}>
                        
              <Text style={styles.stileTestoBottonePresenze}>Confirm your attendance in {aula} </Text>
              <Ionicons name="open-outline" color={'white'} size={15} />               
                            
              </Pressable>
            </View>
            : 
            <></>
          } */}
      </View>


      {/* Tabella Orari*/}
      <View style={{ flexBasis:470, flexGrow:1, backgroundColor:colors.greyBack }}>

        <ScrollView style={{ paddingHorizontal:10}}>
                
          {listaCorsi[courseId].lezioni.map(grafica)}
          <View style={{paddingBottom:useBottomTabBarHeight()}}></View>
                              
        </ScrollView>

      </View>
       
      
      
      
      
        
    

    </View>
    
    )
}

grafica = (lezione) =>{


  return(
    <View style={styles.stileSlot}>
      
      {/*Blocchetto Data */}
      <View style={{ flex:1}}>
        <Text style={[styles.stileData, {fontSize:20, color:'green'}]}>{lezione['Datainizio'].slice(8)+ " " +convertitoreData(lezione['Datainizio']).slice(0,3)}</Text>
        <Text style={styles.stileData}>{convertitoreData(lezione['Datainizio']).slice(-4)}</Text>
        
      </View>

      {/*Blocchetto Orario */}
      <View style={{flexDirection:'row', flex:1.5,  alignItems: 'center'}}>
        <MaterialCommunityIcons name="clock-outline" color={colors.economiaColorPressed} size={18} />
        <Text style={styles.stileTestoLezioni}> {lezione['orarioinizio'].slice(0,2)+":"+lezione['orarioinizio'].slice(2)}</Text>
        <Text style={styles.stileTestoLezioni}> - </Text>
        <Text style={styles.stileTestoLezioni}>{lezione['orariofine'].slice(0,2)+":"+lezione['orariofine'].slice(2)}</Text>
      </View>

      {/*Blocchetto Aula */}
      <View style={{ flexDirection:'row', flex:1, margin:10, alignItems: 'center'}}>
        <MaterialCommunityIcons name="door-open" color={colors.economiaColorPressed} size={18} />
        <Text style={styles.stileTestoLezioni}> {lezione['DESCRIPTION']}</Text>
      </View>
      
    </View>
  )
}

convertitoreData = (data) => {
  //2020-05-02
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const monthNumber = Number(data.slice(5,7))
  const finalDate = monthNames[monthNumber-1] +" "+ data.slice(0,4)
  return finalDate
}





const styles = StyleSheet.create({
  viewPressabili:{
    overflow:'hidden',
    flex:1,
    borderRadius:5,
    marginHorizontal:10,
    flexDirection:'row',
    elevation:5,
    shadowColor: "black",
    
  },
  pressabili:{    
    padding:10,    
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    backgroundColor:course.mediumColor
    
  },
  stileTestoBottoni:{
    color: "white",
    
    fontFamily:fonts
  },
  stileTestoBottonePresenze:{
    color: "white",
    fontFamily:fonts
  },
  stileTestoLezioni:{
    color: "black",
    fontFamily:fonts
  },
  stileSlot:{
    flexDirection:'row',
    backgroundColor:'white',
    margin:5,
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:10,
    shadowColor: "black",
    elevation:5,
    
  },
  stileData:{
    color:'black'
  }
})

export {LectureDetailsScreen}