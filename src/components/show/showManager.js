import React, { Component } from 'react';
// import './../App.css';
import Axios from 'axios';

class ShowManager extends Component {
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
        Axios.get(`/managers/${this.props.match.params.id}`)
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


    render() {
        return (
            <div className="container">
                <div>
                    <p >FIRSTNAME : {this.state.first_name}</p>
                    <br />
                    <p >LASTNAME : {this.state.last_name}</p>
                    <br />
                    <p >AGE : {this.state.age}</p>
                    <br />
                    <p >DATE OF BIRTH : {this.state.dob}</p>
                    <br />
                    <p >NATIONALITY : {this.state.nationality}</p>
                    <br />
                    <p >TEAM : {this.state.team}</p>
                    <br />
                </div>
            </div>

        );
    }
}

export default ShowManager;