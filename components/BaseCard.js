import React from 'react';
import { Card } from 'react-native-paper';

export default function BaseCard(props) {
  return (
    <Card>
      <Card.Title title={props.title} subtitle={props.sub} /> {/* Corrigi 'subTitle' para 'subtitle' */}
      <Card.Content>
        {props.children} {/* Corrigi 'chidren' para 'children' */}
      </Card.Content>
    </Card>
  );
}
