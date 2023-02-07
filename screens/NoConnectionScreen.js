import { StyleSheet, View, Text, StatusBar, Pressable} from "react-native";
import React, { useState} from 'react';
import {colors} from '../config/config'
import { MaterialIcons } from '@expo/vector-icons';



function NoConnectionScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor={course.darkColor} />
        <MaterialIcons name="wifi-off" size={60} color="grey" />
        <Text>It seems like your internet connection is not working.</Text>
        <Text>Please close the app, connect to an internet connection </Text>
        <Text> and restart the app.</Text>     
    </View>
  );
}

export {NoConnectionScreen}







