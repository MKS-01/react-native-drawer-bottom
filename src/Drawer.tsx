import React, { useState, useEffect, useMemo } from 'react';
import { View, Animated, PanResponder } from 'react-native';
import type { DrawerProps } from './types';
import { styles } from './styles';
import {
  SCREEN_HEIGHT,
  BACKGROUND_COLOR,
  ANIMATION_DELAY,
  TOP_INSET,
  BOTTOM_INSET,
  BORDER_RADIUS,
} from './constants';

const DrawerBottom = ({
  children,
  backgroundColor,
  animationDelay,
  borderRadius,
  topInset,
  bottomInset,
}: DrawerProps) => {
  const [alignment] = useState(new Animated.Value(0));

  // useEffect(() => {
  //   props.moveDrawerPosition === true ? showDrawer() : hideDrawer();
  // }, [props.moveDrawerPosition]);

  const toggleDrawerPos = ({ value }: { value: number }) => {
    Animated.timing(alignment, {
      toValue: value,
      duration: animationDelay || ANIMATION_DELAY,
      useNativeDriver: false,
    }).start();
  };

  const showDrawer = () => {
    toggleDrawerPos({ value: 1 });
  };

  const hideDrawer = () => {
    toggleDrawerPos({ value: 0 });
  };

  // const drawerOutPutRange =

  // useMemo()

  const top = topInset || TOP_INSET;
  const bottom = bottomInset || BOTTOM_INSET;

  const outPutInitialRange = -(SCREEN_HEIGHT - top) + bottom;

  const actionSheetIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    // outputRange: [-(SCREEN_HEIGHT - 250) + 90, 0], //90--150
    outputRange: [outPutInitialRange, 0],
  });

  //  const actionSheetIntropolate = alignment.interpolate({
  //    inputRange: [0, 1],
  //    outputRange: [-(SCREEN_HEIGHT - 250) + 90, 0], //90--150
  //  });

  const actionSheetStyle = {
    bottom: actionSheetIntropolate,
  };

  const onMoveShouldSetPanResponder = (
    _: any,
    gestureState: { dy: number }
  ) => {
    if (gestureState.dy >= 130) {
      hideDrawer();
    }

    if (gestureState.dy <= -10) {
      showDrawer();
    }
  };

  const drawerHeight = topInset
    ? SCREEN_HEIGHT - topInset
    : SCREEN_HEIGHT - TOP_INSET;

  const containerStyle = useMemo(
    () => [
      styles.container,
      actionSheetStyle,
      {
        backgroundColor: backgroundColor || BACKGROUND_COLOR,
        height: drawerHeight,
        borderRadius: borderRadius || BORDER_RADIUS,
      },
    ],
    [backgroundColor, borderRadius, topInset]
  );

  const panGesture = PanResponder.create({
    onMoveShouldSetPanResponder,
    onStartShouldSetPanResponderCapture: onMoveShouldSetPanResponder,
  });

  return (
    <Animated.View style={containerStyle} {...panGesture.panHandlers}>
      <View style={styles.childContainer}>{children}</View>
    </Animated.View>
  );
};

export default DrawerBottom;
