import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import recipeReducer from '../reducers/recipe';
import pageReducer from '../reducers/page';
import itemReducer from '../reducers/item';
import ingReducer from '../reducers/ing';
import shopReducer from '../reducers/shoppinglist';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      recipe:recipeReducer,
      page:pageReducer,
      item:itemReducer,
      ing:ingReducer,
      list:shopReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
