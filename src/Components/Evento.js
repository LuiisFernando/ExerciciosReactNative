import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import Padrao from '../estilo/Padrao';

export default class Evento extends Component {
    
    state = {
        texto: ''
    };

    alterarTexto = texto => {
        // nao precisa passar texto: texto, pq o nome do parametro é igual ao nome da propriedade
        this.setState({ texto });
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.alterarTexto} />
            </View>
        );
    }
}