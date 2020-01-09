import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#5264AB' }}>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginHorizontal: 20 }}>
          <Icon name='keyboard-backspace' color='#fff' type='material' size={30} onPress={() => this.props.navigation.goBack()} />
        </View>
        <View style={{ flex: 6, justifyContent: "center", marginHorizontal: 30 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>The Basics</Text>
            <Text style={{ color: "white" }}>Week 1 - Chapter 1</Text>
          </View>
          <View style={{ flex: 4 }}>
            <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>Getting Started</Text>
            <Text style={{ color: "white", marginTop: 10 }}>
              Before we being, we would like you to sit in a relaxed position in a place with no external disturbance.
              We recommend wearing headphones throughout the course period for better results.
            </Text>
            <Button title="Begin" titleStyle={{ color: "white" }} type="outline" buttonStyle={{ borderRadius: 20, borderColor: "white", marginTop: 30, width: 200 }} />
          </View>
          <View style={{ flex: 1, flexDirection: "row",marginRight:30}}>
            <View style={{ flex: 1, flexDirection: "column",alignItems:"center",justifyContent:"flex-end",marginBottom:30  }}>
              <Icon name='list' color='#fff' type='material' size={24} iconStyle={{alignSelf:"flex-start"}} />
              <Text style={{color:"white"}}>chapter list</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column",alignItems:"center",justifyContent:"flex-end",marginBottom:30  }}>
              <Icon name='error-outline' color='#fff' type='material' size={24} iconStyle={{alignSelf:"flex-start"}} />
              <Text style={{color:"white"}}>pre requesites</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column",alignItems:"center",justifyContent:"flex-end",marginBottom:30  }}>
              <Icon name='help-outline' color='#fff' type='material' size={24} iconStyle={{alignSelf:"flex-start"}} />
              <Text style={{color:"white"}}>support</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default DetailsPage;