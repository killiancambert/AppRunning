import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Run() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Run Screen</Text>
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