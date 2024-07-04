import React from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-native-paper'

import UseContext from './Context/UserContext';

// importar telas

import Login from './Screens/Login';
import Principa from './Screens/Principal';

import {UserContextGlobal} from './Context/UserContext'

export default function App() {
  return (
    <UseContext>
      <TrocaTelas/>
    </UseContext>
  );
}

function TrocaTelas(){
  const {logado} = React.useContext(UserContextGlobal)
  return (
    <View style={{flex:1}}>
    {logado == true ? <Principa/> : <Login/>}
    </View>
  )
}
