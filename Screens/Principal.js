import React from 'react';
import { View, Text, FlatList } from 'react-native';


import BaseCard from '../components/BaseCard'
import { Card } from 'react-native-paper';

cosnt segredos = [
  {
    id: 1,
    titulo: "Um segredo muitissimo secreto",
    segredo: "Caguei no trabalho professor",
    user: "joao@gmail.com"
  },
  {
    id: 1,
    titulo: "Não fui a escola, porque...",
    segredo: "é os menino da catequese ne pae",
    user: "lucas@gmail.com"
  },
  {
    id: 1,
    titulo: "sei la, só leia.",
    segredo: "vou de palhaço na escola.",
    user: "marcos@gmail.com"
  }
]


export default function Principal() {
  return (
    <View>
      <Text>
        <FlatList
        data={segredos}
        renderItem={item =>
          (<BaseCard title={item.item.titulo}>
            <Text>{item.item.segredo}</Text>
            </BaseCard>)}
        keyExtractor={item => item.id}
        />
      </Text>
    </View>
  );
}
