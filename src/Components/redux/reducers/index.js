import { combineReducers } from 'redux'
import loginReducers from './login'
import packageReducers from '../reducers/setpackages'

export default combineReducers({
    loginReducers,
    packageReducers
})