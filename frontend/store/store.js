import { createStore } from 'redux';
import RootReducer from './../reducers/root_reducer';
import MasterMiddleware from './../middleware/master_middleware';

const configureStore = () => {
  let store = createStore(RootReducer, MasterMiddleware);
  return store;
};

export default configureStore;
