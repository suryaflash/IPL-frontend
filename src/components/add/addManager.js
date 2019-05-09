import React, { Component } from 'react';
// import './../App.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import sweeta from 'sweetalert';

export default class AddManager extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                first_name: '',
                last_name: '',
                age: '',
                dob: '',
                nationality: '',
                team: '',
            }
    }

    componentWillMount = () => {
        if (localStorage.getItem('admin') === null)
            window.location.href = '/'
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    onAdd = () => {

        let data =
        {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            age: this.state.age,
            dob: this.state.dob,
            nationality: this.state.nationality,
            team: this.state.team,
        }
        axios.post('/managers', data)
            .then((response) => {
                console.log(response);
                sweeta("Success", "Manager is added!", "success")
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    render() {

        return (
            <div>
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px", marginTop: "100px" }} label="Add Manager" />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='first_name'
                        label='First Name'
                        value={this.state.first_name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='last_name'
                        label='Last Name'
                        value={this.state.last_name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='age'
                        label='Age'
                        value={this.state.age}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        label="Date of Birth"
                        value={this.state.dob}
                        onChange={this.handleChange}
                        type="date"
                        // defaultValue="1997-01-01"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='nationality'
                        label='Nationality'
                        value={this.state.nationality}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='team'
                        label='Team'
                        value={this.state.team}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />

                </div>
                <div>
                    <Button style={{ marginLeft: "600px", blockSize: "40px" }} variant="contained" color="primary" onClick={() => this.onAdd()}>
                        Add
                    </Button>
                </div>
            </div>

        )
    }
}
