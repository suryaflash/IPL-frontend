import React, { Component } from 'react';
// import './../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';
import { NavLink } from "react-router-dom";


export default class UserSignUp extends Component {
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


    onSignUp = () => {

        let data =
        {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/user/signup', data)
            .then((response) => {
                window.location.href = '/user/signin';
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    render() {

        return (
            <div>
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px", marginTop: "100px" }} label="User Sign Up" />
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
                    <Button style={{ marginLeft: "625px", blockSize: "40px" }} variant="contained" color="primary" onClick={() => this.onSignUp()}>
                        Sign Up
                    </Button>
                </div>

                <p style={{ marginLeft: "565px" }}> Already an User?  <NavLink to="/user/signin"> Log In here </NavLink></p>
                <p style={{ marginLeft: "620px" }}> <NavLink to="/"> Log In as admin </NavLink></p>
            </div>

        )
    }
}
