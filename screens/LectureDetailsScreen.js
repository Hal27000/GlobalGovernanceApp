import { View, Text, Linking, Alert, ScrollView, StatusBar, Pressable, StyleSheet} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { listaCorsi } from '../api/fetch';

let valoroso = true









function LectureDetailsScreen({route}){
  const {nomeCorso, data, courseId} = route.params
  //fetch("https://economia.uniroma2.it/en/eco/corso/lezioni_json/1488").then(response => response.json())
  //console.log("https://economia.uniroma2.it/en/eco/corso/lezioni_json/"+courseId)

  
  console.log(typeof(listaCorsi))
  
  while (listaCorsi[courseId] === undefined){return <Text>Ciao</Text>}


  return(
    <View style={{padding:10, flex:1, marginBottom:40, backgroundColor:"white"}}>
      <StatusBar barStyle="light-content" backgroundColor="#00833f" />
      

      {/* View Titolo*/}
      <View>
                    
        <Text style={{fontSize:24, marginVertical:10}}>{nomeCorso}</Text>
            
      </View>

      {/* riga pulsanti */}
      <View style={{ flexDirection:'row', alignItems:'center', paddingTop:5, paddingBottom:5}}>

         {/* pulsante Course Page*/}
         <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'white' : coloreBottoni}, styles.pressabili]}
           onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance/corso/'+courseId)}>
                       
           <Text style={styles.coloreTestoBottoni}>Courses Page</Text>              
                           
         </Pressable>

         {/* pulsante Teaching Material*/}
        <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'white' : coloreBottoni}, styles.pressabili]}
          onPress={()=>WebBrowser.openBrowserAsync('https://economia.uniroma2.it/ba/globalgovernance/corso/materiali/'+courseId)}>
                       
          <Text style={styles.coloreTestoBottoni}>Teaching Material</Text>              
                           
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

  
  
  let colorBk='#f3f3f4'

  if (valoroso){
    
    colorBk= 'white'
  }

  valoroso = !valoroso

  return(
    <View style={{ flexDirection:'row', backgroundColor:colorBk}}>
      
      <View style={{ flex:2.5, padding:10}}>
        <Text style={styles.stileData, {fontSize:26, color:'green'}}>{lezione['Datainizio'].slice(8)+convertitoreData(lezione['Datainizio']).slice(0,4)}</Text>
        <Text style={styles.stileData}>{convertitoreData(lezione['Datainizio'])}</Text>
        
      </View>

      <View style={{flexDirection:'row', flex:2, padding:5, alignItems: 'center'}}>
        <MaterialCommunityIcons name="clock-outline" color={"grey"} size={18} />
        <Text>{lezione['orarioinizio'].slice(0,2)+":"+lezione['orarioinizio'].slice(2)}</Text>
        <Text> - </Text>
        <Text>{lezione['orariofine'].slice(0,2)+":"+lezione['orariofine'].slice(2)}</Text>
      </View>

      <View style={{ flexDirection:'row', flex:2, padding:10,  alignItems: 'center'}}>
        <MaterialCommunityIcons name="door-open" color={"grey"} size={18} />
        <Text>{lezione['DESCRIPTION']}</Text>
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

const coloreBottoni = "#00833f"

const styles = StyleSheet.create({
  pressabili:{
    borderRadius:10,
    padding:10,
    marginRight: 10,
    borderRadius:10,      
    shadowRadius: 1,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation:1,
    shadowOffset: {width: -10, height: -10}
  },
  coloreTestoBottoni:{
    color: "#000"
  },
  stileData:{
    color:'black'
  }
})

export {LectureDetailsScreen}