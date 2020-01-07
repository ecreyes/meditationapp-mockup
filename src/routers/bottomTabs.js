import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import NotificationsPage from '../pages/NotificationsPage';
import ProfilePage from '../pages/ProfilePage';

import { Icon } from 'react-native-elements';

const TabNavigator = createBottomTabNavigator({
    Home: HomePage,
    Courses: CoursesPage,
    Notifications:NotificationsPage,
    Profile:ProfilePage
  },{
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#C4403F',
        inactiveTintColor: 'gray',
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = 'home';
            } else if (routeName === 'Courses') {
                iconName = 'book';
            }
            else if (routeName === 'Notifications') {
                iconName = 'bell';
            }
            else if (routeName === 'Profile') {
                iconName = 'person';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} color={tintColor} type="octicon" />;
        },
    }),
  });
  
  export default createAppContainer(TabNavigator);