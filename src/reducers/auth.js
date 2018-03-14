
import * as types from '../actions/actionTypes'

export const AUTHENTICATING = 'authenticating'
export const AUTHENTICATED = 'authenticated'
export const LOGIN = 'login'

const initialState = {
    authState: 'authenticating',
    user: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_AUTH_STATE: 
            return {
                ...state, 
                authState: action.payload.authState,
                user: action.payload.user
            }
    }
    return state
}

export default auth