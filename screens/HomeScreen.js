import { View, StatusBar, Text} from "react-native";
import { mediumColor } from "../colors/palette";
import React from 'react';




function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" backgroundColor={mediumColor} />
      <Text>Home Global Governance però un po' più bella</Text>
               
    </View>
  );
}

export {HomeScreen}