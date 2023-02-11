import { StyleSheet, View, Text, StatusBar, Pressable} from "react-native";
import { useState, useContext, useRef} from 'react';
import { WebView } from 'react-native-webview';
import ProgressBar from 'react-native-progress/Bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {course, AppContext} from '../config/config'


function CourseScreen() {

  const context = useContext(AppContext)

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
        <StatusBar barStyle="light-content" backgroundColor={context[0].darkColor} />

        
        
        <View>
          <WebView ref={webViewRef} source={{uri:'https://economia.uniroma2.it/'+context[0].api+'/dida/courses'}}
            style={{ width:400}}
            onLoadProgress={({nativeEvent})=> setProgress(nativeEvent.progress)}
            onLoadStart={()=>setLoaded(false)}
            onLoadEnd={()=>setLoaded(true)}
            cacheEnabled={true}
            
            
          />

          { !isLoaded ?
            <ProgressBar progress={progress} width={400} borderWidth={0} color={context[0].darkColor} />
            : null
          }
          
          <View style={{flexDirection:'row'}}>

            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? context[0].darkColor : context[0].mediumColor}, stileBottoni]} onPress={goback}>
              <View style={{alignItems:'center', alignContent:'center'}}>
                <MaterialCommunityIcons name="arrow-left" color={iconColor} size={iconSize} />
                <Text style={{color:iconColor}}>Go Back</Text>
              
              </View>
            </Pressable>

            <Pressable style={({ pressed }) => [{backgroundColor: pressed ? context[0].darkColor : context[0].mediumColor}, stileBottoni]} onPress={goforward}>
              <View style={{alignItems:'center', alignContent:'center'}}>
                <MaterialCommunityIcons name="arrow-right" color={iconColor} size={iconSize} />
                
                <Text style={{color:iconColor}}>Go Forward</Text>
              
              </View>
            </Pressable>

            
          </View>
          
        </View>
        
               
    </View>
  );
}

const iconColor = "#fff"
const iconSize = 22

const stileBottoni = {
  flex:1,
  justifyContent:'center',
  alignContent:'center', 
  padding:10,
  borderTopWidth:1,
  borderColor:'white'
  
}



export {CourseScreen}







