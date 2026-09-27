import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

type Props = {
  source: ImageSourcePropType;
  name: string;
  size?: number;
};

export function StoryAvatar({ source, name, size = 56 }: Props) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.ring,
          { width: size + 8, height: size + 8, borderRadius: (size + 8) / 2 },
        ]}
      >
        <Image
          source={source}
          style={[
            styles.avatar,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        />
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
    width: 72,
  },
  ring: {
    borderWidth: 4,
    borderColor: colors.accentPurple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderWidth: 2,
    borderColor: colors.surface,
  },
  name: {
    ...typography.textXsSemiBold,
    color: colors.textMuted,
    maxWidth: 68,
  },
});
