import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import styles from './styles';
import {IMAGES} from '../../assets';
import {dateFunction, timeFunction} from '../../utils/helper/helperFunc';
import {COLOR_BLUE} from '../../utils/styles/colors';

interface FlightCardProps {
  sourceCityCode?: string;
  fare?: number;
  airlines?: string;
  depTime?: string;
  arrTime?: string;
  totalDuration?: string;
  sourceCityName?: string;
  destinationCityCode?: string;
  destinationCityName?: string;
  depDate?: string;
  arrDate?: string;
  flightNumber?: string;
}

const FlightCard: React.FC<FlightCardProps> = ({
  sourceCityCode,
  fare,
  airlines,
  depTime,
  arrTime,
  totalDuration,
  sourceCityName,
  destinationCityCode,
  destinationCityName,
  flightNumber,
}) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.cityView}>
        <View>
          <Text style={styles.head}>{sourceCityCode}</Text>
          <Text style={styles.subHead}>{sourceCityName}</Text>
        </View>
        <View style={styles.flightView}>
          <Image source={IMAGES.FLIGHT} style={styles.flight} />
          <Text style={styles.timings}>{totalDuration}</Text>
        </View>
        <View style={styles.rightTextView}>
          <Text style={styles.head}>{destinationCityCode}</Text>
          <Text style={styles.subHead}>{destinationCityName}</Text>
        </View>
      </View>
      <View style={styles.timingView}>
        <View>
          <Text style={styles.head}>{timeFunction(depTime)}</Text>
          <Text style={styles.subHead}>{dateFunction(depTime)}</Text>
        </View>
        <View style={styles.rightTextView}>
          <Text style={styles.head}>{timeFunction(arrTime)}</Text>
          <Text style={styles.subHead}>{dateFunction(arrTime)}</Text>
        </View>
      </View>
      <View style={styles.separatorContainer} />
      <View style={styles.airWayView}>
        <Text style={styles.subHead}>
          {airlines} - {flightNumber}
        </Text>
        <Text style={styles.head}>₹ {fare}</Text>
      </View>
    </Pressable>
  );
};

export default FlightCard;
