import React from "react";
import ReactDOM from "react-dom";
import Spinner from './shared/components/spinner/spinner';
import appRoutes from './app-routing';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
  return <div>
    <Router>
      <Switch>
      {appRoutes.map((route, index) => {
        return <RouteWithSubRoutes key={index} {...route}/>
      }) }
      </Switch>

    </Router>
  </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
