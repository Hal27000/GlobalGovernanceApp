import {Component} from "react";
import {View, Text, StyleSheet, Animated, TouchableHighlight, Pressable} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {course, fonts} from '../config/config'

export default class FloatingButton extends Component{
    animation = new Animated.Value(0);
    
    toggleMenu = (n,cambio) => {

        const toValue = this.open ? 0 : 1;
        Animated.spring(this.animation,{
            toValue,
            friction: 5,
            useNativeDriver: false
        }).start();

        this.open= !this.open;
        if(cambio && n > 0)this.props.funzione(n)        
    };

    

    render(){
        const firstPlace = {
            transform: [
                {scale: this.animation},{
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0,-260]
                    })
                }
            ]
        };


        const secondPlace = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0,-200]
                    })
                }
            ]
        };


        const thirdPlace = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0,-140]
                    })
                }
            ]
        };

        const allYears = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0,-80]
                    })
                }
            ]
        };

        const rotation = {
            transform: [{
                rotate: this.animation.interpolate({
                    inputRange: [0,1],
                    outputRange: ["0deg","90deg"]
                })}                
            ]
        };

        const opacity = this.animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1]
        })

        


        return(
            <View style={[styles.container, this.props.style]}>



                    {this.props.contesto.years==3?<Animated.View style={[styles.button, styles.secondary, firstPlace, opacity, {backgroundColor: this.props.contesto.lightColor}]}>
                        <Pressable android_ripple={{color:underlay}} style={[styles.secondary,{backgroundColor: this.props.contesto.lightColor}]} onPress={()=>{this.toggleMenu(1,true)}}>
                            <Text style={styles.textButton}>1° Year</Text>
                        </Pressable>
                    </Animated.View>:<></>}

                    

                    <Animated.View style={[styles.button, styles.secondary, secondPlace, opacity, {backgroundColor: this.props.contesto.lightColor}]}>
                        <Pressable android_ripple={{color:underlay}} style={[styles.secondary,{backgroundColor: this.props.contesto.lightColor}]} onPress={()=>{this.toggleMenu((this.props.contesto.years==3?2:1),true)}}>
                            <Text style={styles.textButton}>{this.props.contesto.years==3?"2° Year":"1° Year"}</Text>
                        </Pressable>
                    </Animated.View>

                    <Animated.View style={[styles.button, styles.secondary, thirdPlace, opacity, {backgroundColor: this.props.contesto.lightColor}]}>
                        <Pressable android_ripple={{color:underlay}} style={[styles.secondary,{backgroundColor: this.props.contesto.lightColor}]} onPress={()=>{this.toggleMenu((this.props.contesto.years==3?3:2),true)}}>
                            <Text style={styles.textButton}>{this.props.contesto.years==3?"3° Year":"2° Year"}</Text>
                        </Pressable>
                    </Animated.View>        
                    
                    <Animated.View style={[styles.button, styles.secondary, allYears, opacity, {backgroundColor: this.props.contesto.lightColor}]}>
                        <Pressable android_ripple={{color:underlay}} style={ [styles.secondary,{backgroundColor: this.props.contesto.lightColor}]} onPress={()=>{this.toggleMenu(4,true)}}>
                            <Text style={styles.textButton}>All Courses</Text>
                        </Pressable>
                    </Animated.View>               

                <Animated.View style={[styles.button, styles.menu, rotation, {overflow:"hidden", backgroundColor: this.props.contesto.lightColor}]}>
                    <Pressable android_ripple={{color:underlay}} style={[ styles.menu, styles.button, {backgroundColor: this.props.contesto.lightColor}]} onPress={()=>{this.toggleMenu(0)}}>
                        <MaterialCommunityIcons name="menu" color={"grey"} size={26} />
                    </Pressable>
                </Animated.View>
                
            </View>
        );
    }
}

const underlay = 'grey'

const styles = StyleSheet.create({


    container: {

        right:0,
        bottom:0,
        margin: 120,
        marginRight:30,
        alignItems:'flex-end',
        position: "absolute"
    },
    button: {
        position:"absolute",
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 3,
        shadowColor: "grey",
        shadowOpacity: 0.2,
        elevation:2,
        
    },
    textButton:{
        fontFamily:fonts
    },
    menu: {
        width:60,
        height:60,
        borderRadius: 10,
        
    },
    secondary:{
        overflow:"hidden",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height:48,
        borderRadius: 10
        
    }
});