import { View, StatusBar, Text, ActivityIndicator, StyleSheet} from "react-native";
import React, {useState, useContext} from 'react';
import { listaCorsi } from '../api/fetch';
import { useNavigation } from '@react-navigation/native';
import { course, AppContext } from "../config/config";
import { Calendario2 } from "../components/Calendario";


function CalendarListScreen({route}){
  const navigation = useNavigation()
  const context = useContext(AppContext)
  const [isLoading, setLoading] = useState(false)
  return(
    <View  style={{ flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={context[0].darkColor} />
     
      

      <Calendario2 caricamento={()=>setLoading(!isLoading)} navigation={navigation} listaCorsi={listaCorsi}></Calendario2>
      
      {
        isLoading &&
        <View style={styles.loading}>
          <ActivityIndicator pointerEvents="none" color="#000" size='large' animating={isLoading}/>
        </View>
      }

      
        
                   
    </View>
  );

  
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
  }
})

export {CalendarListScreen}