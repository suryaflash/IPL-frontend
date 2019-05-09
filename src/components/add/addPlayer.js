import React, { Component } from 'react';
// import './../App.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import sweeta from 'sweetalert';

export default class AddPlayer extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                first_name: '',
                last_name: '',
                age: '',
                dob: '',
                role: '',
                nationality: '',
                team: '',
                batting_style: '',
                bowling_style: ''
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
        console.log("add")
        let data =
        {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            age: this.state.age,
            dob: this.state.dob,
            role: this.state.role,
            nationality: this.state.nationality,
            team: this.state.team,
            batting_style: this.state.batting_style,
            bowling_style: this.state.bowling_style
        }
        console.log(data);
        axios.post('/players', data)
            .then((response) => {
                console.log(response);
                sweeta("Success", "Player is added!", "success")
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    render() {

        return (
            <div>
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px" }} label="Add Player" />
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
                        name="dob"
                        label="Date Of Birth"
                        type="date"
                        // defaultValue="1997-01-01"
                        value={this.state.dob}
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        style={{ marginLeft: "555px" }}
                        name='role'
                        label='Role'
                        value={this.state.role}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
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
                    <div>
                        <TextField
                            style={{ marginLeft: "555px" }}
                            name='batting_style'
                            label='Batting Style'
                            value={this.state.batting_style}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            style={{ marginLeft: "555px" }}
                            name='bowling_style'
                            label='Bowling Style'
                            value={this.state.bowling_style}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
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
