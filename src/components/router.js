import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import Color from '../style/color'

/* **************************************************************************************** */
import Contact from '../screens/contact/index';

import Github from '../screens/github/index';

import Home from '../screens/home/index';
import Achivement from '../screens/home/achivement';
import Biodata from '../screens/home/biodata';
import OtherAchivement from '../screens/home/otherAchivement';
import Workspace from '../screens/home/workspace';

import Splash from '../screens/splash';

import Instagram from '../screens/instagram/index';
/* **************************************************************************************** */

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        },
    },
    Achivement: {
        screen: Achivement,
        navigationOptions: {
            title: 'Achivement',
            header: null
        },
    },
    Biodata: {
        screen: Biodata,
        navigationOptions: {
            title: 'Biodata',
            header: null
        },
    },
    OtherAchivement: {
        screen: OtherAchivement,
        navigationOptions: {
            title: 'Other Achivement',
            header: null
        },
    },
    Workspace: {
        screen: Workspace,
        navigationOptions: {
            title: 'Workspace',
            header: null
        },
    },
});

export const Tabs2 = TabNavigator({
    Home3: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) =>
                <Icon name="ios-home-outline" size={35} color={Color.defaultColor} />,
        },
        tabBarOptions: {
            showIcon :true,
            activeBackgroundColor: Color.defaultColor,
            inactiveBackgroundColor: Color.defaultColor,
            style: {
                backgroundColor: Color.defaultColor,
            },
        },
    },
    Instagram: {
        screen: Instagram,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) =>
                <Icon name="logo-instagram" size={35} color={tintColor} />,
        },
        tabBarOptions: {
            activeBackgroundColor: Color.defaultColor,
            inactiveBackgroundColor: Color.defaultColor,
            style: {
                backgroundColor: Color.defaultColor,
            },
        },
    },
    Github: {
        screen: Github,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) =>
                <Icon name="logo-github" size={35} color={tintColor} />,
        },
        tabBarOptions: {
            activeBackgroundColor: Color.defaultColor,
            inactiveBackgroundColor: Color.defaultColor,
            style: {
                backgroundColor: Color.defaultColor,
            },
        },
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) =>
                <Icon name="ios-contact-outline" size={35} color={tintColor} />
        },
        tabBarOptions: {
            activeBackgroundColor: Color.defaultColor,
            inactiveBackgroundColor: Color.defaultColor,
            style: {
                backgroundColor: Color.defaultColor,
            },
        },
    },
}, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            activeBackgroundColor: Color.defaultColor,
            activeTintColor: Color.defaultColor,
        },
        style: {
            backgroundColor: Color.defaultColor,
        },
    });

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs2,
    },
}, {
        mode: 'modal',
        headerMode: 'none',
    });