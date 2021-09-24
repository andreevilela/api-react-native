import React, {Component} from "react";
import {StyleSheet, View, Text} from 'react-native';

class Filmes extends Component{
    render(){
        return(
            <View>
                <Text style={styles.nome}>{this.props.data.nome}</Text>
            </View>
        )
    }
}

export default Filmes;


const styles = StyleSheet.create({
    nome: {
        flex: 1,
        fontSize: 20
        
    },
});