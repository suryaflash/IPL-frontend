import React, { Component } from 'react';
import './user.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import sweeta from 'sweetalert';


export default class UserSignIn extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                email: '',
                password: ''
            }
    }

    componentWillMount = () => {
        if (localStorage.getItem('user') !== null)
            window.location.href = '/user/new'
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSignIn = () => {

        let data =
        {
            email: this.state.email,
            password: this.state.password
        }
        console.log(data);
        axios.post('/user/signin', data)
            .then((response) => {
                console.log(response);
                if (response.data.allow === "yes") {
                    localStorage.setItem('user', response.data.user)
                    window.location.href = '/user/new';
                }
                else
                    sweeta("You do not have an User account!", "Please register with your Email Id and Log In", "error");
            })
            .catch(function (error) {
                console.log(error);
            })

    }



    render() {
        const responseFacebook = (response) => {
            console.log(response);
            console.log(response.name);
            if (response.name !== undefined) {
                localStorage.setItem('name', response.name);
                window.location.href = "/user/new";
            }
            else
                sweeta("Facebook Login error!", "Log In With Facebook Correctly", "error");
        }
        const responseGoogle = (response) => {

            console.log(response);
            console.log(response.w3.ofa);
            if (response.w3.ofa !== undefined) {
                localStorage.setItem('name', response.w3.ofa);
                window.location.href = "/user/new";
            }
            else
                sweeta("Google Login error!", "Log In With Google Correctly", "error");
        }


        return (

            <div>
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px", marginTop: "100px" }} label="User Log In" />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='email'
                        label='Email Id'
                        value={this.state.email}
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
                <div style={{ paddingLeft: "540px", paddingTop: "30px" }}>
                    <FacebookLogin
                        appId="844483905886019"
                        fields="name,email,picture"
                        callback={responseFacebook}
                    />
                </div>
                <div style={{ paddingLeft: "580px", paddingTop: "30px", blockSize: "100px" }}>
                    <GoogleLogin
                        clientId="106862050342-t5unp1qpfs5gmmua0imv5gn1j338o5rm.apps.googleusercontent.com"
                        buttonText="Login With Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>

                <p style={{ marginLeft: "545px" }}> Create User Account -> <NavLink to="/user/signup"> Register here </NavLink></p>
                <p style={{ marginLeft: "610px" }}> <NavLink to="/"> Log In as admin </NavLink></p>
            </div>

        )
    }
}
