import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, 'Second'>;

export default function SecondScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">SecondScreen</Text>
      <Button 
        mode="outlined" 
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        Palaa takaisin
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { marginTop: 16 }
});