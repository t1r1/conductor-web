import React from 'react'
import './LoginPage.css'

export default class LoginPage extends React.Component {
    render () {
        return (
            <div className="Login">
                <h2 className="Login_Brand">Conductor</h2>
                <div className="LoginForm">
                    <div className="LoginForm_Field">
                        <label htmlFor="login">Login</label>
                        <input className="form-control" type="text" placeholder="Login" />
                    </div>
                    <div className="LoginForm_Field">
                        <label htmlFor="login">Password</label>
                        <input className="form-control" type="password" placeholder="Password" />
                    </div>
                    <div className="LoginForm_Buttons">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
                <div className="LoginForm LoginForm-Alternative">
                    <div className="LoginForm_Buttons">
                        <button className="btn btn-secondary">Login via Sys.Mail.Ru</button>
                    </div>
                </div>
            </div>
        )
    }
}