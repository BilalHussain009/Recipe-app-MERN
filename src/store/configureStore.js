import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import recipeReducer from '../reducers/recipe';
import pageReducer from '../reducers/page';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      recipe:recipeReducer,
      page:pageReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
