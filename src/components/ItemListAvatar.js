import React, { PropTypes } from 'react';
import { TitleItemList,TitleItemDescription1, TitleItemDescription2 } from '../components/Styles';

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

export default ItemListAvatar;