import {TYPES} from "../constants"

const InitialState = {
    dataPackages:""
}
export default function packageReducers  (state = InitialState, action) {
    switch (action.type) {
        case TYPES.SET_DATA_PACKAGES:
            return { ...state, dataPackages:action.dataPackages}
        default:
            return state
    }
}