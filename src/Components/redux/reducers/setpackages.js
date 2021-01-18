import {TYPES} from "../constants/contants"

const nameInitialState = {
    dataPackages:""
}
export default function packageReducers  (state = nameInitialState, action) {
    switch (action.type) {
        case TYPES.SET_DATA_PACKAGES:
            return { ...state, dataPackages:action.dataPackages}
        default:
            return state
    }
}