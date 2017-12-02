import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';
import { Card, Container, Content, CardItem, Text, Left, Body, Right } from 'native-base';
import Swiper from 'react-native-swiper';

import Header from '../../components/header';
import DefaultColors from '../../style/color';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ContentExample extends Component {

  static navigationOptions = {
    tabBarVisible : false,
  }

  _onBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <Image
          style={styles.cover}
          source={require('../../img/backg5.jpg')} />
        <Container style={{ width: width, zIndex: 2, position: 'absolute' }}>
          <Header pagetitle='Achivement' onBack={this._onBack} />
          <Content padder>

            <View style={{ marginTop: 20, alignItems: 'center' }} >
              <Text style={{ fontFamily: 'monospace', color: 'white' }}> School Achivement </Text>
            </View>

            <View style={{ height: 1, backgroundColor: DefaultColors.defaultColor }} />

            <Swiper style={{ marginTop: -40 }} height={height - 130} showsButtons={true}>

              <Image
                style={{ width: width - 20, height: height - 160 }}
                source={require('../../img/ac1.jpg')} />

              <Image
                style={{ width: width - 20, height: height - 160 }}
                source={require('../../img/ac3.jpg')} />

              <Image
                style={{ width: width - 20, height: height - 160 }}
                source={require('../../img/ac2.jpg')} />

            </Swiper>

          </Content>
        </Container>
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