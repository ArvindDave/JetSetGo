import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import Navigation from './src/navigation';

function App() {
  const {store} = configureStore();

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
