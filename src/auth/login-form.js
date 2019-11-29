import React from "react";

export class LoginForm extends React.Component {
  render() {
      return <form>
        <div className="form-group">
          <label for="userId">User Id</label>
          <input id="userId" class="form-control" />
        </div>
      </form>
  }
}
