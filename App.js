import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/services/api';
import Filmes from './src/Filmes';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filmes: []
        }
    }

    async componentDidMount() {
        const response = await api.get('r-api/?api=filmes');
        this.setState({
            filmes: response.data,
        });
    }
 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.corpo}>
                    <Text style={styles.titulo}>Filmes</Text>
                    <FlatList
                        data={this.state.filmes}
                        keyExtractor={item => item.id.toString()}
                        renderItem={ ({ item }) => <Filmes data={item} />}
                    />
                </View>
            </View>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    titulo: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20
    },
    corpo: {
        margin: 50
    }
});
