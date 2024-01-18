import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './StackNavigator';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default Navigation;
