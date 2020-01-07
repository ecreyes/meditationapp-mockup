import React, { Component } from 'react';
import { ThemeProvider} from 'react-native-elements';
import AppNavigator from './routers/router';


class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <AppNavigator/>
      </ThemeProvider>
    );
  }
}

export default App;
