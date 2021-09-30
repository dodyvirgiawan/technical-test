import { SET_USER_LIST, SET_LOADING_USER_LIST, SET_FILTERED_USER_LIST } from './actionType'

const initialState = {
    users: [],
    loadingUsers: false,
    filteredUsers: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_LIST:
            return {
                ...state,
                users: action.payload,
            }
        case SET_LOADING_USER_LIST:
            return {
                ...state,
                loadingUsers: action.payload,
            }
        case SET_FILTERED_USER_LIST:
            return {
                ...state,
                filteredUsers: action.payload,
            }
        default:
            return state
    }
}
