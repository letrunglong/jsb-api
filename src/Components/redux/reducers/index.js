import { combineReducers } from 'redux'
import loginReducers from './login'
import packageReducers from './setpackages'

export default combineReducers({
    loginReducers,
    packageReducers
})