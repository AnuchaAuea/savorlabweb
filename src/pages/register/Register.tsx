import { Navigate } from "react-router-dom";
import "./Register.css";
import React, { Component, SyntheticEvent } from "react";

export default class Register extends Component {
  RegisterOBJ = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  state = {
    redirect: false,
  };

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("RegisterOBJ is : ", this.RegisterOBJ);

    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to={"/login"} />;
    }

    return (
      <div>
        <main className="form-register w-100 m-auto">
          <form onSubmit={this.submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <div className="form-floating">
              <input
                className="form-control"
                placeholder="First name"
                onChange={(e) => (this.RegisterOBJ.firstName = e.target.value)}
              />
              <label>First name</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control"
                placeholder="Last name"
                onChange={(e) => (this.RegisterOBJ.lastName = e.target.value)}
              />
              <label>Last name</label>
            </div>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                onChange={(e) => (this.RegisterOBJ.email = e.target.value)}
              />
              <label>Email address</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => (this.RegisterOBJ.password = e.target.value)}
              />
              <label>Password</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password confirm"
                onChange={(e) =>
                  (this.RegisterOBJ.passwordConfirm = e.target.value)
                }
              />
              <label>Password confirm</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Submit
            </button>
          </form>
        </main>
      </div>
    );
  }
}
