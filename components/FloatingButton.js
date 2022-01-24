import React from "react";
import {View, Text, StyleSheet, Animated, TouchableWithoutFeedback, TouchableHighlight, Pressable} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import FloatingButton from './FloatingButton

export default class FloatingButton extends React.Component{
    animation = new Animated.Value(0);
    
    toggleMenu = (n,cambio) => {

        const toValue = this.open ? 0 : 1;

        Animated.spring(this.animation,{
            toValue,
            friction: 5,
            useNativeDriver: false
        }).start();

        this.open= !this.open;

        console.log("ciao")

        if(cambio && n > 0)this.props.funzione(n)

        
    };

    render(){
        const firstYear = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange:[0,-260]
                    })
                }
            ]
        };


        const secondYear = {
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


        const thirdYear = {
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
            transform: [

                {
                    rotate: this.animation.interpolate({
                        inputRange: [0,1],
                        outputRange: ["0deg","90deg"]
                    })
                }

                
            ]
        };

        const opacity = this.animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1]
        })


        return(
            <View style={[styles.container, this.props.style]}>

                

                <Animated.View style={[styles.button, styles.secondary, firstYear, opacity]}>
                    <TouchableHighlight style={styles.secondary} underlayColor={underlay} onPress={()=>{this.toggleMenu(1,true)}}>
                        <Text>1° Year</Text>
                    </TouchableHighlight>
                </Animated.View>

                <Animated.View style={[styles.button, styles.secondary, secondYear, opacity]}>
                    <TouchableHighlight style={styles.secondary} underlayColor={underlay} onPress={()=>{this.toggleMenu(2,true)}}>
                        <Text>2° Year</Text>
                    </TouchableHighlight>
                </Animated.View>

                <Animated.View style={[styles.button, styles.secondary, thirdYear, opacity]}>
                    <TouchableHighlight style={styles.secondary} underlayColor={underlay} onPress={()=>{this.toggleMenu(3,true)}}>
                        <Text>3° Year</Text>
                    </TouchableHighlight>
                </Animated.View>

                
                <Animated.View style={[styles.button, styles.secondary, allYears, opacity]}>
                    <TouchableHighlight style={styles.secondary} underlayColor={underlay} onPress={()=>{this.toggleMenu(4,true)}}>
                        <Text>All Courses</Text>
                    </TouchableHighlight>
                </Animated.View>

                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <TouchableHighlight style={[styles.button, styles.menu]} underlayColor={underlay} onPress={()=>{this.toggleMenu(0)}}>
                    <MaterialCommunityIcons name="menu" color={"grey"} size={26} />
                    </TouchableHighlight>
                </Animated.View>
                
            </View>
        );
    }
}

const underlay = 'white'

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
        shadowRadius: 100,
        shadowColor: "black",
        shadowOpacity: 1,
        elevation:2,
        shadowOffset: {width: 500, height: 500}
    },
    menu: {
        width:60,
        height:60,
        borderRadius: 10,
        backgroundColor: "#e6ffcc"
    },
    secondary:{
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height:48,
        borderRadius: 10,
        backgroundColor: "#e6ffcc"
    }
});