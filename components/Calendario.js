import * as React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { primoAnno, secondoAnno, terzoAnno, timetableObj } from '../api/fetch';
import FloatingButton from './FloatingButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { lightColor, mediumColor, darkColor, greyBack } from '../colors/palette';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { fetchCourseCalendar } from '../api/fetch';

  
  
  
//################################################## CLASSE AGENDA ###############################



class Calendario extends React.Component{
  constructor(props){
    super(props);
  
    this.state={
      items:{},
      numeretto:4,
      currentDate:{},
      isLoading: false
    } 
  }
   

  /* variabili per estrapolare data di oggi
    let todayDate = new Date()
    let dd = String(todayDate.getDate()).padStart(2, '0');
    let mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = todayDate.getFullYear(); 
  
    todayDate = yyyy + '-' + mm + '-' + dd;
    */
  

  loadItems = (day) => {
  
      console.log("funzione loadItems partita")
      
      console.log(day)

      console.log('-----------------------------------')

      this.setState({currentDate: day})
  
      setTimeout(() => {
        
         
        //comincia dall selected date e analizza i giorni in avanti per controllare se ci sono eventi da caricare
        for (let i = -50; i < 50; i++) {
          const timeInMillisec = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = this.timeToString(timeInMillisec)
          //console.log(timeInMillisec) //i millisecondi da Jan 1970
          //console.log(strTime) //i millisecondi convertiti in formato AAAA-MM-GG
          //console.log("valori delle date"+ Boolean(!items[strTime])) undefined dà vero mentre un array vuoto/pieno dà falso
          
  
          //if il contenuto è vuoto (undefined), caricaci dentro un array[] vuoto
          

          switch (this.state.numeretto) {
            case 1:
              
              if (!this.state.items[strTime]) {
                this.state.items[strTime] = [];
      
                if (primoAnno[strTime]){
      
                  this.state.items[strTime].push(primoAnno[strTime])
      
                }
      
              }
            break;
            
            case 2:

              if (!this.state.items[strTime]){
                this.state.items[strTime] = [];

                if (secondoAnno[strTime]){
                  this.state.items[strTime].push(secondoAnno[strTime])
                }
              }

            break;

            case 3:
            
              if (!this.state.items[strTime]){
                this.state.items[strTime] = [];

                if (terzoAnno[strTime]){
                  this.state.items[strTime].push(terzoAnno[strTime])
                }
              }

            break;
            
  
            default:
              if (!this.state.items[strTime]) {
                this.state.items[strTime] = [];
      
                if (timetableObj[strTime]){
      
                  this.state.items[strTime].push(timetableObj[strTime])
      
                }
      
              }
              
          }


        }

        //console.log("entrato nello switchhh")
        //console.log("entrato nello switchhh")
          
        

        
  
        //metodo di aggiornamento attraverso il quale i vecchi items vengono sostituiti dai nuovi
        const newItems = {};
        Object.keys(this.state.items).forEach(key => {
          newItems[key] = this.state.items[key];
          //console.log(newItems)
        });
        
        this.setState({
          items: newItems
        });
      }, 1000);
  
  }



  cambioAnno = (n) => {
    
    this.setState({items: {}, numeretto:n})

    this.loadItems(this.state.currentDate)
  }

  
  
  graficaLezione = (item) => {

    

    return(
      <View>
        
        
        

        <Pressable onPress={()=>{this.funzionedilancio(item)
                                this.setState(prevState =>({
              isLoading: !prevState.isLoading
        }))}} 
        
        style={({ pressed }) => [{backgroundColor: pressed ? darkColor : mediumColor}, styles.blocchettoLezione]}>

          

          <View >

            {/*header del titolo */}
            <View style={{ padding:6, paddingLeft:12}}> 
                <Text style={{color:'#fff'}}>
                  {item['titolo']}
                </Text> 
            </View>


            {/* spazio orario, aula, lezione */}
            <View style={{padding:12, backgroundColor:'#fff', borderBottomRightRadius:10, borderBottomLeftRadius:10}}>

              <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="clock-outline" color={"grey"} size={20} />
                <Text style={{color:'#000'}}>
                    {'  '+item['whenst'].slice(0,2)+":"+item['whenet'].slice(2) + " - " +item['whenet'].slice(0,2)+":"+item['whenet'].slice(2)}
                </Text>

              </View>

              <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="door-open" color={"grey"} size={20} />
                <Text style={{color:'#000'}}>
                  {'  '+item['luogo']}
                </Text>
              </View>

              <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="account-multiple" color={"grey"} size={20} />
                <Text style={{color:'#000'}}>
                  {'  '+item['categoria']}
                </Text>
              </View>

            </View>

          </View>

        </Pressable>
      </View>

    )
  }
  
  renderBlocchettoLezione = (item) => {
      
    return(
      <View>
        {item.map(this.graficaLezione)}
        
      </View>
    )
       
  }

  async funzionedilancio(item) {

    
    
    
    
    
    await fetchCourseCalendar(item['corsi_id'])
    
    this.setState(prevState =>({
      isLoading: !prevState.isLoading
    }))
    
    
    this.props.navigation.navigate('LectureDetailsScreen', { courseId: item['corsi_id'], nomeCorso: item['titolo']})
    
  };

  
  timeToString = (time) =>{
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    };
  
    render(){
     
      return(
        
        <View style={{ flex: 1}}>
      
          <Agenda
                    
            
            onCalendarToggled={(calendarOpened) => {
              if (calendarOpened){
                console.log('il calendario è aperto')
              }else{
                console.log('il calendario è chiuso')
              }
              
            }}
            items={this.state.items}

            onDayPress={day => {
              console.log(day);
            }}

            loadItemsForMonth={this.loadItems}
            
            renderItem={this.renderBlocchettoLezione}
            // Specify how each date should be rendered. day can be undefined if the item is not first in that day
            renderEmptyDate={() => {
              return <View style={{borderBottomColor:"#b6c1cd", borderBottomWidth:1, flexGrow:1}}>
                
              </View>;
            }}

            

            showClosingKnob={false}
            theme={{ backgroundColor: {greyBack},
              
              calendarBackground: '#fff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: mediumColor,
              selectedDayTextColor: '#ffffff',
              todayTextColor: 'red',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: mediumColor,
              selectedDotColor: '#ffffff',
              monthTextColor: darkColor,
              indicatorColor: '#333',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
              agendaDayNumColor:'grey',
              agendaDayTextColor:'grey',
              agendaTodayColor:'#000'
            }}

            
                  
          />

          

          <FloatingButton funzione={this.cambioAnno}/>
          
          {
            this.state.isLoading &&
          <View style={styles.loading}>
            <ActivityIndicator pointerEvents="none" color={darkColor} size='large' animating={this.state.isLoading}/>
          </View>}
          

          
            
        </View>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0.5,
      backgroundColor: '#F5FCFF88',
      justifyContent: 'center',
      alignItems: 'center'
  },
  blocchettoLezione: {
    marginRight: 10, 
    marginTop: 17, 
    borderRadius:10, 
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 5,
  }
})

export {Calendario}