import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Index';

const ProgressBar = ({ progress }) => {
  progress = progress > 100 ? 100 : progress < 0 ? 0 : progress;
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 13,
    borderRadius: 5,
    backgroundColor: COLORS.offGray,
    overflow: 'hidden',
    marginHorizontal:3,
    
  },
  progress: {
    height: '100%',
    backgroundColor: COLORS.gold,
  },
});

export default ProgressBar;