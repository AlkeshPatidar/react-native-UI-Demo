import { TextStyle } from 'react-native';
import { colors } from './colors';

export const fontFamily = {
  jakartaRegular: 'PlusJakartaSans-Regular',
  jakartaMedium: 'PlusJakartaSans-Medium',
  jakartaSemiBold: 'PlusJakartaSans-SemiBold',
  jakartaBold: 'PlusJakartaSans-Bold',
  interRegular: 'Inter-Regular',
  interSemiBold: 'Inter-SemiBold',
  interBold: 'Inter-Bold',
} as const;

export const typography = {
  textLgBold: {
    fontFamily: fontFamily.jakartaBold,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.8,
    color: colors.textPrimary,
  } as TextStyle,
  textLgMedium: {
    fontFamily: fontFamily.jakartaMedium,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.8,
    color: colors.textPrimary,
  } as TextStyle,
  textMdBold: {
    fontFamily: fontFamily.jakartaBold,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.7,
    color: colors.textPrimary,
  } as TextStyle,
  textSmBold: {
    fontFamily: fontFamily.jakartaBold,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.6,
    color: colors.textPrimary,
  } as TextStyle,
  textSmSemiBold: {
    fontFamily: fontFamily.jakartaSemiBold,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.6,
    color: colors.textPrimary,
  } as TextStyle,
  textSmMedium: {
    fontFamily: fontFamily.jakartaMedium,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.1,
    color: colors.textPrimary,
  } as TextStyle,
  textXsSemiBold: {
    fontFamily: fontFamily.jakartaSemiBold,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.5,
    color: colors.textPrimary,
  } as TextStyle,
  paragraphMd: {
    fontFamily: fontFamily.jakartaRegular,
    fontSize: 16,
    lineHeight: 25.6,
    color: colors.textPrimary,
  } as TextStyle,
  interBoldLg: {
    fontFamily: fontFamily.interBold,
    fontSize: 20,
    lineHeight: 24,
    color: colors.textPrimary,
  } as TextStyle,
  interBoldSm: {
    fontFamily: fontFamily.interBold,
    fontSize: 15,
    lineHeight: 20,
    color: colors.textPrimary,
  } as TextStyle,
  interSemiBoldXs: {
    fontFamily: fontFamily.interSemiBold,
    fontSize: 13,
    lineHeight: 16,
    color: colors.statusGreen,
  } as TextStyle,
  interRegularSm: {
    fontFamily: fontFamily.interRegular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.textPrimary,
  } as TextStyle,
};
