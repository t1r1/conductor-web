import * as types from './actionTypes'

export const setAuthState = (data) => {
    return {
        type: types.SET_AUTH_STATE,
        payload: data
    }
}