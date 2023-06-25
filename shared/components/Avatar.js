import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Index';
import { avatarGetInitials } from '../utilis/Index';



const Avatar = ({ name }) => {
  const initials = avatarGetInitials(name);

  return (
    <View style={styles.container}>
      <Text style={styles.initials}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.buttonColor,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: 'white',
    fontSize: 14,
  },
});

export default Avatar;