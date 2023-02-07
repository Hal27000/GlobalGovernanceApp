import { StyleSheet, View, Text, StatusBar, Pressable} from "react-native";
import React, { useContext, useState} from 'react';
import { course, corsi, AppContext } from "../config/config";






function ConfigScreen() {

  const [globalState, setGlobalState] = useContext(AppContext);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor={globalState.darkColor} />   

        <View style={{ justifyContent: 'center'}}>

          <View style={{flex:1}}>
            <Text>Choose your course</Text> 
          </View>

           

          <View style={{flex:2}}>

            <View style={{flexDirection:'row', flex:1}}>
              <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.clef.darkColor : corsi.clef.mediumColor}, styles.stileBottoni, {flex:1}]} onPress={()=>setGlobalState(corsi.clef)}>
                <View style={styles.center}>                
                  <Text style={{color:iconColor}}>Economia e Finanza</Text>              
                </View>
              </Pressable>
              <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.clem.darkColor : corsi.clem.mediumColor}, styles.stileBottoni, {flex:1}]} onPress={()=>setGlobalState(corsi.clem)}>
                <View style={styles.center}>                
                  <Text style={{color:iconColor}}>Economia e Management</Text>              
                </View>
              </Pressable>
            </View>

            <View style={{ flexDirection:'row', flex:1}}>    
              <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.baBAE.darkColor : corsi.baBAE.mediumColor}, styles.stileBottoni, {flex:1}]} onPress={()=>setGlobalState(corsi.baBAE)}>
                <View style={styles.center}>                
                  <Text style={{color:iconColor}}>Business Administration and Economics</Text>              
                </View>
              </Pressable>
              <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.baGG.darkColor : corsi.baGG.mediumColor}, styles.stileBottoni, {flex:1}]} onPress={()=>setGlobalState(corsi.baGG)}>
                <View style={styles.center}>                
                  <Text style={{color:iconColor}}>Global Governance</Text>
                </View>
              </Pressable>
            </View>

          </View>   



          

          <View style={{flex:2}}>

            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.clem2.darkColor : corsi.clem2.mediumColor}, styles.stileBottoni]} onPress={()=>setGlobalState(corsi.clem2)}>
              <View style={styles.center}>                
                <Text style={{color:iconColor}}>Economia e Management</Text>
              </View>
            </Pressable> 
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.clef2.darkColor : corsi.clef2.mediumColor}, styles.stileBottoni]} onPress={()=>setGlobalState(corsi.clef2)}>
              <View style={styles.center}>                
                <Text style={{color:iconColor}}>Economia dei Mercati e degli Intermediari</Text>
              </View>
            </Pressable> 
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.ba.darkColor : corsi.ba.mediumColor}, styles.stileBottoni]} onPress={()=>setGlobalState(corsi.ba)}>
              <View style={styles.center}>                
                <Text style={{color:iconColor}}>Business Administration</Text>
              </View>
            </Pressable> 
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.economics.darkColor : corsi.economics.mediumColor}, styles.stileBottoni]} onPress={()=>setGlobalState(corsi.economics)}>
              <View style={styles.center}>                
                <Text style={{color:iconColor}}>Economics</Text>
              </View>
            </Pressable> 
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.euEconBussLaw.darkColor : corsi.euEconBussLaw.mediumColor}, styles.stileBottoni]} onPress={()=>setGlobalState(corsi.euEconBussLaw)}>
              <View style={styles.center}>                
                <Text style={{color:iconColor}}>European Economy and Business Law</Text>
              </View>
            </Pressable> 
            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? corsi.finBan.darkColor : corsi.finBan.mediumColor}, styles.stileBottoni]} onPress={()=>setGlobalState(corsi.finBan)}>
              <View style={styles.center}>                
                <Text style={{color:iconColor}}>Finance and Banking</Text>
              </View>
            </Pressable> 

          </View>

        </View>

    </View>
  );
}

const iconColor = "#fff"

const styles = StyleSheet.create({
  center: {
    alignItems:'center', 
    justifyContent:'center'
  },

  stileBottoni: {
    
    justifyContent:'center',
     
    padding:15,
    margin:5,
    borderRadius:5
  }
})


export {ConfigScreen}







