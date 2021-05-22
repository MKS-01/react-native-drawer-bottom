import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DrawerBottom from 'react-native-drawer-bottom';

const sampleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Ornare aenean euismod elementum nisi quis eleifend quam. Auctor augue mauris augue neque gravida in fermentum et. Sem et tortor consequat id. Pharetra vel turpis nunc eget lorem dolor sed. Sed faucibus turpis in eu mi bibendum neque. Ultrices eros in cursus turpis massa tincidunt. Ultrices gravida dictum fusce ut placerat orci nulla. Lectus sit amet est placerat in egestas erat imperdiet. Proin sed libero enim sed faucibus. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Gravida neque convallis a cras semper auctor neque vitae. Scelerisque eu ultrices vitae auctor eu augue ut. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Morbi tincidunt ornare massa eget egestas purus viverra.\nSapien nec sagittis aliquam malesuada bibendum arcu vitae. Semper feugiat nibh sed pulvinar proin gravida. Amet mauris commodo quis imperdiet. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Blandit volutpat maecenas volutpat blandit aliquam etiam. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Sit amet venenatis urna cursus eget nunc scelerisque. Non blandit massa enim nec dui nunc mattis enim ut. Tempor nec feugiat nisl pretium fusce id velit ut. Est placerat in egestas erat imperdiet sed euismod. Eu augue ut lectus arcu bibendum. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Habitant morbi tristique senectus et netus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Ornare aenean euismod elementum nisi quis eleifend quam. Auctor augue mauris augue neque gravida in fermentum et. Sem et tortor consequat id. Pharetra vel turpis nunc eget lorem dolor sed. Sed faucibus turpis in eu mi bibendum neque. Ultrices eros in cursus turpis massa tincidunt. Ultrices gravida dictum fusce ut placerat orci nulla. Lectus sit amet est placerat in egestas erat imperdiet. Proin sed libero enim sed faucibus. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Gravida neque convallis a cras semper auctor neque vitae. Scelerisque eu ultrices vitae auctor eu augue ut. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Morbi tincidunt ornare massa eget egestas purus viverra.\nSapien nec sagittis aliquam malesuada bibendum arcu vitae. Semper feugiat nibh sed pulvinar proin gravida. Amet mauris commodo quis imperdiet. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Blandit volutpat maecenas volutpat blandit aliquam etiam. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Sit amet venenatis urna cursus eget nunc scelerisque. Non blandit massa enim nec dui nunc mattis enim ut. Tempor nec feugiat nisl pretium fusce id velit ut. Est placerat in egestas erat imperdiet sed euismod. Eu augue ut lectus arcu bibendum. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Habitant morbi tristique senectus et netus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.';

export default function App() {
  return (
    <View style={styles.container}>
      <DrawerBottom
      // backgroundColor={'red'}
      // topInset={100}
      // bottomInset={200}
      // borderRadius={10}
      // animationDelay={600}
      >
        <View style={styles.childContainer}>
          <Text style={styles.text}>{sampleText}</Text>
        </View>
      </DrawerBottom>
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
  childContainer: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'justify',
  },
});
