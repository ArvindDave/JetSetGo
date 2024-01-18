import React, {forwardRef, ReactNode} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ViewStyle} from 'react-native';
import style from './styles';
import {moderateScale} from '../../utils/deviceConfig';

interface RBBottomSheetProps {
  closeOnDragDown?: boolean;
  closeOnPressMask?: boolean;
  openDuration?: number;
  closeDuration?: number;
  height?: number;
  dragFromTopOnly?: boolean;
  child: ReactNode;
  containerStyle?: ViewStyle;
  draggableIconStyle?: ViewStyle;
  onClose?: () => void;
  wrapperStyle?: ViewStyle;
  showTransparent?: boolean;
  onOpen?: () => void;
  withCloseButton?: boolean;
  autoHeight?: boolean;
  customHeight?: number;
}

const RBBottomSheet = forwardRef<RBSheet, RBBottomSheetProps>((props, ref) => {
  const {
    closeOnDragDown = true,
    closeOnPressMask = true,
    openDuration = moderateScale(100),
    closeDuration = moderateScale(100),
    height = moderateScale(600),
    dragFromTopOnly = true,
    child,
    containerStyle = {},
    draggableIconStyle = {},
    onClose,
    wrapperStyle = {},
    showTransparent = false,
    onOpen,
    withCloseButton,
    autoHeight,
    customHeight,
  } = props || {};

  const handleRBSheetHeight = () => {
    if (autoHeight) {
      return undefined;
    } else if (customHeight) {
      return customHeight;
    } else {
      return '35%';
    }
  };

  return (
    <RBSheet
      ref={ref}
      closeOnDragDown={withCloseButton ? false : closeOnDragDown}
      closeOnPressMask={closeOnPressMask}
      dragFromTopOnly={dragFromTopOnly}
      height={height}
      onClose={onClose}
      onOpen={onOpen}
      openDuration={openDuration}
      keyboardAvoidingViewEnabled={false}
      closeDuration={closeDuration}
      animationType="slide"
      customStyles={{
        wrapper: {
          ...style.backgroundcolorStyle(showTransparent),
          ...wrapperStyle,
        },
        draggableIcon: {...style.draggableIcon, ...draggableIconStyle},
        container: {
          ...style.container,
          height: handleRBSheetHeight(),
          ...containerStyle,
        },
      }}>
      {child}
    </RBSheet>
  );
});

export default RBBottomSheet;
