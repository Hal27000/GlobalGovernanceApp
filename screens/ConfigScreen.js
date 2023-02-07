import { StyleSheet, View, Text, StatusBar, Pressable} from "react-native";
import React, { useContext, useState} from 'react';
import { course, corsi, AppContext } from "../config/config";






function ConfigScreen() {

  const [globalState, setGlobalState] = useContext(AppContext);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor={globalState.darkColor} />        
          
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.clef.darkColor : corsi.clef.mediumColor}, stileBottoni]} onPress={()=>setGlobalState(corsi.clef)}>
              <View style={{alignItems:'center', alignContent:'center'}}>                
                <Text style={{color:iconColor}}>Economia e Finanza</Text>              
              </View>
            </Pressable>

            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.clem.darkColor : corsi.clem.mediumColor}, stileBottoni]} onPress={()=>setGlobalState(corsi.clem)}>
              <View style={{alignItems:'center', alignContent:'center'}}>                
                <Text style={{color:iconColor}}>Economia e Management</Text>              
              </View>
            </Pressable>

            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.baBAE.darkColor : corsi.baBAE.mediumColor}, stileBottoni]} onPress={()=>setGlobalState(corsi.baBAE)}>
              <View style={{alignItems:'center', alignContent:'center'}}>                
                <Text style={{color:iconColor}}>Business Administration and Economics</Text>              
              </View>
            </Pressable>

            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.baGG.darkColor : corsi.baGG.mediumColor}, stileBottoni]} onPress={()=>setGlobalState(corsi.baGG)}>
              <View style={{alignItems:'center', alignContent:'center'}}>                
                <Text style={{color:iconColor}}>Global Governance</Text>
              </View>
            </Pressable>

            <Text>-----</Text>

            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.clem2.darkColor : corsi.clem2.mediumColor}, stileBottoni]} onPress={()=>setGlobalState(corsi.clem2)}>
              <View style={{alignItems:'center', alignContent:'center'}}>                
                <Text style={{color:iconColor}}>Economia e Management</Text>
              </View>
            </Pressable> 
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.clef2.darkColor : corsi.clef2.mediumColor}, stileBottoni]} onPress={()=>setGlobalState(corsi.clef2)}>
              <View style={{alignItems:'center', alignContent:'center'}}>                
                <Text style={{color:iconColor}}>Economia dei Mercati e degli Intermediari</Text>
              </View>
            </Pressable> 
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.ba.darkColor : corsi.ba.mediumColor}, stileBottoni]} onPress={()=>setGlobalState(corsi.ba)}>
              <View style={{alignItems:'center', alignContent:'center'}}>                
                <Text style={{color:iconColor}}>Business Administration</Text>
              </View>
            </Pressable> 
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.economics.darkColor : corsi.economics.mediumColor}, stileBottoni]} onPress={()=>setGlobalState(corsi.economics)}>
              <View style={{alignItems:'center', alignContent:'center'}}>                
                <Text style={{color:iconColor}}>Economics</Text>
              </View>
            </Pressable> 
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.euEconBussLaw.darkColor : corsi.euEconBussLaw.mediumColor}, stileBottoni]} onPress={()=>setGlobalState(corsi.euEconBussLaw)}>
              <View style={{alignItems:'center', alignContent:'center'}}>                
                <Text style={{color:iconColor}}>European Economy and Business Law</Text>
              </View>
            </Pressable> 
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.finBan.darkColor : corsi.finBan.mediumColor}, stileBottoni]} onPress={()=>setGlobalState(corsi.finBan)}>
              <View style={{alignItems:'center', alignContent:'center'}}>                
                <Text style={{color:iconColor}}>Finance and Banking</Text>
              </View>
            </Pressable> 

    </View>
  );
}

const iconColor = "#fff"
const iconSize = 22

const stileBottoni = {
  
  justifyContent:'center',
  alignContent:'center', 
  padding:10,
  borderTopWidth:1,
  borderColor:'white'
  
}

export {ConfigScreen}







