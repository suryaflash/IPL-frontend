import React, { Component } from 'react';
// import './../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';
import sweeta from 'sweetalert';
import { NavLink } from "react-router-dom";


export default class AdminSignIn extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                username: '',
                password: ''
            }
    }

    componentWillMount = () => {
        if (localStorage.getItem('admin') !== null)
            window.location.href = '/admin_dashboard'
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSignIn = () => {

        let data =
        {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/admin/signin', data)
            .then((response) => {
                console.log(response);
                if (response.data.allow === "yes") {
                    localStorage.setItem('admin', response.data.admin)
                    window.location.href = '/admin_dashboard';
                }
                else
                    sweeta("Bad Credentials!", "You are not authorized as an Admin", "error");
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    render() {

        return (
            <div>
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px", marginTop: "100px" }} label="Admin Log In" />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='username'
                        label='User Name'
                        value={this.state.username}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        label='Password'
                        type='password'
                        name='password'
                        autoComplete="current-password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <Button style={{ marginLeft: "625px", blockSize: "40px" }} variant="contained" color="primary" onClick={() => this.onSignIn()}>
                        Sign In
                    </Button>
                </div>

                <p style={{ marginLeft: "550px" }}>SignUp as user -><NavLink to="/user/signup"> Create an Account </NavLink></p>
            </div>

        )
    }
}
