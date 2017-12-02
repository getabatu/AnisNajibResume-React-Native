import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';
import { Card, Container, Content, CardItem, Text, Left, Body, Right } from 'native-base';
import Swiper from 'react-native-swiper';

import DefaultColors from '../../style/color';
import Header from '../../components/header';

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
          source={require('../../img/backg6.jpg')} />
        <Container style={{ width: width, zIndex: 2, position: 'absolute' }}>
          <Header pagetitle='Biodata' onBack={this._onBack} />
          <Content padder>

            <Swiper height={height - 150} showsButtons={true}>

              <Image
                style={{ width: width - 20, height: height - 140 }}
                source={require('../../img/bio1.jpg')} />

              <Image
                style={{ width: width - 20, height: height - 140 }}
                source={require('../../img/bio2.jpg')} />

              <Image
                style={{ width: width - 20, height: height - 140 }}
                source={require('../../img/bio3.jpg')} />

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