import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.25): number =>
  size + (scale(size) - size) * factor;

export const getDimensions = (): {height: number; width: number} => {
  const {height, width} = Dimensions.get('window');
  return {height, width};
};

export const getDeviceHeight: number = Dimensions.get('window').width;
export const getDeviceWidth: number = Dimensions.get('window').height;
export const isIOS = (): boolean => Platform.OS === 'ios';
