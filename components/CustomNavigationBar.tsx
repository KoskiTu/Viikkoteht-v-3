import React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function CustomNavigationBar({ navigation, back, options, route }: NativeStackHeaderProps) {
  const title = options.title !== undefined ? options.title : route.name;

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Appbar.Action 
          icon="arrow-right" 
          onPress={() => navigation.navigate('Second' as never)} 
        />
      ) : null}
    </Appbar.Header>
  );
}