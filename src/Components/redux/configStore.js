import { applyMiddleware , createStore } from "redux";
import loggerMiddleware from "./middleware/logger";
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleWare from "redux-saga";
import rootReducer from "./reducers" 
import rootSaga from "./sagas"

export default function configureStore(initialState){
    const sagaMiddleware = createSagaMiddleWare();
    const middlewares = [loggerMiddleware ,sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);
  
    const store = createStore(rootReducer, initialState, composedEnhancers);
    sagaMiddleware.run(rootSaga);

    return store;
}