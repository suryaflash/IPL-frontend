import React, { Component } from 'react';
// import './../App.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import sweeta from 'sweetalert';

export default class AddTeam extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                name: '',
                owner: '',
                manager: '',
                captain: '',
            }
    }

    componentWillMount = () => {
        if (localStorage.getItem('admin') === null)
            window.location.href = '/'
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSignIn = () => {

        let data =
        {
            name: this.state.name,
            owner: this.state.owner,
            manager: this.state.manager,
            captain: this.state.captain
        }
        axios.post('/teams', data)
            .then((response) => {
                console.log(response);
                sweeta("Success", "Team is added!", "success")
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    render() {

        return (
            <div>
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px", marginTop: "100px" }} label="Add Team" />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='name'
                        label='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='owner'
                        label='Owner'
                        value={this.state.owner}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='manager'
                        label='Manager'
                        value={this.state.manager}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='captain'
                        label='Captain'
                        value={this.state.captain}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <Button style={{ marginLeft: "625px", blockSize: "40px" }} variant="contained" color="primary" onClick={this.onSignIn}>
                        Add
                    </Button>
                </div>
            </div>

        )
    }
}
