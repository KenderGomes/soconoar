import React from 'react';

import {app} from '../config.firebase'
import { getAuth, signInWithEmailAndPassaword, signInWithEmailAndPassword} from 'firebase/auth';
export const UserContextGlobal = React.createContext({});

export default function UseContext(props) {

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [logado, setLogado] = React.useState(false);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function fazerLogin(){
    const auth = getAuth(app)
    
    // if(email == "kendergomes@gmail.com" && senha == "1234"){
    //   setLogado(true)
    // } else
    // alert("Erro no login! Verifique o email ou senha!")
   signInWithEmailAndPassaword(auth, email, senha)
  .then(user => setLogado(true))
  .catch(erro => console.log("Erro no login, tente novamente"))

}

  function cadastrar(){
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, email, senha)
    .then(user => hideModal())
    .catch(erro => console.log("Erro no login, tente novamente"))
  }

  return (
    <UserContextGlobal.Provider
      value={{
        email,
        setEmail,
        senha,
        setSenha,
        setLogado,
        logado,
        fazerLogin,
        visible,
        showModal,
        hideModal,
        cadastrar,
        nome
      }}>
      {props.children}
    </UserContextGlobal.Provider>
  );
}
