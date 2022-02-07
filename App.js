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
import {LectureDetailsScreen} from './screens/LectureDetailsScreen2'
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
          tabBarActiveBackgroundColor:'#f2f2f2cc',
          
          headerShown:false
          
        }}
          
        
        
        >
          
        <Tab.Screen name="Global Governance" component={HomeScreen} 
          options={{    
            
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )
          }}
        />

        

        <Tab.Screen name="Timetable" component={TimetableScreen}
          options={{    
            
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="clock-time-ten-outline" color={color} size={26} />
            ),
            tabBarStyle:{
              position: 'absolute',
              backgroundColor: '#ffffffe6',
              
              elevation:0
            }
          }}
        />

        <Tab.Screen name="QuickLink" component={LinkScreen}


          options={{   unmountOnBlur:true, 
            
            
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="open-in-new" color={color} size={size} />
            )
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

LocaleConfig.locales['it'] = {
  monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
  monthNamesShort: ['Gen.','Feb.','Mar.','Apr.','Mag.','Giu.','Lug.','Ago.','Sett.','Ott.','Nov.','Dic.'],
  dayNames: ['Domenica','Lunedì','Martedi','Mercoledi','Giovedi','Venerdi','Sabato'],
  dayNamesShort: ['Dom','Lun.','Mar.','Mer.','Gio.','Ven.','Sab.','Dom'],
  today: 'Oggi'
};
LocaleConfig.defaultLocale = 'it';

const styles = StyleSheet.create({
  tabNavigatorBackground:{
    backgroundColor: 'transparent',
    position:'relative'
  }
})

export default App;
