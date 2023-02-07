import axios from 'axios'
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
export const fetchMainCalendar = async (api) => {

  console.log("Fetch Partito")

  connection = await Network.getNetworkStateAsync();
    
  try {
    const response = await axios.get('https://economia.uniroma2.it/'+api+'/dida/orariolezioni/?formato=json')
  
    // const result = await response.json() non c'è .json() in axios

    

    timetableObj = await response.data.jsonlezioni
  } catch (error) {
    console.log(error)
  }
  
  //per ogni data
  Object.keys(timetableObj).forEach(data => {  
    //per ogni lezione del giorno
    for (let i = 0; i < timetableObj[data].length; i++) {
      
      //se la lezione i è dell'anno x (primo, secondo, terzo)

      //inserimento materie primo anno
      if(timetableObj[data][i].anno123.includes("1")){

        
        
        if (!primoAnno[data]){
          primoAnno[data] = []	
        }
        primoAnno[data].push(timetableObj[data][i])
      } 

      //inserimento materie secondo anno
      if (timetableObj[data][i].anno123.includes("2")){
        
        if (!secondoAnno[data]){
          secondoAnno[data] = []	
        }
        secondoAnno[data].push(timetableObj[data][i])
      }


      //inserimento materie terzo anno
      if (timetableObj[data][i].anno123.includes("3")){
        
        if (!terzoAnno[data]){
          terzoAnno[data] = []	
        }
        terzoAnno[data].push(timetableObj[data][i])
      }
    }  
  })   
  
};

//#############################################################################################################

//fetch della timetable di un singolo corso specifico
export const fetchCourseCalendar = async (CourseID) => {  
  try {
    
    const CourseData = await axios.get("https://economia.uniroma2.it/ba/globalgovernance/corso/lezioni_json/"+ CourseID)
    //CourseObject = await fetch("https://economia.uniroma2.it/en/eco/corso/lezioni_json/"+ CourseID)       
    listaCorsi[CourseID] = CourseData.data    
    
  } catch (error) {
    console.log(error)
  }  
};

export {primoAnno, secondoAnno, terzoAnno, timetableObj, listaCorsi, connection}