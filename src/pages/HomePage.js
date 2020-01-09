import React from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { StatusBar } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import fondo1 from '../assets/fondo-1.jpg';
import fondo2 from '../assets/fondo-2.jpg';
import fondo3 from '../assets/fondo-3.jpg';

class MyCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const fondo = this.props.fondo;
    return (
      <ImageBackground source={fondo} style={{ flex: 1, flexDirection: "column-reverse", width: 320, height: 150 }}>
        <View style={{ backgroundColor: "white", height: 50, width: 300, alignSelf: "center", marginBottom: 10, borderRadius: 10 }}>
          <View style={{ flex: 1, flexDirection: "row",alignItems:"center" }}>
            <Icon
              name="play"
              size={25}
              color="black"
              type='font-awesome'
              iconStyle={{marginLeft:15}}
            />
            <View style={{ flex: 1, flexDirection: "column", marginLeft: 40, justifyContent: "center" }}>
              <Text style={{fontWeight:"bold"}}>01. The basics</Text>
              <Text style={{color:"grey"}}>Start with the basics</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

class Cards extends React.Component {
  render() {
    return (
      <ScrollView horizontal>
        <MyCard fondo={fondo1} />
        <MyCard fondo={fondo2} />
        <MyCard fondo={fondo3} />
      </ScrollView>
    );
  }
}

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('white-content');
      StatusBar.setBackgroundColor('#C4403F');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#C4403F" barStyle="white-content" />
        <View style={{ flex: 1, backgroundColor: "#C4403F", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <Text style={{ color: "#fff", marginRight: 150 }}>O N E P E A C E</Text>
          <Icon name='menu' color='#fff' />
        </View>
        <View style={{ flex: 3, backgroundColor: "#C4403F" }}>
          <View style={{ flex: 1, backgroundColor: "#FFF", width: 320, height: 320, borderRadius: 30, position: "absolute", alignSelf: 'center' }}>
            <Text style={{ alignSelf: "center", fontSize: 20, marginTop: 50 }}>Morning!, Kishore</Text>
            <Text style={{ alignSelf: "center", fontSize: 10,color:"grey" }}>Lets continue with the session</Text>
            <Button
              icon={
                <Icon
                  name="play"
                  size={15}
                  color="white"
                  type='font-awesome'
                  iconStyle={{ marginRight: 20, marginTop: 2 }}
                />
              }
              title="Chapter 9: Continue Watching"
              titleStyle={{ fontSize: 14 }}
              buttonStyle={{ marginTop: 30, width: 270, borderRadius: 30, backgroundColor: "black", alignSelf: "center" }}
            />
            <Button
              icon={
                <Icon
                  name="smiley"
                  size={15}
                  color="white"
                  type="octicon"
                  iconStyle={{ marginTop: 2, paddingRight: 20 }}
                />
              }
              title="How's your mood, today?"
              titleStyle={{ fontSize: 14, marginRight: 30 }}
              buttonStyle={{ marginTop: 15, width: 270, borderRadius: 30, backgroundColor: "#0E1F9A", alignSelf: "center" }}
            />
            <Button
              icon={
                <Icon
                  name="plus"
                  size={15}
                  color="white"
                  type="octicon"
                  iconStyle={{ marginTop: 2, paddingRight: 20 }}
                />
              }
              title="Log an Activity"
              titleStyle={{ fontSize: 14, marginRight: 90 }}
              buttonStyle={{ marginTop: 15, width: 270, borderRadius: 30, backgroundColor: "#0E1F9A", alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 3, marginLeft: 20, marginRight: 20 }}>
            <Text style={{fontWeight:"bold", marginTop: 10, marginBottom: 5 }}>Get Started</Text>
            <Cards />
          </View>
        </View>
      </View>
    );
  }
}

export default HomePage;