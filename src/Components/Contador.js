import React, { Component } from 'react';
import  { View, Text, TouchableHighlight } from 'react-native';

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    // constructor(props) {
    //     super(props);
    //     this.state = { /* ... */}
    //     this.maisUm = this.maisUm.bind(this);
    // }

    // sem arrow function
    maisUm() {
        this.setState({ numero: this.state.numero + 1 });
    }

    // com arrow function
    limpar = () => {
        this.setState({ numero: 0 });
    }

    render() {
        return(
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={() => this.maisUm()}
                    onLongPress={this.limpar}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}