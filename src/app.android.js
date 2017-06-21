import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';
import AuthService from './services/AuthService';

// screen related book keeping
registerScreens();

const tabs = [{
    label: 'Repositories',
    screen: 'githubXAP.Repositories',
    title: 'Public repositories',
    icon: require('./assets/img/circle.png')
}];
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
