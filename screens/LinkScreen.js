import { StyleSheet, View, Text, StatusBar, Button, TouchableHighlight} from "react-native";
import React, { useState, useRef} from 'react';
import { WebView } from 'react-native-webview';
import ProgressBar from 'react-native-progress/Bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mediumColor } from "../colors/palette";




function LinkScreen() {

  const webViewRef = useRef(null)
  
  const goback = () => {
    webViewRef.current.goBack();
  };

  const goforward = () => {
    webViewRef.current.goForward();
    
  };

  

  const [progress, setProgress] = useState(0)
  const [isLoaded, setLoaded] = useState(0)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle="light-content" backgroundColor={mediumColor} />


        { !isLoaded ?
          <ProgressBar progress={progress} width={400} borderWidth={0} />
          : null
        }
        <View>
          <WebView ref={webViewRef} source={{uri:'https://economia.uniroma2.it/linktree'}}
            style={{ width:400}}
            onLoadProgress={({nativeEvent})=> setProgress(nativeEvent.progress)}
            onLoadEnd={()=>setLoaded(true)}
            cacheEnabled={true}
            
            
          />
          <View style={{flexDirection:'row'}}>
            
            <TouchableHighlight style={{flex:1, justifyContent:'center', alignItems:'center', padding:10}} onPress={goback}>
            <View>
              <MaterialCommunityIcons name="arrow-left" color={iconColor} size={26} />
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={{flex:1, justifyContent:'center', alignItems:'center', padding:10}} onPress={goforward}>
            <View>
              <MaterialCommunityIcons name="arrow-right" color={iconColor} size={26} />
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={{flex:2, justifyContent:'center', alignItems:'center', padding:10}} onPress={goforward}>
              <View>
              <MaterialCommunityIcons name="home" color={iconColor} size={26} />
              
              </View>
              
            </TouchableHighlight>
          </View>
          
        </View>
        
               
    </View>
  );
}

const iconColor = "grey"

export {LinkScreen}







