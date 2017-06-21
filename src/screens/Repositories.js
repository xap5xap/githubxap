import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableHighlight, ListView } from 'react-native';
import RepositoriesService from '../services/RepositoriesService';
import { TitleItemList,TitleItemDescription1, TitleItemDescription2 } from '../components/Styles';
import moment from 'moment';

class Repositories extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds,
            showProgress: true
        };

        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(rowData) {
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
    }


    componentDidMount() {
        this.doSearch();
    }

    doSearch() {
        console.log('do search');
        RepositoriesService.getMyRepositories()
            .then(responseData => {
                console.log('responseData', responseData);
                this.setState({
                    repositories: responseData.repositories,
                    dataSource: this.state.dataSource.cloneWithRows(responseData)
                });
            })
            .finally(() => {
                this.setState({
                    showProgress: false
                });
            });

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow}></ListView>
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
    viewRow: {
        padding: 20,
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    avatar: {
        width: 40,
        height: 40
    },
    viewAvatar: {
        flex: 1,
    },
    viewText: {
        flex: 5,
    },
   
});

export default Repositories;
