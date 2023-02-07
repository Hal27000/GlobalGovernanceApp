import { View, Text, Pressable, StyleSheet, Image, Alert } from "react-native"
import { course} from "../config/config"
import { Component } from 'react';
import * as WebBrowser from 'expo-web-browser';


let courseTitleSize = 30;  
let squareSize = 170

class CustomButton extends Component{ 

  titleSize=5

  render (){
    return(
      <View style={{flex:1, overflow:"hidden", margin:4, borderRadius:10}}>
        <Pressable onLongPress={()=>Alert.alert('Secret message',
          'This app was proposed and developed by Alessio Huma.\nSpecial thanks to Eleonora Baldi Gianni, Sergio Viganò and Marcello Biaggio, without whom this app would have never been neither official nor as well-designed as it is.')} 
          android_ripple={{color:this.props.bkColorPressed}} 
          style={ [{backgroundColor: this.props.bkColor}, styles.pressabili]}
          onPress={()=>WebBrowser.openBrowserAsync(this.props.url)}>
                
          <View style={{flex:1}}>

            {this.props.imageUrl? //if imageUrl = true e quindi è un bottone con icona
              <>                  
                <Image source={this.props.imageUrl} style={{ height:squareSize, width:squareSize}}/>
              </>
            : //else sarà il bottone corso di Laurea
            <View style={{flex:1, justifyContent:'center', marginLeft:20}}>
              {this.props.name.map( name =>
                <Text style={[styles.titoloCorso,{fontSize:courseTitleSize}]}>{name}</Text>
              )}
            </View>
            }

            <View style={styles.posizionamentoIcone}>
              <Text style={[styles.testoBottoni, {color:this.props.textColor}]}>{this.props.testo1}</Text>
              <Text style={[styles.testoBottoni, {color:this.props.textColor}]}>{this.props.testo2}</Text>
            </View>
          </View>
                  
                    
        </Pressable>
      </View>
    );
  }
}
  
export {CustomButton}

const styles = StyleSheet.create({
    container: {
      flex:1,
      padding:5,
      backgroundColor:'#fff',
      alignItems:'center'
    },
    visteBottoni:{
      flexDirection:'row', 
      flex:1
    },
    pressabili:{      
      flex:1,
      shadowOpacity: 0.4,
      shadowRadius:2,
      shadowOffset:{width:0,height:3},      
        
          
    },
    posizionamentoIcone:{
      position:'absolute',
      bottom:0,
      right:0,
      margin:10,
      color:'#fff'
        
    },
    titoloCorso:{
      color:'#fff',
      fontFamily:'sans-serif-light',
      fontSize:60
    },
    testoBottoni:{
      textAlign:'right',
      color:'#fff',
      fontFamily:'sans-serif-light'
    }
});