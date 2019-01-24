import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './Components/Simples';
import ParImpar from './Components/ParImpar';
import Inverter, { MegaSena } from './Components/Multi';
import Contador from './Components/Contador';
import Plataformas from './Components/Plataformas';
import ValidarProps from './Components/ValidarProps';
import Evento from  './Components/Evento';
import Avo  from './Components/ComunicaoDireta';

export default createDrawerNavigator({
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Souza' />
    },    
    Evento: {
        screen: Evento  
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={19} />
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={102}/>
    },
    MegaSena: {
        screen: () => <MegaSena numero={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React-Native' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Fexivel!!' />
    }
},
{
    drawerWidth: 300
});