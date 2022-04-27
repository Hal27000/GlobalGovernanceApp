import { View, StatusBar, StyleSheet, useWindowDimensions, PixelRatio} from "react-native";
import { colors, course } from "../config/config";
import {CustomButton} from "../components/CustomButton"

let marginSize = 4


function HomeScreen() { 


  const { height, width } = useWindowDimensions(); 
  let iconSize = 36;
  let buttonFontSize = 14;
  let courseTitleSize = 36;  
  let squareSize = 170

  console.log( height +' and '+ width)
  console.log( PixelRatio.get())  

  return (
      <View style={[styles.container]}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.mediumColor} />
        
        
        {/* blocco Ateneo + Economia */}
          <View style={styles.visteBottoni}>

            <CustomButton 
              url='http://web.uniroma2.it/'
              imageUrl={require('../assets/logo_tv.png')}
              testo1='Tor Vergata'
              testo2='University of Rome'
              textColor='white'
              bkColor={colors.tvColor}
              bkColorPressed={colors.tvColorPressed}
            />

            <CustomButton 
              url='https://economia.uniroma2.it/'
              imageUrl={require('../assets/logo_eco.png')}
              testo1='School of'
              testo2='Economics'
              textColor='white'
              bkColor={colors.economiaColor}
              bkColorPressed={colors.economiaColorPressed}
            />           
            

          </View>


        
        {/* blocco corso di Laurea */}
          <View style={[styles.visteBottoni, {flex:2}]}> 
            
            <CustomButton 
              url='https://economia.uniroma2.it/ba/globalgovernance'           
              testo1='Bachelor'
              testo2='Degree'
              textColor='white'
              bkColor={colors.mediumColor}
              bkColorPressed={colors.darkColor}            
            />  

          </View>



        {/* blocchetto Delphi e QuickLinks */}
          <View style={styles.visteBottoni}>  

            <CustomButton 
              url='https://economia.uniroma2.it/linktree'
              imageUrl={require('../assets/logo_linktree.png')}
              testo1='@economia'
              testo2='torvergata'
              textColor={colors.economiaColor}
              bkColor={colors.linkTreeColor}
              bkColorPressed={colors.linkTreeColorPressed}
            />

            <CustomButton 
              url='https://delphi.uniroma2.it/totem/jsp/homeStudenti.jsp?language=EN'
              imageUrl={require('../assets/delphi.png')}
              testo1="Student's"
              testo2='Delphi'
              textColor='white'
              bkColor={colors.delphiGreenColor}
              bkColorPressed={colors.delphiGreenColorPressed}
            /> 

          </View>
                
      </View>)    
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:5,
    backgroundColor:'#fff',    
  },
  visteBottoni:{
    flexDirection:'row', 
    flex:1
  }  
});

export {HomeScreen}