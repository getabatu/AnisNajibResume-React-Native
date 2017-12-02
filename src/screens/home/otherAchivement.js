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
          source={require('../../img/backg7.jpg')} />
        <Container style={{ width: width, zIndex: 2, position: 'absolute' }}>
          <Header pagetitle='Other Achivement' onBack={this._onBack} />
          <Content padder>
            <Card style={{ padding: 10 }} >
              <View style={{ marginTop: 10, alignItems: 'center' }} >
                <Text style={{ fontFamily: 'monospace', color: DefaultColors.defaultColor }}> Other Achivement </Text>
              </View>

              <View style={{ height: 1, backgroundColor: DefaultColors.defaultColor }} />

              <View style={{ marginTop: 20 }} >
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> - Website Manager and Technical Officer at TEDx UPM </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> Jun 2016 </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}>  </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> - Technical Officer at International Culture Festival UPM </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> Apr 2016 </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}>  </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> - Reach Third Place in Country Dance at NILAI One World Culture Festival </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> Des 2014 </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}>  </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> - Participating in Basket Ball Competition at UPM Inter-Kolej Cup </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> Apr 2014 </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}>  </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> - Participating in Basket Ball Competition at UPM Basket Ball Cup </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> Jun 2014 </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}>  </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> - Participating in Dance Competition at KTP “One Love” Cultural festival </Text>
                <Text note style={{ color: 'black', fontFamily: 'Roboto' }}> Jun 2015 </Text>

              </View>
            </Card>
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