import { View, StatusBar, StyleSheet, useWindowDimensions, PixelRatio, Text} from "react-native";
import { colors, course, AppContext } from "../config/config";
import {CustomButton} from "../components/CustomButton"
import {useContext} from 'react'


let marginSize = 4


function HomeScreen({navigation, props}) { 

  const context = useContext(AppContext)

  const { height, width } = useWindowDimensions(); 
  console.log( PixelRatio.get())  

  return (
      <View style={[styles.container]}>
        <StatusBar barStyle="light-content" backgroundColor={context[0].darkColor} />
        
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
              rippleRadius={120}
           />

           <Text>{props}</Text>

            <CustomButton 
              url='https://economia.uniroma2.it/'
              imageUrl={require('../assets/logo_eco.png')}
              testo1='School of'
              testo2='Economics'
              textColor='white'
              bkColor={colors.economiaColor}
              bkColorPressed={colors.economiaColorPressed}
                rippleRadius={120}/>        

            

          </View>


        
        {/* blocco corso di Laurea */}
          <View  style={[styles.visteBottoni, {flex:2}]}> 
            
            <CustomButton 
              url={'https://economia.uniroma2.it/'+ context[0].api+''}
              name={context[0].name}           
              testo1={context[0].type1}
              testo2={context[0].type2}
              textColor='white'
              bkColor={context[0].mediumColor}
              bkColorPressed={context[0].darkColor}            
                rippleRadius={250}/>  

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
              rippleRadius={120}
           />

            <CustomButton 
              url='https://delphi.uniroma2.it/totem/jsp/homeStudenti.jsp?language=EN'
              imageUrl={require('../assets/delphi.png')}
              testo1="Student's"
              testo2='Delphi'
              textColor='white'
              bkColor={colors.delphiGreenColor}
              bkColorPressed={colors.delphiGreenColorPressed}
              rippleRadius={120}
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