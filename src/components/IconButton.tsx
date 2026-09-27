import React, { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';

type Props = PropsWithChildren<{
  size?: number;
  backgroundColor?: string;
  padding?: number;
  style?: ViewStyle;
  onPress?: () => void;
  glass?: boolean;
}>;

export function IconButton({
  children,
  size = 48,
  backgroundColor = 'transparent',
  padding = 16,
  style,
  onPress,
  glass = false,
}: Props) {
  const content = (
    <View
      style={[
        styles.base,
        { width: size, height: size, padding },
        glass ? styles.glass : { backgroundColor },
        style,
      ]}
    >
      {children}
    </View>
  );

  if (!onPress) {
    return content;
  }

  return <Pressable onPress={onPress}>{content}</Pressable>;
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  glass: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.28)',
  },
});
