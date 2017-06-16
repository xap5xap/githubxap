import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import { TouchableHighlight, TextInput, TextTouchableHighlight } from '../components/Styles';

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
                <TextInput maxLength={20} placeholder="Github username" onChangeText={(text) => this.setState({ username: text })} />
                <TextInput placeholder="Github password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} />
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
    }
});

export default Login;
