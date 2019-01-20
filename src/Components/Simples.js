import React from 'react';
import { View, Text } from 'react-native';

import Padrao from '../estilo/Padrao'

// retornando uma funçao
// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

// retornando 1 component com varios itens dentro
// export default props => 
//   <View>
//     <Text>Arrow 1: {props.texto}</Text>
//     <Text>Arrow 2: {props.texto}</Text>
//   </View>


export default props => 
<Text style={[Padrao.ex]}>Arrow 1: {props.texto}</Text>