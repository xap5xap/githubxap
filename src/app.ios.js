/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';
import AuthService from './services/AuthService';


registerScreens();
const tabs = [{
    label: 'Repositories',
    screen: 'githubXAP.Repositories',
    title: 'Public repositories',
    icon: require('./assets/img/circle.png')
}];

const navigatorStyle = {
    navBarTranslucent: true,
    drawUnderNavBar: true,
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    statusBarTextColorScheme: 'light',
    drawUnderTabBar: true
};

class App extends Component {
    constructor(props) {
        super(props);
        this.startApp();
    }

    startApp() {
        AuthService.getAuthInfo().then((authInfo) => {
            console.log('authInfo -  startapp');
            if (authInfo) {
                // this will start our app
                Navigation.startTabBasedApp({
                    tabs,
                    tabsStyle: {
                        tabBarBackgroundColor: '#003a66',
                        navBarButtonColor: '#ffffff',
                        tabBarButtonColor: '#ffffff',
                        navBarTextColor: '#ffffff',
                        tabBarSelectedButtonColor: '#ff505c',
                        navigationBarColor: '#003a66',
                        navBarBackgroundColor: '#003a66',
                        statusBarColor: '#002b4c',
                        tabFontFamily: 'BioRhyme-Bold',
                    },
                    appStyle: {
                        tabBarBackgroundColor: '#003a66',
                        navBarButtonColor: '#ffffff',
                        tabBarButtonColor: '#ffffff',
                        navBarTextColor: '#ffffff',
                        tabBarSelectedButtonColor: '#ff505c',
                        navigationBarColor: '#003a66',
                        navBarBackgroundColor: '#003a66',
                        statusBarColor: '#002b4c',
                        tabFontFamily: 'BioRhyme-Bold',
                    }
                });
            } else {
                Navigation.startSingleScreenApp({
                    screen: {
                        screen: 'githubXAP.Login',
                        title: 'Login',
                    }
                });
            }
        });
    }
}

export default App;
