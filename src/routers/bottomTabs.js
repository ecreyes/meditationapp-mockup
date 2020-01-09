import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import NotificationsPage from '../pages/NotificationsPage';
import ProfilePage from '../pages/ProfilePage';
import DetailsPage from '../pages/DetailsPage';

import { Icon } from 'react-native-elements';

//el stack para navegar desde courses
const CoursesStack = createStackNavigator({
    Courses: {
        screen: CoursesPage,
        navigationOptions: ({ navigation }) => ({
        })
    },
    Details: {
        screen: DetailsPage,
        navigationOptions: ({ navigation }) => ({
            headerShown: false
        })
    }
});

//Función que permite ocultar el tabsBottom en páginas hijas.
CoursesStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    for (let i = 0; i < navigation.state.routes.length; i++) {
        if (navigation.state.routes[i].routeName == "Details") {
            tabBarVisible = false;
        }
    }

    return {
        tabBarVisible
    };
};

//tabs para navegar
const TabNavigator = createBottomTabNavigator({
    Home: HomePage,
    Courses: CoursesStack,
    Notifications: NotificationsPage,
    Profile: ProfilePage
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#C4403F',
        inactiveTintColor: 'gray',
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
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