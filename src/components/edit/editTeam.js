import React, { Component } from 'react';
// import './../App.css';
// import { NavLink } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import Chip from '@material-ui/core/Chip';
import sweeta from 'sweetalert';


export default class EditTeam extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            owner: '',
            manager: '',
            captain: ''
        }
    }

    componentWillMount = () => {
        if (localStorage.getItem('admin') === null)
            window.location.href = '/'
        Axios.get(`/teams/${this.props.match.params.id}/edit`)
            .then((res) => {
                console.log(res);
                this.setState({ name: res.data.name, owner: res.data.owner, manager: res.data.manager, captain: res.data.captain });
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
            name: this.state.name,
            owner: this.state.owner,
            manager: this.state.manager,
            captain: this.state.captain
        }
        Axios.put(`/teams/${this.props.match.params.id}`, data)
            .then((res) => {
                console.log(res);
                sweeta("Success", "Team is edited!", "success")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        return (
            <div className="container">
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px", marginTop: "100px" }} label="Edit Team" />
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
                    <Button style={{ marginLeft: "625px", blockSize: "40px" }} variant="contained" color="primary" onClick={() => this.editArticle()}>
                        Edit
                    </Button>
                </div>

            </div >
        )
    }
}