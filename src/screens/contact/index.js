import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon, Button, Card, Container, Content, CardItem, Text, Left, Body, Right } from 'native-base';
import Communications from 'react-native-communications';

import DefaultColors from '../../style/color';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ContentExample extends Component {

  render() {
    return (
      <View>
        <Image
            style={styles.cover}
            source={require('../../img/backg3.jpg')} />
      <Container style = {{zIndex: 2, position: 'absolute'}}>
        <Content>

          <TouchableOpacity onPress={() => Communications.web("http://www.anisnajib.co.nr")} style={{ marginTop: 10, alignSelf: 'center' }} >
            <Image
              style={{ width: 100, height: 100 }}
              source={require('../../img/logoanis.png')} />
          </TouchableOpacity>

          <View style={{ margin:10, alignSelf: 'center' }} >
            <Text style={{ color: 'white' }} > Anis Najib's Website </Text>
          </View>

          <View style={{ margin: 10, alignSelf:'center' }}>
            <Card style={{ width: width - 4, padding: 20 }}>
              <View style={{ flexDirection: 'row' }} >
                <Left>
                  <Image
                    style={{ width: 110, height: 240 }}
                    source={require('../../img/lol.jpg')} />
                </Left>
                <Right style={{ alignSelf: 'flex-start' }} >
                  <Button onPress={() => Communications.phonecall('+6281932309592', true)} style={{ marginBottom: 20, flexDirection: 'row' }} bordered info>

                    <Text>Call Me</Text>
                    <Icon name='ios-call-outline' />

                  </Button>

                  <Button onPress={() => Communications.web("https://api.whatsapp.com/send?phone=+6281932309592&text=Hello")} style={{ marginBottom: 20, flexDirection: 'row' }} bordered success>

                    <Text>Whatsapp Me</Text>
                    <Icon name='logo-whatsapp' />

                  </Button>

                  <Button onPress={() => Communications.email('anis.najib54@gmail.com', null, null, 'Get In Touch', 'Hello, ')} style={{ marginBottom: 20, flexDirection: 'row' }} bordered danger>

                    <Text>Email Me</Text>
                    <Icon name='ios-mail-outline' />

                  </Button>
                  <View style={{ marginRight: 15, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginRight: 10 }} >
                      <Text>Jln Kayu Jati I</Text>
                      <Text> Rawamangun</Text>
                      <Text> Jakarta Timur</Text>
                    </View>
                    <Icon name='ios-navigate-outline' />
                  </View>
                </Right>
              </View>

              <View style={{ marginTop: 20, alignItems: 'center' }} >
                <Text style={{ fontFamily: 'monospace' }}> Get In Touch </Text>
              </View>

              <View style={{ height: 1, backgroundColor: DefaultColors.defaultColor }} />


              <Button
                style={{ margin: 10, width: width - 60, alignContent: 'center', backgroundColor: DefaultColors.defaultColor }}
                onPress={() => Communications.web("https://www.linkedin.com/in/anis-najib-8a10b1149/")}>
                <Icon name='logo-linkedin' />
                <Text>linked In</Text>
              </Button>

              <Button
                style={{ margin: 10, width: width - 60, alignContent: 'center', backgroundColor: '#3b5998' }}
                onPress={() => Communications.web("https://www.facebook.com/getabatu")}>
                <Icon name='logo-facebook' />
                <Text>Facebook</Text>
              </Button>

              <Button
                style={{ margin: 10, width: width - 60, alignContent: 'center', backgroundColor: '#cc181e' }}
                onPress={() => Communications.web("https://www.youtube.com/user/getabatu")}>
                <Icon name='logo-youtube' />
                <Text>Youtube</Text>
              </Button>

            </Card>

            <View style={{ height: 60 }} />

          </View>
        </Content>
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  cover: {
    width: width + width,
    height: height + 69,
    zIndex: 0
  },

});