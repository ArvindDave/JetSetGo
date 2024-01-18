import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextWithImage from '../textWithImage';
import {price_filter} from '../../utils/constants';
import {styles} from './styles';

interface FilterProps {
  closeClicked?: () => void;
  data?: any[];
  isShowAirlinesFilter?: boolean;
  isShowPriceFilter?: boolean;
  onAirlinesClicked?: (value: string) => void;
  onPriceClicked?: (value: string) => void;
  selectedValue?: string;
  setIsSelectedValue?: (value: string) => void;
  isSelected?: string;
  setIsSelected?: (value: string) => void;
}

const Filter: React.FC<FilterProps> = props => {
  const {
    closeClicked,
    data = [],
    isShowAirlinesFilter = false,
    isShowPriceFilter = false,
    onAirlinesClicked,
    onPriceClicked,
    selectedValue = '',
    setIsSelectedValue,
    isSelected,
    setIsSelected,
  } = props;

  const uniqueAirlines = new Set<string>();

  const filteredFlights = data?.filter(flight => {
    const airlineName = flight?.displayData?.airlines[0]?.airlineName;
    if (!uniqueAirlines?.has(airlineName)) {
      uniqueAirlines?.add(airlineName);
      return true;
    }
    return false;
  });

  const handleSubmitButton = useCallback(() => {
    if (isSelected === '1') {
      onAirlinesClicked && onAirlinesClicked(selectedValue);
    }
    if (isSelected === '2') {
      onPriceClicked && onPriceClicked(selectedValue);
    }
  }, [onAirlinesClicked, isSelected, onPriceClicked, selectedValue]);

  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.FilterTextStyle}>Filter</Text>
        <Text style={styles.clearCloseTextStyle} onPress={closeClicked}>
          Close
        </Text>
      </View>
      {isShowAirlinesFilter && (
        <>
          <Text style={styles.headerTextStyle}>Airlines</Text>
          <View style={styles.filterDataStyle}>
            {filteredFlights?.map(item => (
              <View key={item?.id}>
                <TextWithImage
                  title={item?.displayData?.airlines[0]?.airlineName}
                  onPress={() => {
                    setIsSelectedValue &&
                      setIsSelectedValue(
                        item?.displayData?.airlines[0]?.airlineName,
                      );
                    setIsSelected && setIsSelected('1');
                  }}
                  selectedValue={selectedValue}
                />
              </View>
            ))}
          </View>
        </>
      )}
      {isShowPriceFilter && (
        <>
          <Text style={styles.headerTextStyle}>Price</Text>
          <View style={styles.filterDataStyle}>
            {price_filter?.map(item => (
              <View key={item?.id}>
                <TextWithImage
                  title={item?.title}
                  onPress={() => {
                    setIsSelectedValue && setIsSelectedValue(item?.title);
                    setIsSelected && setIsSelected('2');
                  }}
                  selectedValue={selectedValue}
                />
              </View>
            ))}
          </View>
        </>
      )}
      <TouchableOpacity
        disabled={selectedValue === ''}
        style={selectedValue ? styles.submitBttn : styles.submitDisableBttn}
        onPress={handleSubmitButton}>
        <Text style={styles.submitTextStyle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
