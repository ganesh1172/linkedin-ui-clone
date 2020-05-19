import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sign_in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/join_now">Join Now</Link>
                    </li>
                    <li>
                        <Link to="/forgot_password">Forgot Password</Link>
                    </li>
                </ul>

                <hr />
            </div>
        )
    }
}
