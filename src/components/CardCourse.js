import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class CardCourse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
        <View style={{ borderRadius: 10, width: 320, height: 70, backgroundColor: "white", alignSelf: "center", marginVertical: 10 }}>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20 }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>The Basics</Text>
              <Text style={{ color: "grey" }}>2 Weeks</Text>
            </View>
            <Icon name='cloud-download' color='black' type="octicon" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CardCourse);