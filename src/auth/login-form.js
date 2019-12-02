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


// const query = new URLSearchParams(this.props.location.search); 
// for (let param of query.entries()) { console.log(param);