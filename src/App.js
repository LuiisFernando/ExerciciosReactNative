import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Simples from './Components/Simples';
import ParImpar from './Components/ParImpar';
import Inverter, { MegaSena } from './Components/Multi';

export default class App extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Simples texto='Fexivel!!!!!' />
				<ParImpar numero={28} />
				<Inverter texto='React-Native!' />
				<MegaSena numeros={8} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});