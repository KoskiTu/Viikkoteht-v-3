import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">HomeScreen</Text>
      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Second')}
        style={styles.button}
      >
        Siirry toiselle ruudulle
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { marginTop: 16 }
});