import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/Color';
import { spacing } from './src/utils/Sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState('gardening');
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
        ) : (
          <Focus addSubject={setFocusSubject} />
          )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkblue,
  },
});
