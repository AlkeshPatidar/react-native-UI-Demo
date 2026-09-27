import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../App';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';
import { IconButton } from '../components/IconButton';
import { StoryAvatar } from '../components/StoryAvatar';
import { VideoThumbnail } from '../components/VideoThumbnail';
import {
  PlaySolidIcon,
  SearchSmallIcon,
  TabHomeIcon,
  TabSearchIcon,
  TabTvIcon,
  TabChatIcon,
  TabUserIcon,
  MenuIcon,
  PlusIcon,
} from '../components/icons';

const avatars = [
  { source: require('../assets/images/home/avatar-1.png'), name: 'x_ae-23b' },
  { source: require('../assets/images/home/avatar-2.png'), name: 'maisenpai' },
  {
    source: require('../assets/images/home/avatar-3.png'),
    name: 'saylortwift',
  },
  { source: require('../assets/images/home/avatar-4.png'), name: 'johndoe' },
];

const trendingTags = [
  'Chubby',
  'bbc',
  'Milf',
  'pussy licking',
  'angela white',
  'india',
  'Onlyfans',
];

const playlistCovers = [
  require('../assets/images/home/playlist-image-1.png'),
  require('../assets/images/home/playlist-image-2.jpg'),
];

const gridThumbnails = [
  {
    source: require('../assets/images/home/thumbnail-video-1.png'),
    views: '3.1M',
  },
  {
    source: require('../assets/images/home/thumbnail-video-2.png'),
    views: '3.1M',
  },
  {
    source: require('../assets/images/home/thumbnail-video-3.jpg'),
    views: '3.1M',
  },
  {
    source: require('../assets/images/home/thumbnail-video-4.png'),
    views: '3.1M',
  },
  {
    source: require('../assets/images/home/thumbnail-video-5.png'),
    views: '3.1M',
  },
  {
    source: require('../assets/images/home/thumbnail-video-6.png'),
    views: '3.1M',
  },
];

const wideThumbnails = [
  require('../assets/images/home/thumbnail-video-7.jpg'),
  require('../assets/images/home/thumbnail-video-7.jpg'),
];

