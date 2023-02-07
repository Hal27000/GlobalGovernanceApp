import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import {HomeScreen} from './screens/HomeScreen'
import { CourseScreen } from './screens/CourseScreen';
import {CalendarListScreen} from './screens/CalendarListScreen'
import {LectureDetailsScreen} from './screens/LectureDetailsScreen'
import {ConfigScreen} from './screens/ConfigScreen'

//Icons and Colors
import { Ionicons} from '@expo/vector-icons';
import { course, corsi, AppContext } from './config/config';

import { checkConnection, fetchMainCalendar} from "./api/fetch"
import { NoConnectionScreen } from './screens/NoConnectionScreen';


// eas build -p android --profile development


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [connection, setConnection] = React.useState(true);
  const [currentCourse, setCourse] = React.useState(corsi.baGG);

  /* React.useEffect(() => { 
    fetchMainCalendar(currentCourse.api) }
  ); */

  try {
    checkConnection().then(res=>{
      console.log(res)
      setConnection(res)
      //console.log('App sta controllando')
      setIsLoading(false)
    })
  } catch (error) {
    console.log(error)
  }

  if(isLoading){
    return(
      //da inserire Splash Screen
      <></>      
    )
  }
  return (
    <AppContext.Provider value={[currentCourse, setCourse]}>
      <NavigationContainer>
        <Tab.Navigator

          initialRouteName="Home"          
          screenOptions={{
            tabBarActiveTintColor:currentCourse.darkColor,
            tabBarInactiveTintColor:'grey',          
            tabBarActiveBackgroundColor:'transparent',            
            headerShown:false            
          }}
        >
            
          <Tab.Screen name="Home" component={connection?HomeScreen:NoConnectionScreen} 
            options={({ navigation }) => ({
              
              tabBarIcon: ({ focused, color }) => {

                let iconName;
                if (focused){
                  iconName = 'home'
                }else{
                  iconName = 'home-outline'
                }
                return <Ionicons name={iconName} color={color} size={26} />
                }
            })}
          />

          
          <Tab.Screen name="Timetable" component={CalendarStack}
            options={({ navigation }) => ({                      
              tabBarIcon: ({ focused, color }) => {
                let iconName;
                if (focused){iconName = 'calendar'}else{iconName = 'calendar-outline'}
                return <Ionicons name={iconName} size={26} color={color} />
              },
              unmountOnBlur:true,
              tabBarStyle:{
                
                position: 'absolute',
                backgroundColor: '#ffffffe6',              
                elevation:0
              },
              tabBarActiveTintColor:currentCourse.darkColor
            })}
          />
          

          <Tab.Screen name="Courses" component={CourseScreen}
            options={({ navigation }) => ({                      
              tabBarIcon: ({ focused, color }) => {
                let iconName;
                if (focused){iconName = 'library'}else{iconName = 'library-outline'}
                return <Ionicons name={iconName} size={26} color={color} />
              },
              tabBarActiveTintColor:currentCourse.darkColor,
              unmountOnBlur:true
            })}
          />

          <Tab.Screen name="Settings" component={ConfigScreen}
            options={({ navigation }) => ({                      
              tabBarIcon: ({ focused, color }) => {
                let iconName;
                if (focused){iconName = 'settings'}else{iconName = 'settings-outline'}
                return <Ionicons name={iconName} size={26} color={color} />
              },
              tabBarActiveTintColor:currentCourse.darkColor,
              unmountOnBlur:true
            })}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

function CalendarStack(currentCourse) {
  return (    
    <Stack.Navigator initialRouteName={CalendarListScreen}>
      <Stack.Screen name="CalendarListScreen" component={CalendarListScreen} options={{headerShown:false, currentCourse}}/>
      <Stack.Screen name="LectureDetailsScreen" component={LectureDetailsScreen} options={{title:'Course Agenda'}}/>
    </Stack.Navigator>
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


