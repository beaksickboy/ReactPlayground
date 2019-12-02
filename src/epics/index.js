import { combineEpics } from "redux-observable";

import { loginEpic } from "./auth";


export default combineEpics(
    loginEpic
)