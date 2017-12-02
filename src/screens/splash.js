import React, { Component } from "react";
import { Image, View, StyleSheet, BackAndroid, ToastAndroid, Dimensions, Alert, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import DefaultColor from '../style/color';
export default class SplashScreen extends Component {
    constructor(props) {
        super(props);


        this.state = {
            anis: "bounceInLeft"
        };
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }


    _gotoNavigation = () => {
        this.setState({ anis: 'bounceOut' })
        setTimeout(() => {
            const { navigate } = this.props.navigation;
            navigate("Tabs");
        }, 2000)
    }

    render() {

        return (
            <View
                style={{ flex: 1, backgroundColor: DefaultColor.defaultColor, alignItems: 'center', justifyContent: 'center' }} >

                <Animatable.Image
                    animation={this.state.anis}
                    duration={1000}
                    onAnimationEnd={this._gotoNavigation}
                    style = {{ width:200, height:200 }}
                    source={require('../img/logoanis.png')} />

            </View>


        );
    }
}
