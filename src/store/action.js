import { SET_USER_LIST, SET_LOADING_USER_LIST, SET_FILTERED_USER_LIST } from './actionType'

import randomUserApi from '../apis/randomUserApi'

import { toast } from 'react-toastify'

export function setUserList(payload) {
    return {
        type: SET_USER_LIST,
        payload,
    }
}

function setLoadingUserList(payload) {
    return {
        type: SET_LOADING_USER_LIST,
        payload,
    }
}

export function setFilteredUserList(payload) {
    return {
        type: SET_FILTERED_USER_LIST,
        payload,
    }
}

export function fetchUserList() {
    return async function (dispatch) {
        try {
            dispatch(setLoadingUserList(true))

            let response = await randomUserApi({
                method: 'GET',
                url: '/?results=20',
            })

            dispatch(setUserList(response.data.results))
            dispatch(setFilteredUserList(response.data.results))
        } catch {
            toast.error('Sorry, an error has occured while fetching user list!')
        } finally {
            dispatch(setLoadingUserList(false))
        }
    }
}
