import { View, Text, Pressable, StyleSheet, Image } from "react-native"
import { colors} from "../config/config"
import { Component } from 'react';
import * as WebBrowser from 'expo-web-browser';

let marginSize = 4
let iconSize = 36;
let buttonFontSize = 14;
let courseTitleSize = 36;
  
  
  let squareSize = 170

  


class CustomButton extends Component{ 

    titleSize=5

    render (){
      return(
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? this.props.bkColorPressed : this.props.bkColor}, styles.pressabili]}
          onPress={()=>WebBrowser.openBrowserAsync(this.props.url)}>
                  
          <View style={{flex:1}}>
            {this.props.imageUrl? //if imageUrl = true e quindi è un bottone con icona
              <>                  
                <Image source={this.props.imageUrl} style={{ height:squareSize, width:squareSize}}/>
              </>
            : //else sarà il bottone corso di Laurea
              <View style={{flex:1, justifyContent:'center', marginLeft:20}}>
                <Text style={[styles.titoloCorso,{fontSize:courseTitleSize}]}>GLOBAL</Text>
                <Text style={[styles.titoloCorso,{fontSize:courseTitleSize}]}>GOVERNANCE</Text>
              </View>
            }
            <View style={styles.posizionamentoIcone}>
              <Text style={[styles.testoBottoni, {color:this.props.textColor}]}>{this.props.testo1}</Text>
              <Text style={[styles.testoBottoni, {color:this.props.textColor}]}>{this.props.testo2}</Text>
            </View>
          </View>
                  
                    
        </Pressable>
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
        margin:marginSize,
        borderRadius:10,  
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