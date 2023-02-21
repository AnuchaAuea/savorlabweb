import './Login.css'
import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <main className="form-signin w-100 m-auto">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign ing</h1>

                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <button
                            className="w-100 btn btn-lg btn-primary"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </form>
                </main>
            </div>
        )
    }
}
