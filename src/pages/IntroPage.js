import React from 'react';
import { StatusBar, View, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import logo from '../assets/meditation.png';

class IntroPage extends React.Component {
  static navigationOptions = {
    headerShown:false
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{ flex: 4, backgroundColor: 'white', justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ width: 200, height: 200 }}
            source={logo}
          />
          <Text h4 style={{ marginTop: 20, fontFamily: 'sans-serif' }}>O N E P E A C E</Text>
          <Text >where peace is everything</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: "center", alignItems: "center" }}>
          <Button
            title="Get Started"
            buttonStyle={{ width: 300, borderRadius: 30, backgroundColor: "#C4403F" }}
            onPress={() => this.props.navigation.navigate('Tabs')}
          />
          <Text style={{ marginTop: 20 }}>Signup for a new account</Text>
        </View>
      </View>
    );
  }
}

export default IntroPage;