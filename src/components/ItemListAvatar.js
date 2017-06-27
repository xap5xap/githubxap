import React, { PropTypes } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableHighlight, ListView } from 'react-native';
import { TitleItemList, TitleItemDescription1, TitleItemDescription2 } from '../components/Styles';
import moment from 'moment';

const ItemListAvatar = ({ rowData }) => {
    return (
        <View style={styles.viewRow}>
            <View style={styles.viewAvatar}>
                <Image source={rowData.private ? require('../assets/img/locked.png') : require('../assets/img/unlocked.png')} style={styles.avatar}></Image>
            </View>
            <View style={styles.viewText}>
                <TitleItemList>{rowData.full_name}</TitleItemList>
                <TitleItemDescription1>{rowData.language}</TitleItemDescription1>
                <TitleItemDescription2>{moment(rowData.updated_at).fromNow()}</TitleItemDescription2>
            </View>
        </View>
    );
};

ItemListAvatar.propTypes = {
    rowData: PropTypes.object.isRequired
};


const styles = StyleSheet.create({
    viewRow: {
        padding: 10,
        borderColor: '#c8c7cc',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    avatar: {
        width: 36,
        height: 36,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    viewAvatar: {
        marginTop: 8,
        marginRight: 16,
        marginBottom: 8,
        marginLeft: 0
    },
    viewText: {
        flex: 5,
    },

});


export default ItemListAvatar;