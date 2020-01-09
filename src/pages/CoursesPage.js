import React from 'react';
import { StatusBar } from 'react-native';
import { ScrollView, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

//componenets
import CardCourse from '../components/CardCourse';

class CoursesPage extends React.Component {
  static navigationOptions = {
    headerShown: false
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('white-content');
      StatusBar.setBackgroundColor('#5264AB');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#5264AB' }}>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <Text style={{ color: "#fff", marginRight: 150 }}>O N E P E A C E</Text>
          <Icon name='menu' color='#fff' />
        </View>
        <View style={{ flex: 6 }}>
          <ScrollView>
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default CoursesPage;