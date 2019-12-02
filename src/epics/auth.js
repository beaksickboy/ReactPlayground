import { ofType } from "redux-observable";
import { map } from "rxjs/operators";

import { LOGIN } from "../constant";
import { loginSuccess } from "../actions/auth";

export const loginEpic = action$ =>
  action$.pipe(
    ofType(LOGIN),
    map(action => loginSuccess(action.payload))
  );
