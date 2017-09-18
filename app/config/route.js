import React from 'react';
import { Platform, StatusBar } from 'react-native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Setting';
import secondScreen from '../screens/secondScreens';
import DrawerMenu from '../components/Drawer/index';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation';

export const route = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            headerTitle: 'Home'
        },
    },
    screen2: {
        screen: secondScreen,
        navigationOptions:{
            headerTitle: 'Screen Two'
        },
    },
});
export const drawerHome = DrawerNavigator ({
    Home: {
        screen : route,
    },
    Third:{
        screen:Profile,
    },
    // Stack: {
    //     screen: route
    // },
},
{
    contentComponent:DrawerMenu,
}
);


export const drawerSigninStack = StackNavigator ({
    Home: {
        screen: Home,
    },
    Profile: {
        screen:Profile,
    },
    Settings: {
        screen: secondScreen,
    },
    
});




export default drawerHome;