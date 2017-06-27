import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, TitleItemList, TitleItemDescription1, TitleItemDescription2 } from '../components/Styles';

const ActivityIndicatorWorking = ({ props }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" animating={true}></ActivityIndicator>
        </View>
    );
};

ActivityIndicatorWorking.propTypes = {

};


const styles = StyleSheet.create({
    container: {

    },

});


export default ActivityIndicatorWorking;