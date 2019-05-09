import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import './../App.css';



export default class newnew extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount = () => {

        if (localStorage.getItem('user') !== null)
            localStorage.setItem('flukename', localStorage.getItem('user'));

        if (localStorage.getItem('name') !== null)
            localStorage.setItem('flukename', localStorage.getItem('name'));

        if (localStorage.getItem('user') === null && localStorage.getItem('name') === null)
            window.location.href = '/user/signin'

    }

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('name');
        localStorage.removeItem('flukename');
        window.location.href = "/user/signin";
    }

    render() {

        return (

            <div>
                <p style={{ float: "right" }}> Hi , {(localStorage.getItem('flukename'))}
                    <Button color="secondary" style={{ marginLeft: "20px" }} onClick={this.logout}>LogOut</Button>
                </p>
                <br />
                HELLOO!!
            </div>

        )
    }
}
