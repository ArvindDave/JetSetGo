import {StyleSheet, ViewStyle} from 'react-native';
import {
  COLOR_GRAY_300,
  COLOR_WHITE,
  COLOR_WHITE_70_OPACITY,
} from '../../utils/styles/colors';
import {moderateScale} from '../../utils/deviceConfig';

interface Styles {
  draggableIcon: ViewStyle;
  container: ViewStyle;
  backgroundcolorStyle: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  draggableIcon: {
    backgroundColor: COLOR_GRAY_300,
    height: moderateScale(3),
    width: moderateScale(33),
    borderRadius: moderateScale(2),
    top: moderateScale(10),
  },
  container: {
    backgroundColor: COLOR_WHITE,
    borderTopLeftRadius: moderateScale(20),
    borderBottomEndRadius: moderateScale(0),
    borderTopRightRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(0),
  },
  backgroundcolorStyle: (showTransparent: any) => ({
    backgroundColor: showTransparent ? 'rgba(0,0,0,0)' : COLOR_WHITE_70_OPACITY,
  }),
});

export default styles;
