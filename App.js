import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LocaleConfig} from 'react-native-calendars';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreen} from './screens/HomeScreen'
import {LinkScreen} from './screens/LinkScreen';
import {CalendarListScreen} from './screens/CalendarListScreen'
import {LectureDetailsScreen} from './screens/LectureDetailsScreen'
import { mediumColor } from './colors/palette';






//################################################## CLASSE AGENDA ############################## ciao
// eas build -p android --profile development


function TimetableScreen({navigation}) {
  return (
    
    <Stack.Navigator initialRouteName={CalendarListScreen}>
      <Stack.Screen name="CalendarListScreen" component={CalendarListScreen} options={{headerShown:false}}/>
      <Stack.Screen name="LectureDetailsScreen" component={LectureDetailsScreen} options={{title:'Course Agenda'}}
      
      />


    </Stack.Navigator>
    
    
    
  );
}


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Global Governance"
        
        screenOptions={{
          tabBarActiveTintColor:mediumColor,
          tabBarInactiveTintColor:'grey',
          //tabBarActiveBackgroundColor:'#f2f2f2cc',
          tabBarActiveBackgroundColor:'transparent',
          headerShown:false
          
        }}
          
        
        
        >
          
        <Tab.Screen name="Global Governance" component={HomeScreen} 
          options={({ navigation }) => ({
            
            tabBarIcon: ({ focused, color }) => {

              let iconName;
              if (focused){
                iconName = 'home'
              }else{
                iconName = 'home-outline'
              }


              return <MaterialCommunityIcons name={iconName} color={color} size={26} />
            }
          })}
        />

        

        <Tab.Screen name="Timetable" component={TimetableScreen}

          options={({ navigation }) => ({
                      
            tabBarIcon: ({ focused, color }) => {

              let iconName;
              if (focused){
                iconName = 'clock-time-ten'
              }else{
                iconName = 'clock-time-ten-outline'
              }


              return <MaterialCommunityIcons name={iconName} color={color} size={26} />
            },
            tabBarStyle:{
              position: 'absolute',
              backgroundColor: '#ffffffe6',
              
              elevation:0
            }
          })}
          
          
        />

        <Tab.Screen name="News" component={LinkScreen}


          

          options={({ navigation }) => ({
                      
            tabBarIcon: ({ focused, color }) => {

              let iconName;
              if (focused){
                iconName = 'newspaper-variant'
              }else{
                iconName = 'newspaper-variant-outline'
              }


              return <MaterialCommunityIcons name={iconName} color={color} size={26} />
            },
            unmountOnBlur:true
          })}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

/*
LocaleConfig.locales['it'] = {
  monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
  monthNamesShort: ['Gen.','Feb.','Mar.','Apr.','Mag.','Giu.','Lug.','Ago.','Sett.','Ott.','Nov.','Dic.'],
  dayNames: ['Domenica','Lunedì','Martedi','Mercoledi','Giovedi','Venerdi','Sabato'],
  dayNamesShort: ['Dom.','Lun.','Mar.','Mer.','Gio.','Ven.','Sab.'],
  today: 'Today'
};
LocaleConfig.defaultLocale = 'it';*/

const styles = StyleSheet.create({
  tabNavigatorBackground:{
    backgroundColor: 'transparent',
    position:'relative'
  }
})

export default App;
