import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_GRAY_300,
  COLOR_GRAY_600,
  COLOR_WHITE,
} from '../../utils/styles/colors';
import {moderateScale} from '../../utils/deviceConfig';
import {fontSize} from '../../utils/styles';

interface Styles {
  container: ViewStyle;
  cityView: ViewStyle;
  rightTextView: ViewStyle;
  head: TextStyle;
  subHead: TextStyle;
  timings: TextStyle;
  flight: ImageStyle;
  flightView: ViewStyle;
  timingView: ViewStyle;
  separatorContainer: ViewStyle;
  airWayView: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE,
    height: moderateScale(192),
    width: '100%',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(18),
    paddingVertical: moderateScale(14),
  },
  cityView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightTextView: {
    alignItems: 'flex-end',
  },
  head: {
    color: COLOR_BLACK,
    ...fontSize.fontSizeExtraLarge(),
    fontWeight: '500',
  },
  subHead: {
    color: COLOR_GRAY_600,
    ...fontSize.fontSizeSmall(),
    fontWeight: '400',
  },
  timings: {
    color: COLOR_BLACK,
    ...fontSize.fontSizeSmall(),
    marginTop: moderateScale(4),
  },
  flight: {
    width: moderateScale(150),
    height: moderateScale(18),
  },
  flightView: {
    alignItems: 'center',
  },
  timingView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(23),
  },
  separatorContainer: {
    borderStyle: 'dashed',
    borderColor: COLOR_GRAY_300,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(1),
    marginTop: moderateScale(23),
  },
  airWayView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(12),
  },
});

export default styles;
