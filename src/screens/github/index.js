import React, { Component } from 'react';
import { Alert, NetInfo, Dimensions, StyleSheet, Linking, Image, ListView, TouchableOpacity } from 'react-native';
import { Spinner, Footer, Left, Body, Right, Icon, Button, View, Card, Container, Content, Text } from 'native-base';

import DefaultColors from '../../style/color';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ContentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProgressProfile: true,
      showProgressContent: true,
      listRepos: [],
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
    { this.getGitHub() }
    { this.getGitHubRepos() }
  }

  getGitHub() {
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
              login: data.login,
              avatarUrl: data.avatar_url,
              public_repos: data.public_repos,
              following: data.following,
              followers: data.followers,
              bio: data.bio,
              name: data.name,
              public_repos: data.public_repos,
              html_url: data.html_url,
              showProgressProfile: false
            });
          }.bind(this));
        }
      }.bind(this)
      )
  }

  getGitHubRepos() {
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
              listRepos: data,
              showProgressContent: false
            });
          }.bind(this));
        }
      }.bind(this)
      )
  }

  linkProfile() {
    Linking.openURL(this.state.html_url)
  }

  linkRepos(html_url) {
    Linking.openURL(html_url)
  }

  renderProfile() {
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
            <Right>
              <Image
                style={{ margin: 30, borderRadius: 80, width: 130, height: 130 }}
                source={{ uri: this.state.avatarUrl }}
              />
            </Right>
            <Left>
              <View style={{ width: 180, marginTop: 10 }} >
                <Text>{this.state.name}</Text>
                <Text style={{ fontSize: 12 }} note>{this.state.bio}</Text>
                <Button onPress={() => this.linkProfile()} style={{ flexDirection: 'row', backgroundColor: DefaultColors.defaultColor, margin: 30, marginLeft: -18, width: 180 }} rounded>
                  <Icon name='logo-github' />
                  <Text style={{ marginLeft: -20 }} >View My Profile</Text>
                </Button>
              </View>
            </Left>
          </View>
        </Card>
      )
    }
  }

  renderRepos(obj, index) {
    if (this.state.showProgressContent === true) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Spinner color={DefaultColors.defaultColor} animating={true} />
        </View>
      )
    } else {
      return (
        <TouchableOpacity key={index} onPress={() => this.linkRepos(obj.html_url)} >
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <Left style={{ marginLeft: 20 }} >
              <Icon name='ios-albums-outline' />
            </Left>
            <Body style={{ alignItems: 'flex-start', marginLeft: -20, marginRight: -50 }} >
              <View>
                <Text style={{ fontSize: 14 }} >{obj.name}</Text>
                <Text note><Icon style={{ fontSize: 13, color: 'green' }} name='md-aperture' /> {obj.language}</Text>
                <Text style={{ fontSize: 14 }} >{obj.description}</Text>
              </View>
            </Body>
            <Right style={{ marginRight: 20 }} >
              <Icon name='ios-arrow-forward-outline' />
            </Right>
          </View>
          <View style={{ height: 1, backgroundColor: 'gray' }} />
        </TouchableOpacity>
      )
    }
  }

  render() {
    if (this.state.status === true) {
      return (
        <View style={{ alignItems: 'center', }} >

          <Image
            style={styles.cover}
            source={require('../../img/backg1.jpg')} />

          <Container style={{ width: width, zIndex: 2, position: 'absolute' }}>
            <Content padder style={{ marginLeft: -5, }} >
              {this.renderProfile()}
              <Card>
                <View style={{ backgroundColor: DefaultColors.defaultColor }} >
                  <View style={{ flexDirection: 'row', margin: 10, marginLeft: 10 }} >
                    <Icon style={{ color: 'white' }} name='md-cloud-outline' />
                    <Text style={{ marginLeft: 10, marginTop: 5, color: 'white' }} >{this.state.public_repos}</Text>
                    <Text style={{ marginTop: 5, color: 'white' }} > Public Repository</Text>
                  </View>
                </View>
                {this.state.listRepos.map((obj, index) => this.renderRepos(obj, index))}
              </Card>

              <View style={{ height: 60 }} />
            </Content>
          </Container>

        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image
            style={styles.cover}
            source={require('../../img/backg1.jpg')} />
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