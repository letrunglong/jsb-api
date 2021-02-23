import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from 'components/redux/reducers/saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
export default store