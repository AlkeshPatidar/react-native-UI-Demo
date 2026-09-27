import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PlayIcon } from './icons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

type Props = {
  source: ImageSourcePropType;
  label: string;
  style?: ViewStyle;
  labelSize?: 'sm' | 'lg';
};

export function VideoThumbnail({
  source,
  label,
  style,
  labelSize = 'sm',
}: Props) {
  return (
    <View style={[styles.container, style]}>
      <Image source={source} style={StyleSheet.absoluteFill} />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.footer}>
        <View style={styles.playButton}>
          <PlayIcon size={14} />
        </View>
        <Text
          style={[
            labelSize === 'lg' ? typography.textLgBold : typography.textSmBold,
            styles.label,
          ]}
          numberOfLines={1}
        >
          {label}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
    padding: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  playButton: {
    backgroundColor: colors.surfaceOverlayStrong,
    borderRadius: 999,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex: 1,
  },
});
