import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_DISABLE,
  COLOR_WHITE,
} from '../../utils/styles/colors';
import {moderateScale} from '../../utils/deviceConfig';
import {fontSize} from '../../utils/styles';

interface Styles {
  container: ViewStyle;
  headingView: ViewStyle;
  clearCloseTextStyle: TextStyle;
  FilterTextStyle: TextStyle;
  submitTextStyle: TextStyle;
  headerTextStyle: TextStyle;
  filterDataStyle: ViewStyle;
  submitDisableBttn: ViewStyle;
  submitBttn: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: moderateScale(16),
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(16),
    alignItems: 'center',
  },
  clearCloseTextStyle: {
    fontWeight: '300',
    ...fontSize.fontSizeLarge(),
    color: COLOR_BLACK,
  },
  FilterTextStyle: {
    ...fontSize.fontSizeLarge(),
    fontWeight: '600',
    color: COLOR_BLACK,
  },
  submitTextStyle: {
    ...fontSize.fontSizeLarge(),
    fontWeight: '600',
    color: COLOR_WHITE,
  },
  headerTextStyle: {
    ...fontSize.fontSizeExtraLarge(),
    fontWeight: '600',
    color: COLOR_BLACK,
  },
  filterDataStyle: {
    flexDirection: 'row',
    paddingVertical: moderateScale(12),
  },
  submitDisableBttn: {
    width: '100%',
    backgroundColor: COLOR_DISABLE,
    alignItems: 'center',
    borderRadius: moderateScale(4),
    paddingVertical: moderateScale(12),
    marginTop: moderateScale(10),
  },
  submitBttn: {
    width: '100%',
    backgroundColor: COLOR_BLUE,
    alignItems: 'center',
    borderRadius: moderateScale(4),
    paddingVertical: moderateScale(12),
    marginTop: moderateScale(10),
  },
});
