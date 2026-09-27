import React, { PropsWithChildren } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type Props = PropsWithChildren<{
  backgroundColor?: string;
  style?: ViewStyle;
}>;

export function Pill({
  children,
  backgroundColor = 'transparent',
  style,
}: Props) {
  return (
    <View style={[styles.pill, { backgroundColor }, style]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
});
