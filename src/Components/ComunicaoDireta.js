import React from 'react';
import { View, Text } from 'react-native';

const fonte = { style: { fontSize: 30 } };

function filhosComProps(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, {...props, ...c.props}))
}

export const Filho = props => 
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}
        {/* {React.cloneElement(props.children, {...props, ...props.children.props})} << para 1 component funciona */}
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Paulo' sobrenome={props.sobrenome}>
            <Filho nome = 'João' />
            <Filho nome = 'Luís' />
            <Filho nome = 'Adriele' />
        </Pai>
        <Pai {...props} nome='Lia'>
            <Filho nome = 'Beto' />
            <Filho nome = 'Jéssica' />
        </Pai>
    </View>


export default Avo