import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {RootState} from '../reducers'; // Make sure to export RootState from your reducers file
import rootSaga from '../sagas';

const configureStore = (): {store: Store<RootState>} => {
  // Create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // Mount it on the Store
  const store: Store<RootState> = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );

  // Then run the saga
  sagaMiddleware.run(rootSaga);

  return {store};
};

export default configureStore;
