import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {moderateScale} from '../../utils/deviceConfig';
import {fontSize} from '../../utils/styles';
import {COLOR_BLUE, COLOR_WHITE} from '../../utils/styles/colors';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  title: TextStyle;
  filters: ViewStyle;
  flightItem: ViewStyle;
  filtersViewStyle: ViewStyle;
  containerStyle: ViewStyle;
  draggableIconStyle: ViewStyle;
  flatListView: ViewStyle;
}

export const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BLUE,
  },
  subContainer: {
    margin: moderateScale(16),
  },
  title: {
    ...fontSize.fontSizeExtraXLarge(),
    fontWeight: 'bold',
    marginBottom: moderateScale(16),
    textAlign: 'left',
    letterSpacing: moderateScale(4),
    color: COLOR_WHITE,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(16),
  },
  flightItem: {
    paddingVertical: moderateScale(8),
  },
  filtersViewStyle: {
    flexDirection: 'row',
    paddingBottom: moderateScale(16),
    justifyContent: 'space-between',
  },
  containerStyle: {
    height: 'auto',
    paddingBottom: moderateScale(20),
  },
  draggableIconStyle: {
    display: 'flex',
  },
  flatListView: {
    paddingBottom: moderateScale(100),
  },
});
