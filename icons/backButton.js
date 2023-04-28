import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name="arrow-back" size={35} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
});

export default BackButton;
