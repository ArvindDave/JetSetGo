import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TravelRequestScreen from '../../containers/travelRequestScreen';

const Stack = createNativeStackNavigator();

export const Navigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="travelRequestScreen">
      <Stack.Screen
        name="travelRequestScreen"
        component={TravelRequestScreen}
      />
    </Stack.Navigator>
  );
};
