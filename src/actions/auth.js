import { LOGIN, LOGIN_SUCCESS } from "../constant"


export const login = (userInfo) => {
    return {
        type: LOGIN,
        payload: userInfo
    }
}

export const loginSuccess = (userInfo) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userInfo
    }
}





