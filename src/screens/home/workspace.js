import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';
import { Card, Container, Content, CardItem, Text, Left, Body, Right } from 'native-base';

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
          source={require('../../img/backg8.jpg')} />
        <Container style={{ width: width, zIndex: 2, position: 'absolute' }}>
          <Header pagetitle='Workspace' onBack={this._onBack} />
          <Content padder>

            <View style={{ marginTop: 20, alignItems: 'center' }} >
              <Text style={{ fontFamily: 'monospace', color: 'white' }}> Work Experience </Text>
            </View>

            <View style={{ height: 1, backgroundColor: DefaultColors.defaultColor }} />

            <Card>
              <View style={{ margin: 10 }}>
                <Image
                  style={{ width: width - 40, height: height / 3 }}
                  source={require('../../img/Logo-zahir.png')}
                />
                <Text> PT.ZAHIR INTERNASIONAL </Text>
                <Text note> September 2017 - January 2018 </Text>
                <Text note> As a Mobile Programmer </Text>
              </View>
            </Card>

            <View style={{ marginTop: 20, alignItems: 'center' }} >
              <Text style={{ fontFamily: 'monospace', color: 'white' }}> Internship </Text>
            </View>

            <View style={{ height: 1, backgroundColor: DefaultColors.defaultColor }} />

            <Card>
              <View style={{ margin: 10 }}>
                <Image
                  style={{ width: width - 40, height: height / 3 }}
                  source={require('../../img/gordi.png')}
                />
                <Text> PT.GORDI KREASI INDONESIA </Text>
                <Text note> July 2017 - August 2017 </Text>
                <Text note> Supervisor : </Text>
                <Text note> Mr. Arief Said </Text>
              </View>
            </Card>

            <Card>
              <View style={{ margin: 10 }}>
                <Image
                  style={{ width: width - 40, height: height / 6 }}
                  source={require('../../img/fsktm.jpg')}
                />
                <Text> Faculty of Computer Science and Information Technology </Text>
                <Text note> September 2016 - December 2017 </Text>
                <Text note> As Lab Assistant for : </Text>
                <Text note> Dr. Taufiq Abdurahman </Text>
              </View>
            </Card>

            <View style={{ height: 130 }} />

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