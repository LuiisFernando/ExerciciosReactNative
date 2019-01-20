import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const ValidarProps = props => 
    <Text style={{ fontSize: 35 }}>
        {props.label}
        {props.ano + 2000}
    </Text>
    

// validar valor default para propriedade label = Ano: 
ValidarProps.defaultProps = {
    label: 'Ano: '
}

// validar que o ano é numerico e é obrigatorio
ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps