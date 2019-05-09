import React, { Component } from 'react';
// import './../App.css';
import Axios from 'axios';

class ShowPlayer extends Component {
    constructor() {
        super();
        this.state = {
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
        Axios.get(`/players/${this.props.match.params.id}`)
            .then((res) => {
                console.log(res);
                this.setState({
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                    age: res.data.age,
                    dob: res.data.dob,
                    role: res.data.role,
                    nationality: res.data.nationality,
                    team: res.data.team,
                    batting_style: res.data.batting_style,
                    bowling_style: res.data.bowling_style
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
                    <p >ROLE : {this.state.role}</p>
                    <br />
                    <p >NATIONALITY : {this.state.nationality}</p>
                    <br />
                    <p >TEAM : {this.state.team}</p>
                    <br />
                    <p >BATTING STYLE : {this.state.batting_style}</p>
                    <br />
                    <p >BOWLING STYLE : {this.state.bowling_style}</p>
                </div>
            </div>

        );
    }
}

export default ShowPlayer;