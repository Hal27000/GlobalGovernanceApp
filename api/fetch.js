import axios from 'axios'
import {api} from '../config/config'
import * as Network from 'expo-network';

let timetableObj = {}
let listaCorsi = {}
let primoAnno = {}
let secondoAnno = {}
let terzoAnno = {}
let connection

export const checkConnection = async ()=>{
  const status = await Network.getNetworkStateAsync();
  return status.isConnected
}
  
//fetch della timetable di tutti i corsi  
const fetchMainCalendar = (async () => {
  connection = await Network.getNetworkStateAsync();
  
  
  //const response = await fetch(api)  
  try {
    const response = await axios.get(api)
  
    // const result = await response.json() non c'è .json() in axios
    
    timetableObj = await response.data.jsonlezioni
  } catch (error) {
    console.log('errore nel fetch del mega json')
    console.log(error)
  }
  
  
  
  //per ogni data
  Object.keys(timetableObj).forEach(key => {  
    //per ogni lezione del giorno
    for (let i = 0; i < timetableObj[key].length; i++) {
      
      //se la lezione i è dell'anno x

      //inserimento materie primo anno
      if(timetableObj[key][i].anno123.includes("1")){
        
        if (!primoAnno[key]){
          primoAnno[key] = []	
        }
        primoAnno[key].push(timetableObj[key][i])
      } 

      //inserimento materie secondo anno
      if (timetableObj[key][i].anno123.includes("2")){
        
        if (!secondoAnno[key]){
          secondoAnno[key] = []	
        }
        secondoAnno[key].push(timetableObj[key][i])
      }


      //inserimento materie terzo anno
      if (timetableObj[key][i].anno123.includes("3")){
        
        if (!terzoAnno[key]){
          terzoAnno[key] = []	
        }
        terzoAnno[key].push(timetableObj[key][i])
      }
    }  
  })    
})();

//#############################################################################################################

//fetch della timetable di un singolo corso specifico
export const fetchCourseCalendar = async (CourseID) => {
  
  try {
    
    const CourseData = await axios.get("https://economia.uniroma2.it/ba/globalgovernance/corso/lezioni_json/"+ CourseID)
    //CourseObject = await fetch("https://economia.uniroma2.it/en/eco/corso/lezioni_json/"+ CourseID)
       
    listaCorsi[CourseID] = CourseData.data
    
    
  } catch (error) {
    console.log('errore nel fetch del singolo corso')
    console.log(error)
  } 
  
  
  
    
    
};


export {primoAnno, secondoAnno, terzoAnno, timetableObj, listaCorsi, connection}



/*const esempioFormatoJson = {
  
    '2021-05-27':[
      { key:"0", name: "Economics of Innovation", 
        startevent: "14", finishevent: "16", aula:"s6", professor:"Cerruti", color:"green"},
      { key:"1", name: "MicroEconomics", 
        startevent: "16", finishevent: "18",  aula:"p4", professor:"Gustavo", color:"orange"},
      { key:"2", name: "Calculus", startevent: "16", finishevent: "18",  aula:"p4", professor:"Alessio", color:"blue" }
    ],
      
    '2021-05-28': [
      { key:"0", name: "Economics of Innovation", startevent: "14", finishevent: "16", aula:"s6", professor:"Cerruti", color:"green"},
      { key:"1", name: "MicroEconomics", startevent: "16", finishevent: "18",  aula:"p4", professor:"Gustavo", color:"orange" },
      { key:"2", name: "Calculus", startevent: "16", finishevent: "18",  aula:"p4", professor:"Alessio", color:"blue"  }
    ],
    
       
    
}*/