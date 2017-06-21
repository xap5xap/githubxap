import React from 'react';
import { StyleSheet, ScrollView, ListView } from 'react-native';
import RepositoriesService from '../services/RepositoriesService';
import  ItemListAvatar from '../components/ItemListAvatar';

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
   
});

export default Repositories;
