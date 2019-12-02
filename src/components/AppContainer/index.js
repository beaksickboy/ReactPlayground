import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";

import appRoutes from "../../routes/app-container-routing";

class AppContainer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <Link to="/login">Login</Link>
            </ul>
          </nav>
        </header>
        <div>
          <Switch>
            {appRoutes.map((route, index) => {
              return <Route key={index} {...route} />;
            })}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
