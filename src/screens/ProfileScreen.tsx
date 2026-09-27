import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../App';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';
import { IconButton } from '../components/IconButton';
import { StatChip } from '../components/StatChip';
import { VideoThumbnail } from '../components/VideoThumbnail';
import {
  ArrowLeftIcon,
  MenuDotsIcon,
  VerifiedBadgeIcon,
  StarIcon,
  ShareIcon,
  PlusIcon,
  GalleryIcon,
  VideoCameraIcon,
  VideoLibraryIcon,
  ProfileGalleryIcon,
  LocationPinIcon,
  CalendarIcon,
  LinkIcon,
} from '../components/icons';

const coverPhoto = require('../assets/images/profile/cover-photo.jpg');
const avatarProfile = require('../assets/images/profile/avatar-profile.png');

const storyBubbles = [
  {
    source: require('../assets/images/profile/story-bubble-1.jpg'),
    name: 'John Deo',
  },
  {
    source: require('../assets/images/profile/story-bubble-2.jpg'),
    name: 'John Deo',
  },
  {
    source: require('../assets/images/profile/story-bubble-1.jpg'),
    name: 'John Deo',
  },
  {
    source: require('../assets/images/profile/story-bubble-2.jpg'),
    name: 'John Deo',
  },
];

const galleryPhotos = [
  require('../assets/images/profile/grid-photo-1.jpg'),
  require('../assets/images/profile/grid-photo-2.jpg'),
  require('../assets/images/profile/grid-photo-3.jpg'),
  require('../assets/images/profile/grid-photo-4.jpg'),
  require('../assets/images/profile/grid-photo-5.jpg'),
  require('../assets/images/profile/grid-photo-6.jpg'),
  require('../assets/images/profile/grid-photo-7.jpg'),
  require('../assets/images/profile/grid-photo-8.jpg'),
  require('../assets/images/profile/grid-photo-9.jpg'),
];

const videoThumbnails = [
  require('../assets/images/profile/thumbnail-video-1.jpg'),
  require('../assets/images/profile/thumbnail-video-2.jpg'),
];

const profileTabs = [
  { key: 'gallery', Icon: ProfileGalleryIcon },
  { key: 'video', Icon: GalleryIcon },
  { key: 'camera', Icon: VideoCameraIcon },
  { key: 'library', Icon: VideoLibraryIcon },
] as const;

