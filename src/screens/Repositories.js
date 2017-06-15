import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight } from 'react-native';

class Repositories extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
             <Text>Repositories</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
   
    text: {
        fontSize: 16,
    },
});

export default Repositories;
