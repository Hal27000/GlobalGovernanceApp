import { View, Text, Button, Linking, Alert, ScrollView, StatusBar, TouchableHighlight, Pressable, StyleSheet} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { listaCorsi } from '../api/fetch';
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { mediumColor, greyBack} from '../colors/palette';

let valoroso = true

function LectureDetailsScreen({route}){
  const {nomeCorso, data, courseId} = route.params

  console.log(typeof(listaCorsi))
  
  while (listaCorsi[courseId] === undefined){return <Text>Ciao</Text>}


  return(
    <View style={{flexDirection:'column', marginBottom:useBottomTabBarHeight()}}>
      <StatusBar barStyle="light-content" backgroundColor={mediumColor} />

      <View style={{padding:10, backgroundColor:"white", shadowColor:'black',elevation:5}}>
              
        {/*Titolo*/}                     
        <Text style={{fontSize:24, fontWeight:'bold', marginTop:10, marginBottom:5}}>
          {nomeCorso}
        </Text>


        {/* riga pulsanti */}
        <View style={{ flexDirection:'row', alignItems:'center', marginTop:10, marginBottom:10}}>

          {/* pulsante Course Page*/}
          <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'white' : coloreBottoni}, styles.pressabili]}
              onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance/corso/'+courseId)}>
                          
              <Text style={styles.coloreTestoBottoni}>Courses Page </Text>
              <MaterialCommunityIcons name="open-in-new" color={'white'} size={15} />              
                              
          </Pressable>

          {/* pulsante Teaching Material*/}
          <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'white' : coloreBottoni}, styles.pressabili]}
              onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance/corso/materiali/'+courseId)}>
                          
              <Text style={styles.coloreTestoBottoni}>Teaching Material </Text>
              <MaterialCommunityIcons name="open-in-new" color={'white'} size={15} />               
                              
          </Pressable>
              
        </View>

      </View>

      <View style={{backgroundColor:{greyBack}}}>
        {/* Tabella Orari*/} 
      <ScrollView style={{ paddingHorizontal:10}}>
                
                { 
                  listaCorsi[courseId].lezioni.map(grafica)
                }
                  
                        
              </ScrollView>
      </View>
      
      
        
    

    </View>
    
    )
}

grafica = (lezione) =>{

  
  
  let colorBk='#f3f3f4'

  if (valoroso){
    
    colorBk= 'white'
  }

  valoroso = !valoroso

  return(
    <View style={styles.stileSlot}>
      
      <View style={{ flex:1.5, padding:5}}>
        <Text style={styles.stileData, {fontSize:20, color:'green'}}>{lezione['Datainizio'].slice(8)+ " " +convertitoreData(lezione['Datainizio']).slice(0,3)}</Text>
        <Text style={styles.stileData}>{convertitoreData(lezione['Datainizio']).slice(-4)}</Text>
        
      </View>

      <View style={{flexDirection:'row', flex:2, padding:5, alignItems: 'center'}}>
        <MaterialCommunityIcons name="clock-outline" color={"grey"} size={18} />
        <Text> {lezione['orarioinizio'].slice(0,2)+":"+lezione['orarioinizio'].slice(2)}</Text>
        <Text> - </Text>
        <Text>{lezione['orariofine'].slice(0,2)+":"+lezione['orariofine'].slice(2)}</Text>
      </View>

      <View style={{ flexDirection:'row', flex:2, padding:10,  alignItems: 'center'}}>
        <MaterialCommunityIcons name="door-open" color={"grey"} size={18} />
        <Text> {lezione['DESCRIPTION']}</Text>
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

const coloreBottoni = mediumColor

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
  coloreTestoBottoni:{
    color: "white"
  },
  stileSlot:{
    flexDirection:'row',
    backgroundColor:'white',
    margin:5,
    borderRadius:5,
    padding:5,
    shadowColor: "black",
    elevation:5,
    
  },
  stileData:{
    color:'black'
  }
})

export {LectureDetailsScreen}