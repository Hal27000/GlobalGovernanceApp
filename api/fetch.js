import axios from 'axios'
import {api} from '../config/config'

let timetableObj = {}
let listaCorsi = {}
let CourseObject
let primoAnno = {}
let secondoAnno = {}
let terzoAnno = {}
  
//fetch della timetable di tutti i corsi  
const fetchMainCalendar = (async () => {
      
  //const response = await fetch(api)  
  try {
    const response = await axios.get(api)
    //console.log(response)
   // const result = await response.json() non c'è .json() in axios
    //console.log(response)
    timetableObj = await response.data.jsonlezioni
  } catch (error) {
    console.log('wewe')
    console.log(error)
  }
  //console.log(response)  
  console.log("fetch completato")
  //listaCorsi = risultato
  //per ogni data
  Object.keys(timetableObj).forEach(key => {  
    //per ogni lezione del giorno
    for (let i = 0; i < timetableObj[key].length; i++) {
      //console.log(timetableObj[key][i].anno123)
      //se la lezione i è dell'anno x

      //inserimento materie primo anno
      if(timetableObj[key][i].anno123.includes("1")){
        //console.log("true")
        if (!primoAnno[key]){
          primoAnno[key] = []	
        }
        primoAnno[key].push(timetableObj[key][i])
      } 

      //inserimento materie secondo anno
      if (timetableObj[key][i].anno123.includes("2")){
        //console.log("false")
        if (!secondoAnno[key]){
          secondoAnno[key] = []	
        }
        secondoAnno[key].push(timetableObj[key][i])
      }


      //inserimento materie terzo anno
      if (timetableObj[key][i].anno123.includes("3")){
        //console.log("false")
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
const fetchCourseCalendar = async (CourseID) => {
  
  try {
    
    CourseObject = await axios.get("https://economia.uniroma2.it/en/eco/corso/lezioni_json/"+ CourseID)
  } catch (error) {
    console.log('errore nel fetch del singolo corso')
    console.log(error)
  }
 
    
  
  listaCorsi[CourseID] = CourseObject
  
    
    
};


export {primoAnno, secondoAnno, terzoAnno, timetableObj, listaCorsi, fetchCourseCalendar}



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