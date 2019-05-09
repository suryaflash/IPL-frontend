import React, { Component } from 'react';
// import './../App.css';
import Axios from 'axios';

class ShowTeam extends Component {
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
        Axios.get(`/teams/${this.props.match.params.id}`)
            .then((res) => {
                console.log(res);
                this.setState({ name: res.data.name, owner: res.data.owner, manager: res.data.manager, captain: res.data.captain });
            })
            .catch((err) => {
                console.log(err)
            })

    }


    render() {
        return (
            <div className="container">
                <div>
                    <p >NAME : {this.state.name}</p>
                    <br />
                    <p >OWNER : {this.state.owner}</p>
                    <br />
                    <p >MANAGER : {this.state.manager}</p>
                    <br />
                    <p >CAPTAIN : {this.state.captain}</p>
                </div>
            </div>

        );
    }
}

export default ShowTeam;