import { View, StatusBar, Text, ActivityIndicator, StyleSheet} from "react-native";
import { Calendario} from "../components/Calendario"
import React, {useState} from 'react';
import { listaCorsi } from '../api/fetch';
import { useNavigation } from '@react-navigation/native';
import { colors } from "../config/config";

function CalendarListScreen(props){
  const navigation = useNavigation()
  const [isLoading, setLoading] = useState(false)
  return(
    <View  style={{ flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.mediumColor} />

      <Calendario caricamento={()=>setLoading(!isLoading)} navigation={navigation} listaCorsi={listaCorsi}></Calendario>
      
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