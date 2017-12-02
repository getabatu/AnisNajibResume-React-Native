import React, { Component } from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Image, TouchableOpacity, BackAndroid, ToastAndroid, } from 'react-native';
import { Card, Container, Content, CardItem, Text, Left, Body, Right } from 'native-base';
import * as Animatable from 'react-native-animatable';

import DefaultColors from '../../style/color';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ContentExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      biodata: 'fadeInDown',
      achivement: 'fadeInDown',
      workspace: 'fadeInDown',
      OtherAchivement: 'fadeInDown',
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

  onPressItem(screen, title) {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View>
        <Image
          style={styles.cover}
          source={require('../../img/backg2.jpg')} />

        <ScrollView style={{ zIndex: 2, position: 'absolute', }} >

          <Animatable.View animation="zoomInDown" style={{ alignSelf: 'center', marginTop: 40, }} >

            <Image
              style={{ borderRadius: 10, margin: 5, width: 70, height: 80 }}
              source={require('../../img/anis.jpg')} />

          </Animatable.View>

          <Animatable.View animation="slideInUp" style={{ margin: 10, marginTop: 6 }}>
            <Card>
              <View style={{ margin: 10, alignItems: 'center' }} >
                <Text style={{ fontFamily: 'sans-serif-light', }} >
                  A Software Engineer with dedication, hard working skill and
                    experience in many level of programming.
                    Willing to learn, a team player and efficiently resolving in project issues</Text>
              </View>
            </Card>
          </Animatable.View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            directionalLockEnabled={true}
            bounces={false}
            scrollsToTop={false}>

            <Animatable.View style={{ flexDirection: 'row' }} animation='fadeInUpBig' >
              <Animatable.View animation={this.state.biodata}>
                <TouchableOpacity onPress={() => this.onPressItem('Biodata', 'My Biodata')} >
                  <Card style={{ alignItems: 'center' }} >
                    <Image
                      style={{ margin: 20, width: 110, height: 80 }}
                      source={require('../../img/aboutLogo/bio.png')} />
                    <Text style={{ marginBottom: 20 }} >Biodata</Text>
                  </Card>
                </TouchableOpacity>
              </Animatable.View>
              <Animatable.View animation={this.state.achivement} >
                <TouchableOpacity onPress={() => this.onPressItem('Achivement', 'My Achivement')} >
                  <Card style={{ alignItems: 'center' }} >
                    <Image
                      style={{ margin: 20, width: 100, height: 80 }}
                      source={require('../../img/aboutLogo/achivement.png')} />
                    <Text style={{ marginBottom: 20 }} >Achivement</Text>
                  </Card>
                </TouchableOpacity>
              </Animatable.View>
              <Animatable.View animation={this.state.workspace}>
                <TouchableOpacity onPress={() => this.onPressItem('Workspace', 'My Workspace')} >
                  <Card style={{ alignItems: 'center' }} >
                    <Image
                      style={{ margin: 20, width: 90, height: 80 }}
                      source={require('../../img/aboutLogo/workspace.png')} />
                    <Text style={{ marginBottom: 20 }} >Workspace</Text>
                  </Card>
                </TouchableOpacity>
              </Animatable.View>
              <Animatable.View animation={this.state.OtherAchivement}>
                <TouchableOpacity onPress={() => this.onPressItem('OtherAchivement', 'My Other Achivement')} >
                  <Card style={{ alignItems: 'center' }} >
                    <Image
                      style={{ margin: 20, width: 90, height: 80 }}
                      source={require('../../img/aboutLogo/other.png')} />
                    <Text style={{ marginBottom: 20 }} > Other Achivement </Text>
                  </Card>
                </TouchableOpacity>
              </Animatable.View>

            </Animatable.View>
          </ScrollView>

        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  cover: {
    width: width + width,
    height: height,
    zIndex: 0
  },
});