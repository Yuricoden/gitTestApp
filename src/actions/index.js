
import { getDataRequested } from '../actionsCreators'
import { getDataDone } from '../actionsCreators'
import { getDataFailed } from '../actionsCreators'



export const getUsersData = (url, name) => dispatch => {
    dispatch(getDataRequested('GET_USERS_REQUESTED'));
    return fetch(url).then(response => response.json())
        .then(data => {
            dispatch(getDataDone('GET_USERS_DONE', { [name]: data }));
        })
        .catch(error => {
            dispatch(getDataFailed('GET_USERS_FAILED'))
        })
}



export const getUserData = (url, name) => dispatch => {
    dispatch(getDataRequested('GET_USER_REQUESTED'));
    return fetch(url).then(response => response.json())
        .then(data => {
            dispatch(getDataDone('GET_USER_DONE', { [name]: data }));
        })
        .catch(error => {
            dispatch(getDataFailed('GET_USER_FAILED'))
        })
}

