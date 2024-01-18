import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {
  COLOR_BLUE,
  COLOR_GRAY_100,
  COLOR_GRAY_300,
  COLOR_GRAY_600,
  COLOR_WHITE,
} from '../../utils/styles/colors';
import {moderateScale} from '../../utils/deviceConfig';
import {fontSize} from '../../utils/styles';

interface Styles {
  container: ViewStyle;
  filtersViewStyle1: ViewStyle;
  filtersViewStyle2: ViewStyle;
  filterTextStyle1: TextStyle;
  filterTextStyle2: TextStyle;
  iconStyle: ImageStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {},
  filtersViewStyle1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(24),
    paddingHorizontal: moderateScale(12),
    borderWidth: moderateScale(1),
    borderColor: COLOR_GRAY_100,
    backgroundColor: COLOR_BLUE,
    height: moderateScale(32),
    marginHorizontal: moderateScale(4),
  },
  filtersViewStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(24),
    paddingHorizontal: moderateScale(12),
    borderWidth: moderateScale(1),
    borderColor: COLOR_GRAY_100,
    backgroundColor: COLOR_GRAY_300,
    height: moderateScale(32),
    marginHorizontal: moderateScale(4),
  },
  filterTextStyle1: {
    ...fontSize.fontSizeRegular(),
    fontWeight: '600',
    lineHeight: moderateScale(24),
    color: COLOR_WHITE,
  },
  filterTextStyle2: {
    ...fontSize.fontSizeRegular(),
    fontWeight: '600',
    lineHeight: moderateScale(24),
    color: COLOR_GRAY_600,
  },
  iconStyle: {
    height: moderateScale(16),
    width: moderateScale(16),
    tintColor: COLOR_GRAY_600,
    marginLeft: moderateScale(8),
  },
});
