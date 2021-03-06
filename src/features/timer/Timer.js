import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {colors} from "../../utils/Color";
import {spacing} from "../../utils/Sizes";
import {Countdown} from "../../components/Countdown"
import { RoundedButton} from '../../components/RoundedButton';

export const Timer = ({focusSubject}) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
    <View style={styles.countdown}>
    <Countdown isPaused={!isStarted} />
    </View>
      <View style={{paddingTop: spacing.xxl}}>
      <Text style={styles.title}>Focusing On: </Text>
      <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <RoundedButton title="start" size={50} onPress = {()=> setIsStarted(true)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: "center"
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontWeight:"bold"
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: 'center',
  }
});
