import { View, Text, ScrollView, StatusBar, TouchableHighlight, Pressable, StyleSheet, PixelRatio} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { listaCorsi } from '../api/fetch';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { colors, sigla, fonts } from '../config/config';



function LectureDetailsScreen({route}){
  const {nomeCorso, data, courseId} = route.params
  
  console.log(typeof(listaCorsi))
  
  while (listaCorsi[courseId] === undefined){return <Text>Ciao</Text>}


  return(
    <View style={{flex:1}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.mediumColor} />

      <View style={{padding:10, backgroundColor:"white", shadowColor:'black', elevation:5}}>
              
        {/*Titolo*/}                     
        <Text style={{fontSize:24, fontWeight:'bold', marginTop:10, marginBottom:5}}>
            {nomeCorso}
        </Text>
          

        {/* riga pulsanti */}
        <View style={{ flexDirection:'row', alignItems:'center', marginTop:10, marginBottom:10}}>

          {/* pulsante Course Page*/}
          <Pressable style={({ pressed }) => [{backgroundColor: pressed ? colors.darkColor : colors.mediumColor}, styles.pressabili]}
              onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/'+sigla+'/corso/'+courseId)}>
                          
              <Text style={styles.stileTestoBottoni}>Courses Page </Text>
              <MaterialCommunityIcons name="open-in-new" color={'white'} size={15} />              
                              
          </Pressable>

          {/* pulsante Teaching Material*/}
          <Pressable style={({ pressed }) => [{backgroundColor: pressed ? colors.darkColor : colors.mediumColor}, styles.pressabili]}
              onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/'+sigla+'/corso/materiali/'+courseId)}>
                          
              <Text style={styles.stileTestoBottoni}>Teaching Material </Text>
              <MaterialCommunityIcons name="open-in-new" color={'white'} size={15} />               
                              
          </Pressable>
              
        </View>
      </View>

      <View style={{ flexBasis:470, flexGrow:1, backgroundColor:colors.greyBack }}>

        <ScrollView style={{ paddingHorizontal:10}}>
                
          {listaCorsi[courseId].lezioni.map(grafica)}
          <View style={{paddingBottom:useBottomTabBarHeight()}}></View>
                              
        </ScrollView>

      </View>
      {/* Tabella Orari*/} 
      
      
      
      
        
    

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
      <View style={{flexDirection:'row', flex:1, alignContent:'center',  alignItems: 'center', margin:10}}>
        <MaterialCommunityIcons name="clock-outline" color={"grey"} size={18} />
        <Text style={styles.stileTestoLezioni}> {lezione['orarioinizio'].slice(0,2)+":"+lezione['orarioinizio'].slice(2)}</Text>
        <Text style={styles.stileTestoLezioni}> - </Text>
        <Text style={styles.stileTestoLezioni}>{lezione['orariofine'].slice(0,2)+":"+lezione['orariofine'].slice(2)}</Text>
      </View>

      {/*Blocchetto Aula */}
      <View style={{ flexDirection:'row', flex:1, margin:10, alignContent:'center',  alignItems: 'center'}}>
        <MaterialCommunityIcons name="door-open" color={"grey"} size={18} />
        <Text style={styles.stileTestoLezioni}> {lezione['DESCRIPTION'] === 'Lezione online'?'Online lecture':lezione['DESCRIPTION']}</Text>
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

const bottoncini =  {

  
  
}

const coloreBottoni = colors.mediumColor

const styles = StyleSheet.create({
  pressabili:{
    
    padding:10,
    marginRight: 10,
    borderRadius:5,      
    shadowColor: "black",
    elevation:5,
    flexDirection:'row',
    alignItems:'center'
    
  },
  stileTestoBottoni:{
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
    padding:10,
    shadowColor: "black",
    elevation:5,
    
  },
  stileData:{
    color:'black'
  }
})

export {LectureDetailsScreen}