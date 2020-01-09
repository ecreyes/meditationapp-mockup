import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IntroPage from '../pages/IntroPage';
import TabsPage from '../pages/TabsPage';

const AppNavigator = createStackNavigator(
  {
    Intro: {
      screen: IntroPage
    },
    Tabs: {
      screen: TabsPage
    }
  },
  {
    initialRouteName: 'Intro',
  }
);

export default createAppContainer(AppNavigator);