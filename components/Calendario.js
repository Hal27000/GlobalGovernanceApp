import * as React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { primoAnno, secondoAnno, terzoAnno, timetableObj, fetchMainCalendar, fetchCourseCalendar } from '../api/fetch';
import FloatingButton from './FloatingButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fonts, AppContext } from '../config/config';
import { colors } from '../config/colors'


export const Calendario2 = (props)=>{
  const [items, setItems] = React.useState({});
  const [first, setFirst] = React.useState({})
  const [numeretto, setNumeretto] = React.useState(4);
  const [currentDate, setCurrentDate] = React.useState({});
  const [loading, setIsLoading] = React.useState(false);

  console.log(primoAnno)

  const context = React.useContext(AppContext)

  React.useEffect(()=>{
    fetchMainCalendar(context[0].api)
  });

  const timeToString = (time) =>{
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const loadItems = (day) =>{
    setCurrentDate(day)
    setTimeout(() => {

      for (let i = -50; i < 50; i++) {
        const timeInMillisec = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(timeInMillisec)
        //console.log(timeInMillisec) //i millisecondi da Jan 1970
        //console.log(strTime) //i millisecondi convertiti in formato AAAA-MM-GG
        //console.log("valori delle date"+ Boolean(!items[strTime])) undefined dà vero mentre un array vuoto/pieno dà falso
        
        //if il contenuto è vuoto (undefined), caricaci dentro un array[] vuoto
        switch (numeretto) {
          case 1:

            if (!items[strTime]) {
              items[strTime] = [];
  

              if (primoAnno[strTime]){
    
                items[strTime].push(primoAnno[strTime])
    
              }
    
            }

          break;
          
          case 2:

            if (!items[strTime]){
              items[strTime] = [];

              if (secondoAnno[strTime]){
                items[strTime].push(secondoAnno[strTime])
              }
            }

          break;

          case 3:
          
            if (!items[strTime]){
              items[strTime] = [];

              if (terzoAnno[strTime]){
                items[strTime].push(terzoAnno[strTime])
              }
            }

          break;
          

          default:
            if (!items[strTime]) {
              items[strTime] = [];

              
    
              if (timetableObj[strTime]){
    
                items[strTime].push(timetableObj[strTime])
    
              }
    
            }
            
        }
      }

      const newItems = {};
        Object.keys(items).forEach(key => {
          newItems[key] = items[key];
        });

      setItems(newItems);
    }, 1000);
  }

  const cambioAnno = (n) => {

    console.log("cambio anno in corso: " + n)
    
    setItems({});
    setNumeretto(n);
    loadItems(currentDate);
  }

  const graficaLezione = (item) => {

    let titoloLezione = item['titolo'].toLowerCase()
    let titoloFinale = titoloLezione.charAt(0).toUpperCase()
    let spazio = false
    let carattere = ''


    for (let index = 1; index < titoloLezione.length; index++) {

      carattere = titoloLezione.charAt(index)

      if (spazio){
        carattere=carattere.toUpperCase()

        spazio=false
      }

      if (carattere === ' '){

        spazio = true

      }

      titoloFinale = titoloFinale + carattere
      
    }

    

    return(
      <View style={styles.viewLezione} >

        <Pressable android_ripple={{color:'grey'}} 
          onPress={()=>{onPressSlotSingoloCorso(item); 

            setIsLoading((prevState)=>(!prevState))

            //this.setState(prevState =>({isLoading: !prevState.isLoading}))
          
          }} 
        
        style={styles.pressableLezione}>

          

          <View >

            {/*header del titolo */}
            <View style={{ padding:4, paddingLeft:12}}> 
                <Text style={{color:context[0].darkColor, fontFamily:'sans-serif-medium', fontSize:16}}>
                  {titoloFinale}
                </Text> 
            </View>


            {/* spazio orario, aula, lezione */}
            <View style={{padding:12, borderBottomRightRadius:10, borderBottomLeftRadius:10, flexDirection:'row'}}>

              <View style={{flex:2, flexDirection:'row', alignItems:'center'}}>

                
                  <MaterialCommunityIcons name="clock-outline" color={colors.economiaColorPressed} size={26} />
                  <Text style={[styles.stileTestoLezione, {fontSize:26, fontFamily: 'sans-serif-thin'}]} adjustsFontSizeToFit={true}>
                      {'  '+item['whenst'].slice(0,2)+":"+item['whenet'].slice(2) + " - " +item['whenet'].slice(0,2)+":"+item['whenet'].slice(2)}
                  </Text> 

              </View>

              <View style={{flex:1}}>

                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                  <MaterialCommunityIcons name="account-multiple" color={colors.economiaColorPressed} size={20} />
                  <Text style={styles.stileTestoLezione}>
                    {'  '+item['categoria']}
                  </Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                  <MaterialCommunityIcons name="door-open" color={colors.economiaColorPressed} size={20} />
                  <Text style={styles.stileTestoLezione}>
                    {'  '+item['luogo']}
                  </Text>
                </View>

              </View>

              

              

            </View>

          </View>

        </Pressable>
      </View>

    )
  }

  const renderBlocchettoLezione = (item) => {
      
    return(
      <View style={{marginTop:50}}>
        {item.map(graficaLezione)}
        
      </View>
    )
       
  }

  const onPressSlotSingoloCorso= async (item) => {    
    
    await fetchCourseCalendar(item['corsi_id'])

    setIsLoading((prevState)=>(!prevState))

    /* this.setState(prevState =>({
      isLoading: !prevState.isLoading
    })) */
    
    props.navigation.navigate('LectureDetailsScreen', { courseId: item['corsi_id'], aula: item['luogo'] })
    
  };

  return(
        
    <View style={{ flex: 1}}>
  
      <Agenda
                
        
        /* onCalendarToggled={(calendarOpened) => {
          if (calendarOpened){
            c.log('il calendario è aperto')
          }else{
            c.log('il calendario è chiuso')
          }
          
        }} */

        items={items}

        onDayPress={day => {
          
        }}

        loadItemsForMonth={loadItems}
        
        renderItem={renderBlocchettoLezione}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        renderEmptyDate={() => {
          return <View style={{borderBottomColor:"#b6c1cd", borderBottomWidth:1, flexGrow:1}}>
            
          </View>;
        }}

        // renderKnob={() => {
        //   return <View style={{marginBottom:20}} >
        //     <Text>Ciao</Text>
        //   </View>;
        // }}

        
        firstDay={1}

        

        showClosingKnob={false}
        theme={{ backgroundColor: colors.greyBack,
          
          calendarBackground: '#fff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: context[0].mediumColor,
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'red',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: context[0].mediumColor,
          selectedDotColor: '#ffffff',
          monthTextColor: context[0].darkColor,
          indicatorColor: '#333',
          textDayFontFamily: fonts,
          textMonthFontFamily: fonts,
          textDayHeaderFontFamily: fonts,
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

      

      <FloatingButton funzione={cambioAnno} contesto={context[0]}/>
      
      {
        loading &&
      <View style={styles.loading}>
        <ActivityIndicator pointerEvents="none" color={context[0].darkColor} size='large' animating={loading}/>
      </View>}
      

      
        
    </View>
)

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
  viewLezione: {
    overflow:'hidden', 
    marginRight: 10, 
    marginTop: 17,
    borderRadius:10, 
    backgroundColor:'green',
    elevation: 5,
  },
  pressableLezione: {
    
    backgroundColor:'#fff', 
    paddingRight: 10, 
    paddingTop: 4,
    shadowColor: "black",
      shadowOpacity: 0.4,
      shadowRadius:2,
      shadowOffset:{width:0,height:3},
    
  },
  stileTestoLezione:{
    fontFamily: fonts,
    color:'#000'
  }
})

