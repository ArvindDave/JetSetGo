import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {styles} from './styles';

interface TextWithImageProps {
  title?: string;
  iconName?: ImageSourcePropType;
  isShowIcon?: boolean;
  onPress?: () => void;
  containerStyle?: object;
  selectedValue?: string;
}

const TextWithImage: React.FC<TextWithImageProps> = props => {
  const {
    title = '',
    iconName = '',
    isShowIcon = false,
    onPress,
    containerStyle,
    selectedValue,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View
        style={
          selectedValue === title
            ? styles.filtersViewStyle1
            : styles.filtersViewStyle2
        }>
        <Text
          style={
            selectedValue === title
              ? styles.filterTextStyle1
              : styles.filterTextStyle2
          }>
          {title}
        </Text>
        {isShowIcon && <Image source={iconName} style={styles.iconStyle} />}
      </View>
    </TouchableOpacity>
  );
};

export default TextWithImage;