export function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<string>('gallery');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.coverWrap}>
          <Image
            source={coverPhoto}
            style={styles.coverImage}
            blurRadius={25}
          />
          <View style={styles.coverTint} />
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.85)']}
            style={StyleSheet.absoluteFill}
          />

          <SafeAreaView edges={['top']}>
            <View style={styles.headerRow}>
              <IconButton size={32} padding={4} glass onPress={() => navigation.goBack()}>
                <ArrowLeftIcon size={24} />
              </IconButton>
              <IconButton size={32} padding={4} glass>
                <MenuDotsIcon size={20} />
              </IconButton>
            </View>

            <View style={styles.profileInfo}>
              <View style={styles.avatarRow}>
                <View style={styles.avatarRing}>
                  <Image source={avatarProfile} style={styles.avatarImage} />
                </View>
                <View style={styles.headerIconActions}>
                  <IconButton size={37} padding={8} glass>
                    <StarIcon size={20} />
                  </IconButton>
                  <IconButton size={37} padding={8} glass>
                    <ShareIcon size={20} />
                  </IconButton>
                </View>
              </View>

              <View style={styles.nameRow}>
                <Text style={typography.interBoldLg}>Stas Neprokin</Text>
                <VerifiedBadgeIcon size={18} />
              </View>
              <View style={styles.statusRow}>
                <View style={styles.statusDot} />
                <Text style={typography.interSemiBoldXs}>Available Now</Text>
              </View>

              <Text style={styles.bioText}>
                SpaceX designs, manufactures and launches the world's most
                advanced rockets and spacecraft.
              </Text>

              <View style={styles.metaRow}>
                <View style={styles.metaItem}>
                  <LocationPinIcon size={16} />
                  <Text style={styles.metaText}>Earth</Text>
                </View>
                <View style={styles.metaItem}>
                  <CalendarIcon size={16} />
                  <Text style={styles.metaText}>joined April 2009</Text>
                </View>
                <View style={styles.metaItem}>
                  <LinkIcon size={16} />
                  <Text style={styles.metaLink}>spacex.com</Text>
                </View>
              </View>
              <View style={styles.metaRow}>
                <View style={styles.metaItem}>
                  <LinkIcon size={16} />
                  <Text style={styles.metaLink}>spacex.com</Text>
                </View>
                <View style={styles.metaItem}>
                  <LinkIcon size={16} />
                  <Text style={styles.metaLink}>spacex.com</Text>
                </View>
                <View style={styles.metaItem}>
                  <LinkIcon size={16} />
                  <Text style={styles.metaLink}>spacex.com</Text>
                </View>
              </View>

              <View style={styles.statsRow}>
                <StatChip label="120 Following" />
                <StatChip label="40M Followers" />
                <StatChip label="40M Likes" />
              </View>

              <View style={styles.playlistBadgesRow}>
                <LinearGradient
                  colors={[colors.gradientPillStart, colors.gradientPillEnd]}
                  style={styles.playlistBadge}
                >
                  <Text style={typography.interRegularSm}>
                    2 Free Playlists
                  </Text>
                </LinearGradient>
                <View
                  style={[
                    styles.playlistBadge,
                    { backgroundColor: colors.chipBlue },
                  ]}
                >
                  <Text style={typography.interRegularSm}>
                    4 Paid Playlists
                  </Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>

        <View style={styles.bioSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bioRow}
          >
            <View style={styles.storyItem}>
              <View style={styles.createNewRing}>
                <PlusIcon size={20} />
              </View>
              <Text style={styles.storyName}>Create new</Text>
            </View>
            {storyBubbles.map((item, index) => (
              <View key={index} style={styles.storyItem}>
                <View style={styles.storyRing}>
                  <Image source={item.source} style={styles.storyAvatar} />
                  <Text style={styles.flameBadge}>🔥</Text>
                </View>
                <Text style={styles.storyName}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.tabRow}>
            {profileTabs.map(({ key, Icon }) => (
              <View
                key={key}
                style={[
                  styles.tabItem,
                  activeTab === key && styles.tabItemActive,
                ]}
                onTouchEnd={() => setActiveTab(key)}
              >
                <Icon size={24} />
              </View>
            ))}
          </View>

          <View style={styles.photoGrid}>
            {galleryPhotos.map((source, index) => (
              <Image key={index} source={source} style={styles.gridPhoto} />
            ))}
          </View>
        </View>

        <View style={styles.videoSection}>
          {videoThumbnails.map((source, index) => (
            <VideoThumbnail
              key={index}
              source={source}
              label="3.1M"
              labelSize="lg"
              style={styles.videoThumb}
            />
          ))}
        </View>
      </ScrollView>

      <SafeAreaView edges={['bottom']} style={styles.actionBar}>
        <View style={styles.actionButtons}>
          <LinearGradient
            colors={[colors.gradientCtaStart, colors.gradientCtaEnd]}
            style={styles.followButton}
          >
            <Text style={typography.interBoldSm}>Follow</Text>
          </LinearGradient>
          <View style={styles.ghostButton}>
            <Text style={typography.interBoldSm}>Message</Text>
          </View>
          <View style={styles.ghostButton}>
            <Text style={typography.interBoldSm}>Gift</Text>
          </View>
        </View>
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
    paddingBottom: 110,
  },
  coverWrap: {
    width: '100%',
    minHeight: 420,
    overflow: 'hidden',
  },
  coverImage: {
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
    width: 700,
  },
  coverTint: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  bioSection: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    paddingVertical: spacing.sm,
  },
  bioRow: {
    paddingHorizontal: spacing.sm,
    gap: spacing.sm,
  },
  storyItem: {
    alignItems: 'center',
    gap: 6,
    width: 72,
  },
  createNewRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: colors.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1.5,
    borderColor: colors.accentPurpleBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  flameBadge: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    fontSize: 16,
  },
  storyName: {
    ...typography.textXsSemiBold,
    color: colors.textPrimary,
    fontSize: 10,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 18,
    marginTop: 4,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  metaText: {
    ...typography.textSmMedium,
    fontSize: 14,
    color: colors.textPrimary,
  },
  metaLink: {
    ...typography.textSmMedium,
    fontSize: 14,
    color: colors.accentBlueLink,
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
    opacity: 0.34,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabItemActive: {
    opacity: 1,
    borderBottomColor: colors.accentPurpleStrong,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  gridPhoto: {
    width: '33.3%',
    aspectRatio: 1,
  },
  videoSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    padding: 4,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  videoThumb: {
    width: '49.5%',
    height: 122,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  profileInfo: {
    paddingHorizontal: spacing.md,
    gap: 7,
    marginTop: spacing.lg,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarRing: {
    width: 77,
    height: 77,
    borderRadius: 38.5,
    borderWidth: 1,
    borderColor: colors.textPrimary,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  headerIconActions: {
    flexDirection: 'row',
    gap: 4,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.statusGreen,
  },
  bioText: {
    ...typography.paragraphMd,
    fontSize: 16,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 11,
    marginTop: 4,
  },
  playlistBadgesRow: {
    flexDirection: 'row',
    gap: 11,
    marginTop: 4,
  },
  playlistBadge: {
    borderRadius: 27,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.18)',
    paddingTop: spacing.lg,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  followButton: {
    flex: 1,
    borderRadius: 999,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghostButton: {
    flex: 1,
    borderRadius: 999,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ghostButtonBg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.ghostButtonBorder,
  },
});
