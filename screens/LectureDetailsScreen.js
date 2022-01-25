import { View, Text, Button, Linking, Alert, ScrollView, StatusBar, TouchableHighlight, Pressable, StyleSheet} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect} from 'react';
import { listaCorsi } from '../api/fetch';

let valoroso = true









function LectureDetailsScreen({route}){
  const {nomeCorso, data, courseId} = route.params
  //fetch("https://economia.uniroma2.it/en/eco/corso/lezioni_json/1488").then(response => response.json())
  //console.log("https://economia.uniroma2.it/en/eco/corso/lezioni_json/"+courseId)

  
  console.log(typeof(listaCorsi))
  
  while (listaCorsi[courseId] === undefined){return <Text>Ciao</Text>}


  return(
    <View style={{padding:10, flex:1, paddingBottom:-10}}>
      <StatusBar barStyle="light-content" backgroundColor="#00833f" />
      

        {/* View Titolo*/}
        <View>
                    
          <Text style={{fontSize:28}}>{nomeCorso}</Text>
            
        </View>

        {/* riga pulsanti */}
        <View style={{ flexDirection:'row', alignItems:'center', paddingTop:5, paddingBottom:5}}>

          {/* pulsante Course Page*/}
          <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'white' : '#e6ffcc'}, styles.pressabili]}
            onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance/corso/'+courseId)}>
                       
            <Text style={styles.coloreTesto}>Courses Page</Text>              
                           
          </Pressable>

          {/* pulsante Teaching Material*/}
          <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'white' : '#e6ffcc'}, styles.pressabili]}
            onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance/corso/materiali/'+courseId)}>
                       
            <Text style={styles.coloreTesto}>Teaching Material</Text>              
                           
          </Pressable>
          
        </View>
          
      
        {/* Tabella Orari*/}  
        
        <ScrollView style={{alignContent:'center', borderWidth:1, borderColor:'#ccc'}}>
              
            { 
              listaCorsi[courseId].lezioni.map(grafica)
            }
              
        </ScrollView>
        
        
        
      
        
    </View>
    )
}

grafica = (lezione) =>{

  
  let color = '#00833f'
  let colorBk='#f3f3f4'

  if (valoroso){
    
    colorBk= 'white'
  }

  valoroso = !valoroso

  return(
    <View style={{borderColor:'black', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#ccc'}}>
      
      <View style={{ flex:3, padding:10, backgroundColor:colorBk}}>
        <Text style={{color:'black', fontWeight:'bold'}}>{convertitoreData(lezione['Datainizio'])}</Text>
      </View>
      <View style={{flexDirection:'row', flex:2, padding:5, backgroundColor:colorBk, alignItems: 'center'}}>
        <Text>{lezione['orarioinizio'].slice(0,2)+":"+lezione['orarioinizio'].slice(2)}</Text>
        <Text> - </Text>
        <Text>{lezione['orariofine'].slice(0,2)+":"+lezione['orariofine'].slice(2)}</Text>
      </View>
      <View style={{ flexDirection:'row', flex:2, padding:10, backgroundColor:colorBk}}>
        <Text>{lezione['DESCRIPTION']}</Text>
      </View>
      
    </View>
  )
}

convertitoreData = (data) => {
  //2020-05-02
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const monthNumber = Number(data.slice(5,7))
  const finalDate = data.slice(8) +" "+ monthNames[monthNumber-1] +" "+ data.slice(0,4)
  return finalDate
}

const bottoncini =  {

  
  
}

const styles = StyleSheet.create({
  pressabili:{
    borderRadius:10,
    padding:8,
    borderRadius:10,      
    shadowRadius: 1,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation:1,
    shadowOffset: {width: -10, height: -10}
  },
  coloreTesto:{
    color: "#000"
  }
})

export {LectureDetailsScreen}