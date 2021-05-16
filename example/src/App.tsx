import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import DrawerBottom from 'react-native-drawer-bottom';

export default function App() {
  return (
    <View style={styles.container}>
      <DrawerBottom
      // backgroundColor={'red'}
      // topInset={10}
      // bottomInset={200}
      // borderRadius={10}
      // animationDelay={600}
      //
      ></DrawerBottom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dimgray',
  },
});
