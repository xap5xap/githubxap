import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import { TouchableHighlight, TextInput, TextTouchableHighlight } from '../components/Styles';
import { Navigation } from 'react-native-navigation';

const tabs = [{
    label: 'Repositories',
    screen: 'githubXAP.Repositories',
    title: 'Public repositories',
    icon: require('../assets/img/circle.png')
}]

class Login extends React.Component {


    constructor(props) {
        super(props);
        this.onLoginPressed = this.onLoginPressed.bind(this);
        this.state = {
            username: '',
            password: '',
            showProgess: false
        }
    }

    render() {
        var errorCtrl = <View />;

        if (!this.state.success && this.state.badCredentials) {
            errorCtrl = <Text style={styles.error}>The username and password combination did not work</Text>
        }
        if (!this.state.success && this.state.unknownError) {
            errorCtrl = <Text style={styles.error}>We experiencied an unexpected issue</Text>
        }

        return (
            <ScrollView style={styles.container}>
                <Image style={styles.logo} source={require('../assets/img/circle.png')}></Image>
                <Text style={styles.heading}>Github Browser</Text>
                <TextInput style={styles.input} maxLength={20} placeholder="Github username" onChangeText={(text) => this.setState({ username: text })} />
                <TextInput style={styles.input} placeholder="Github password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
                <TouchableHighlight onPress={this.onLoginPressed}>
                    <TextTouchableHighlight >
                        Log in
                </TextTouchableHighlight>
                </TouchableHighlight>
                {errorCtrl}
                <ActivityIndicator
                    animating={this.state.showProgess}
                    style={styles.loader}
                    size="large"
                />

            </ScrollView>
        );
    }

    onLoginPressed() {
        this.setState({ showProgess: true });

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
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 10
    },
    loader: {
        marginTop: 20
    },
    logo: {
        width: 75,
        height: 70,
        alignSelf: 'center'
    },
    heading: {
        fontSize: 30,
        marginTop: 10,
        alignSelf: 'center'
    },
    error: {
        color: 'red',
        padding: 10
    },
    input: {
        height: 50,
        fontSize: 18,
    },
});

export default Login;
