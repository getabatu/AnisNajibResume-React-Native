import React, { Component } from 'react';
import { RefreshControl, NetInfo, StyleSheet, Dimensions, Alert, Image, ScrollView } from 'react-native';
import { Icon, FooterTab, Button, View, Left, Body, Right, Card, Container, Content, Text, Spinner } from 'native-base';
import Communications from 'react-native-communications';

import DefaultColors from '../../style/color';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ContentExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showProgressContent:true,
      showProgressProfile:true,
      content: [],
    };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('change', this.handleConnectionChange);

    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({ status: isConnected }); }
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);
  }

  handleConnectionChange = (isConnected) => {
    this.setState({ status: isConnected });
    { this.getInstagram() }
    { this.getInstagramContent() }
  }

  getInstagram() {
    fetch("", {
      method: 'GET',
      dataType: 'json',
    }).then(
      function (response) {
        if (response.status !== 200) {
          response.json().then(function (dataw) {
            Alert.alert(
              'Failed',
              dataw.message
            )
          }.bind(this));
        } else {
          response.json().then(function (dataw) {
            this.setState({
              full_name: dataw.data.full_name,
              username: dataw.data.username,
              profile_picture: dataw.data.profile_picture,
              following: dataw.data.counts.follows,
              followers: dataw.data.counts.followed_by,
              showProgressProfile: false
            });
          }.bind(this));
        }
      }.bind(this)
      )
  }

  getInstagramContent() {
    fetch("", {
      method: 'GET',
      dataType: 'json',
    }).then(
      function (response) {
        if (response.status !== 200) {
          response.json().then(function (data) {
            Alert.alert(
              'Failed',
              data.message
            )
          }.bind(this));
        } else {
          response.json().then(function (data) {
            this.setState({
              content: data.data,
              showProgressContent: false
            });
          }.bind(this));
        }
      }.bind(this)
      )
  }

  renderInstagramProfile() {
    if (this.state.showProgressProfile === true) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Spinner color='white' animating={true} />
        </View>
      )
    } else {
      return (
        <Card>
          <View style={{ flexDirection: 'row' }} >
            <Left>
              <Image
                style={{ margin: 10, borderRadius: 60, width: 110, height: 110 }}
                source={{ uri: this.state.profile_picture }}
              />
            </Left>
            <Body style={{ alignItems: 'center', marginLeft: 0 }} >
              <Text style={{ marginLeft: -30, marginTop: 10, }} >{this.state.full_name}</Text>
              <View style={{ width: 140, flexDirection: 'row', marginLeft: -40, marginTop: 10 }} >
                <View style={{ backgroundColor: 'white', alignItems: 'center' }} >
                  <Text note>{this.state.following}</Text>
                  <Text style={{ color: 'lightgray' }} >Following</Text>
                </View>
                <View style={{ backgroundColor: 'white', marginLeft: 20, alignItems: 'center' }} >
                  <Text note>{this.state.followers}</Text>
                  <Text style={{ color: 'lightgray' }} >Followers</Text>
                </View>
              </View>

              <Button
                onPress={() => Communications.web("https://www.instagram.com/ansajjaj/?hl=en")}
                style={{ width: width / 3 + 25, marginLeft: 10, height: 30, marginTop: 10, marginBottom: 20, backgroundColor: '#55acee' }} >
                <Text>Follow</Text>
                <Icon name='logo-instagram' />

              </Button>

            </Body>
          </View>
        </Card>
      )
    }
  }

  renderInstagramcontent(obj, index) {
    if (this.state.showProgressContent === true) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Spinner color={DefaultColors.defaultColor} animating={true} />
        </View>
      )
    } else {
      return (
        <Card key={index}>
          <View>
            <Image
              style={{ margin: 10, width: width - 45, height: width - 45, }}
              source={{ uri: obj.images.standard_resolution.url }}
            />
          </View>
        </Card>
      )
    }
  }

  render() {
    if (this.state.status === true) {
      return (
        <View style={{ alignItems: 'center', }}>
          <Image
            style={styles.cover}
            source={require('../../img/backg4.jpg')} />
          <Container style={{ zIndex: 2, position: 'absolute' }}>
            <Content>
              <View style={{ padding: 10 }} >
                {this.renderInstagramProfile()}
                {this.state.content.map((obj, index) => this.renderInstagramcontent(obj, index))}
                <View style={{ height: 70 }} />
              </View>
            </Content>
          </Container>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image
            style={styles.cover}
            source={require('../../img/backg4.jpg')} />
          <Container style={{ zIndex: 2, position: 'absolute' }}>
            <Content padder>
              <Left />
              <Body>
                <View style={{ height: height, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ borderRadius: 10, padding: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require('../../img/nowifi.png')} />
                    <Text style={styles.instructions}>
                      There is no Internet Connection,{'\n'}
                      Please Try Again Later
                </Text>
                  </View>
                </View>
              </Body>
              <Right />
            </Content>
          </Container>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  cover: {
    width: width + width,
    height: height,
    zIndex: 0
  },

}); 