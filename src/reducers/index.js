import { combineReducers } from 'redux'
import auth from './auth'
import alerts from './alerts'

const rootReducer = combineReducers({
    auth,
    alerts
})

export default rootReducer