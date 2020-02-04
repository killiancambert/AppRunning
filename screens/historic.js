import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Historic() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Historic Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});