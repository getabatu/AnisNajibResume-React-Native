import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header, Icon, Button, Card, Container, Content, CardItem, Text, Left, Body, Right } from 'native-base';

import DefaultColors from '../style/color';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ContentExample extends Component {

  render() {
    let { pagetitle } = this.props
    return (
      <View style={styles.topbar_view}>
        <View style={styles.topbar_header_view}>
          <TouchableOpacity onPress={this.props.onBack}>
            <View style={styles.topbar_back}>
              <Icon name='ios-arrow-back' style={styles.icon} />
            </View>
          </TouchableOpacity>
          <Text style={styles.topbar_title_text}>{pagetitle}</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  topbar_view: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: DefaultColors.defaultColor,
    justifyContent: 'space-between',
    shadowColor: '#ff00ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6
  },
  topbar_header_view: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  topbar_back: {
    flexDirection: 'row',
    height: 60, width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topbar_title_text: {
    fontFamily: "Roboto",
    fontSize: 16,
    letterSpacing: 0.5,
    color: 'white',
  },
  icon: {
    color:'white',
    alignItems:'center',
    justifyContent:'center',
},
});