import React from 'react';
import { View, StyleSheet,Image, Text} from 'react-native';
import { TextInput,Button,  } from 'react-native-paper';

import BaseCard from '../components/BaseCard';
import BaseModal from '../components/BaseModal'

import { UserContextGlobal } from '../Context/UserContext'; // Verifique se este import está correto
  
export default function Login() {
  const { email, setEmail, senha, setSenha,fazerLogin, showModal } = React.useContext(UserContextGlobal); // Verifique se o contexto foi importado corretamente

  return (
    <View style={estilos.content}>
    <Image style={estilos.img} source="https://img.icons8.com/color/96/lock--v1.png"/>
      <BaseCard title="Soco Aéreo - Login" sub="Soca teus segredos nessa caixa 🫣">
        <TextInput
          label="E-mail"
          value={email}
          onChangeText={(texto) => setEmail(texto)}
          mode="outlined"
        />

        <TextInput
          label="Senha"
          value={senha}
          onChangeText={(texto) => setSenha(texto)}
          secureTextEntry // Adicionei esta propriedade para ocultar a entrada da senha
          mode="outlined"
        />
        <Button style={estilos.btn} mode="contained" onPress={fazerLogin}>Entrar</Button>
        <Button style={{marginTop: 10}} onPress={showModal}>Cadastrar</Button>
      </BaseCard>
      <BaseModal>
      <Text>Funfou modal</Text>
      </BaseModal>
    </View>
  );
}
const estilos = StyleSheet.create({
  content :{
    flex:1,
    backgroundColor:'#FFFACD',
    padding:20,
    justifyContent:'center'
  },
  btn :{
    marginTop:40,
    backgroundColor:'#eeaa45'

  },
  img:{
    width:50,
    height:50,
    alignSelf:'center',
    marginBottom:33
  }
})
