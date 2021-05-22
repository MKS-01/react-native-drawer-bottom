import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from './constants'


export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: SCREEN_WIDTH,
  },

  childContainer: {
    width: '100%'
  }
});
