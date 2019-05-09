import React, { Component } from 'react';
// import './../App.css';
// import { NavLink } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Axios from 'axios';
import sweeta from 'sweetalert';


export default class EditManager extends Component {
    constructor() {
        super();
        this.state = {
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
        Axios.get(`/managers/${this.props.match.params.id}/edit`)
            .then((res) => {
                console.log(res);
                this.setState({
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    age: res.data.age,
                    dob: res.data.dob,
                    nationality: res.data.nationality,
                    team: res.data.team,
                });
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    editArticle = () => {
        let data =
        {
            id: this.props.match.params.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            age: this.state.age,
            dob: this.state.dob,
            nationality: this.state.nationality,
            team: this.state.team,
        }
        Axios.put(`/managers/${this.props.match.params.id}`, data)
            .then((res) => {
                console.log(res);
                sweeta("Success", "Manager is edited!", "success")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        return (
            <div>
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px", marginTop: "100px" }} label="Edit Manager" />
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
                        id="date"
                        name="dob"
                        label="Date Of Birth"
                        type="date"
                        defaultValue="1997-01-01"
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
                </div>

                <div>
                    <Button style={{ marginLeft: "620px", blockSize: "40px" }} variant="contained" color="primary" onClick={() => this.editArticle()}>
                        Edit
                    </Button>
                </div>


            </div >
        )
    }
}