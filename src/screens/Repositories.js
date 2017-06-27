import React from 'react';
import { StyleSheet, ScrollView, ListView, TextInput, View, Text } from 'react-native';
import RepositoriesService from '../services/RepositoriesService';
import ItemListAvatar from '../components/ItemListAvatar';
import { ActivityIndicator } from '../components/Styles';
import ActivityIndicatorWorking from '../components/ActivitiIndicatorWorking';

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
            <ItemListAvatar rowData={rowData}></ItemListAvatar>
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
                    showProgress: false,
                    repositories: responseData.repositories,
                    dataSource: this.state.dataSource.cloneWithRows(responseData)
                });
            })
            .finally(() => {
                console.log('finally');
                this.setState({
                    showProgress: false
                });
            });
    }

    render() {
        if (this.state.showProgress) {
            return (
                <ActivityIndicatorWorking />
            );
        }
        return (
            <ScrollView style={styles.container}>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}></ListView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    itemBlock: {
        position: 'relative',
        paddingLeft: 16,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        minHeight: 73,
    },
    itemInner: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#dedede',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        margin: 0,
        paddingRight: 8
    },
    itemWrapper: {
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
    },
    label: {
        marginBottom: 0,
        marginLeft: 0,
        fontSize: 19,
        opacity: 1,
        alignSelf: 'stretch',
        marginTop: 13,
        marginRight: 8,
        color: '#3aade2'
    },
    ionInput: {
        flex: 1,
        width: '100%'
    },
});
export default Repositories;
