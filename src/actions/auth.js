import { LOGIN } from "../constant"


export const login = (userInfo) => {
    return {
        type: LOGIN,
        payload: userInfo
    }
}