export function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      

        <View style={styles.body}>
          <View style={styles.trendingHeader}>
            <Text style={styles.trendingTitle}>⭐ Trending this week</Text>
            <Text style={styles.allTrends}>All trends</Text>
          </View>
          <FlatList
            data={trendingTags}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item}
            contentContainerStyle={styles.trendingList}
            renderItem={({ item }) => (
              <View style={styles.trendingPill}>
                <SearchSmallIcon size={18} />
                <Text style={styles.trendingPillLabel}>{item}</Text>
              </View>
            )}
          />

          <Text style={styles.sectionLabel}>Stories</Text>
          <FlatList
            data={avatars}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.name}
            contentContainerStyle={styles.storiesList}
            renderItem={({ item }) => (
              <StoryAvatar source={item.source} name={item.name} />
            )}
          />

          <Text style={styles.sectionLabel}>Playlists</Text>
          <FlatList
            data={playlistCovers}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => `playlist-${index}`}
            contentContainerStyle={styles.playlistsList}
            renderItem={({ item }) => (
              <View style={styles.playlistCard}>
                <Image source={item} style={StyleSheet.absoluteFill} />
                <LinearGradient
                  colors={['rgba(0,0,0,0)', '#1f1f1f']}
                  style={StyleSheet.absoluteFill}
                />
                <View style={styles.playlistPlayButton}>
                  <PlaySolidIcon size={14} />
                </View>
                <Text style={styles.playlistLabel} numberOfLines={1}>
                  All Plump, All Yours
                </Text>
              </View>
            )}
          />
        </View>

        <View style={styles.gridSection}>
          {[0, 2, 4].map(rowStart => (
            <View key={rowStart} style={styles.gridRow}>
              {gridThumbnails.slice(rowStart, rowStart + 2).map((item, i) => (
                <VideoThumbnail
                  key={rowStart + i}
                  source={item.source}
                  label={item.views}
                  style={styles.gridThumbnail}
                />
              ))}
            </View>
          ))}
          {wideThumbnails.map((source, i) => (
            <VideoThumbnail
              key={`wide-${i}`}
              source={source}
              label="3.1M"
              labelSize="lg"
              style={styles.wideThumbnail}
            />
          ))}
        </View>
      </ScrollView>

      <SafeAreaView edges={['top']} style={styles.headerOverlay}>
        <View style={styles.headerRow}>
          <LinearGradient
            colors={['rgba(157,102,255,0.45)', 'rgba(35,0,110,0.45)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerLogomark}
          >
            <Text style={styles.logomarkGlyph}>S</Text>
          </LinearGradient>
          <View style={styles.headerActions}>
            <LinearGradient
              colors={['rgba(157,102,255,0.45)', 'rgba(35,0,110,0.45)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.uploadButton}
            >
              <Text style={styles.uploadButtonLabel}>Upload video</Text>
              <PlusIcon size={20} />
            </LinearGradient>
            <IconButton
              size={32}
              backgroundColor={colors.surfaceOverlay}
              padding={4}
            >
              <MenuIcon size={24} />
            </IconButton>
          </View>
        </View>
      </SafeAreaView>

      <SafeAreaView edges={['bottom']} style={styles.tabBar}>
        <IconButton
          size={48}
          padding={16}
          onPress={() => navigation.navigate('Home')}
        >
          <TabHomeIcon size={24} />
        </IconButton>
        <IconButton size={48} padding={16}>
          <TabSearchIcon size={24} />
        </IconButton>
        <IconButton
          size={48}
          backgroundColor={colors.surfaceMuted}
          padding={16}
        >
          <TabTvIcon size={24} />
        </IconButton>
        <IconButton size={48} padding={16}>
          <TabChatIcon size={24} />
        </IconButton>
        <IconButton
          size={48}
          padding={16}
          onPress={() => navigation.navigate('Profile')}
        >
          <TabUserIcon size={24} />
        </IconButton>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 96,
  },
  hero: {
    height: 480,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  heroContent: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.lg,
    gap: spacing.lg,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  logomark: {
    width: 24,
    height: 24,
    borderRadius: 9,
    backgroundColor: colors.accentPurple,
    borderWidth: 0.375,
    borderColor: 'rgba(255,255,255,0.32)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogomark: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logomarkGlyph: {
    ...typography.textSmBold,
    fontSize: 16,
  },
  originalLabel: {
    ...typography.textLgMedium,
    color: colors.textSecondary,
  },
  titleBlock: {
    gap: spacing.md,
  },
  titleImage: {
    width: 252,
    height: 40,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  badge: {
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 999,
    paddingHorizontal: spacing.xs,
    paddingVertical: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  description: {
    ...typography.paragraphMd,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  playRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  secondaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  body: {
    padding: spacing.md,
    gap: spacing.md,
    marginTop:70
  },
  trendingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trendingTitle: {
    ...typography.textLgBold,
  },
  allTrends: {
    ...typography.textLgMedium,
  },
  trendingList: {
    gap: spacing.md,
  },
  trendingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.surfaceOverlay,
    borderRadius: 999,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  trendingPillLabel: {
    ...typography.textSmMedium,
  },
  sectionLabel: {
    ...typography.textMdBold,
    marginTop: spacing.xs,
  },
  storiesList: {
    gap: 4,
  },
  playlistsList: {
    gap: 4,
  },
  playlistCard: {
    width: 179,
    height: 107,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
  playlistPlayButton: {
    position: 'absolute',
    top: 36,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 999,
    padding: 7,
  },
  playlistLabel: {
    ...typography.textSmBold,
    fontSize: 13,
  },
  gridSection: {
    gap: 4,
    paddingHorizontal: 4,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 4,
    height: 287,
  },
  gridThumbnail: {
    flex: 1,
    height: '100%',
  },
  wideThumbnail: {
    width: '100%',
    aspectRatio: 284 / 200,
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.surfaceOverlay,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 13,
    paddingVertical: 8,
    overflow: 'hidden',
  },
  uploadButtonLabel: {
    ...typography.textSmBold,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.borderMuted,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.md,
  },
});
