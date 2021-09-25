import React, {Component} from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

class Filmes extends Component{
    render(){
        return(
            <View>
                <Text style={styles.nome}>{this.props.data.nome}</Text>
                <TouchableOpacity onPress={() => alert(this.props.data.nome + '\n\n Sinopse: ' + this.props.data.sinopse)}>
                    <Image style={styles.foto} source={{uri: this.props.data.foto}} />
                </TouchableOpacity>
                <Text style={styles.sinopse}>{'Sinopse: ' + this.props.data.sinopse}</Text>
            </View>
        )
    }
}

export default Filmes;


const styles = StyleSheet.create({
    nome: {
        flex: 1,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 3,
        marginBottom: 15,
    },
    foto: {
        width: 200,
        height: 250,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    }, 
    sinopse: {
        flex: 1,
        fontSize: 15,
        color: 'white',
        justifyContent: 'center',
        marginBottom: 30,
        textAlign: 'justify'

    }
});