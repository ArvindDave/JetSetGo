import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getFlightsDataRequest} from '../../redux/reducers/getFlightsData';
import TextWithImage from '../../components/textWithImage';
import {ICONS, IMAGES} from '../../assets';
import RBBottomSheet from '../../components/rbBottomSheet';
import Filter from '../../components/filters';
import FlightCard from '../../components/flightCard';
import {styles} from './styles';

interface Flight {
  id: number;
  fare: number;
  displayData: {
    source: {
      depTime: string;
      airport: {
        cityName: string;
        cityCode: string;
      };
    };
    destination: {
      arrTime: string;
      airport: {
        cityName: string;
        cityCode: string;
      };
    };
    totalDuration: string;
    airlines: Array<{
      airlineName: string;
      flightNumber: string;
    }>;
  };
}

interface GetFlightsDataState {
  isGetFlightsDataLoading: boolean;
  getFlightsData: {
    result: Flight[];
  };
}

export default function TravelRequestScreen() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);
  const [isSelectFilter, setIsSelectFilter] = useState(false);
  const [selectedAirlines, setIsSelectedAirlines] = useState<string>('');
  const [selectedPrice, setIsSelectedPrice] = useState<string>('');
  const [isSelected, setIsSelected] = useState<string>('');

  const dispatch = useDispatch();
  const bottomSheetRef = useRef<RBBottomSheet>(null);

  const {isGetFlightsDataLoading = false, getFlightsData = {}} = useSelector(
    (state: GetFlightsDataState) => state?.getFlightsDataReducer,
  );

  useEffect(() => {
    if (getFlightsData) {
      setFilteredFlights(getFlightsData?.result);
      setFlights(getFlightsData?.result);
    }
  }, [getFlightsData]);

  const fetchFlights = useCallback(() => {
    dispatch(getFlightsDataRequest());
  }, [dispatch]);

  useEffect(() => {
    fetchFlights();
  }, [fetchFlights]);

  const filterFlights = (airline: string) => {
    const filtered = flights?.filter(
      flight => flight?.displayData?.airlines[0]?.airlineName === airline,
    );
    setFilteredFlights(filtered || []);
    setIsSelectedPrice('');
    bottomSheetRef?.current?.close();
  };

  const sortFlights = (value: string) => {
    const sortedFlights = [...filteredFlights]?.sort((a, b) => {
      return value === 'Low to High' ? a?.fare - b?.fare : b?.fare - a?.fare;
    });
    setFilteredFlights(sortedFlights || []);
    bottomSheetRef?.current?.close();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={IMAGES.BG_IMAGE}
        style={StyleSheet.absoluteFillObject}
        resizeMode="contain"
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Choose your flight</Text>
        <View style={styles.filtersViewStyle}>
          <View style={styles.filtersViewStyle}>
            <TextWithImage
              title={'Filters'}
              iconName={ICONS.FILTER}
              isShowIcon
              onPress={() => {
                setIsSelectFilter(true);
                bottomSheetRef?.current?.open();
              }}
            />
            <TextWithImage
              title={'Sort'}
              iconName={ICONS.DOWN_ARROW}
              isShowIcon
              onPress={() => {
                setIsSelectFilter(false);
                bottomSheetRef?.current?.open();
              }}
            />
          </View>
          <TextWithImage
            title={'Reset All'}
            iconName={ICONS.DOWN_ARROW}
            onPress={() => {
              setIsSelectedAirlines('');
              setIsSelectedPrice('');
              setFilteredFlights(getFlightsData?.result || []);
            }}
          />
        </View>
        {isGetFlightsDataLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={filteredFlights}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListView}
            renderItem={({item}) => (
              <View style={styles.flightItem}>
                <FlightCard
                  fare={item.fare}
                  depTime={item?.displayData?.source?.depTime}
                  arrTime={item?.displayData?.destination?.arrTime}
                  totalDuration={item?.displayData?.totalDuration}
                  sourceCityName={item?.displayData?.source?.airport?.cityName}
                  sourceCityCode={item?.displayData?.source?.airport?.cityCode}
                  destinationCityCode={
                    item?.displayData?.destination?.airport?.cityCode
                  }
                  destinationCityName={
                    item?.displayData?.destination?.airport?.cityName
                  }
                  airlines={item?.displayData?.airlines[0]?.airlineName}
                  flightNumber={item?.displayData?.airlines[0]?.flightNumber}
                />
              </View>
            )}
          />
        )}
      </View>
      <RBBottomSheet
        openDuration={200}
        height={270}
        ref={bottomSheetRef}
        draggableIconStyle={styles.draggableIconStyle}
        containerStyle={styles.containerStyle}
        child={
          <>
            {isSelectFilter ? (
              <Filter
                data={getFlightsData?.result}
                isShowAirlinesFilter
                closeClicked={() => {
                  bottomSheetRef?.current?.close();
                }}
                onAirlinesClicked={
                  selectedAirlines === '' ? () => {} : filterFlights
                }
                selectedValue={selectedAirlines}
                setIsSelectedValue={setIsSelectedAirlines}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
              />
            ) : (
              <Filter
                data={getFlightsData?.result}
                isShowPriceFilter
                closeClicked={() => {
                  bottomSheetRef?.current?.close();
                }}
                onPriceClicked={selectedPrice === '' ? () => {} : sortFlights}
                selectedValue={selectedPrice}
                setIsSelectedValue={setIsSelectedPrice}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
              />
            )}
          </>
        }
      />
    </SafeAreaView>
  );
}
