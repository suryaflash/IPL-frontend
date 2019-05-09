import React, { Component } from 'react';
// import './../App.css';
import Button from '@material-ui/core/Button';

export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state =
            {

            }
    }

    componentWillMount = () => {
        if (localStorage.getItem('admin') === null)
            window.location.href = '/'
    }

    add = (value) => {
        if (value === 1)
            window.location.href = '/admin/add_team';
        else if (value === 2)
            window.location.href = '/admin/add_player';
        else
            window.location.href = '/admin/add_manager';
    }

    view = (value) => {
        if (value === 1)
            window.location.href = '/admin/view_teams';
        else if (value === 2)
            window.location.href = '/admin/view_players';
        else
            window.location.href = '/admin/view_managers';
    }
    logout = () => {
        localStorage.removeItem('admin');
        window.location.href = "/";
    }


    render() {

        return (
            <div>
                <p style={{ float: "right" }}> Hi , {(localStorage.getItem('admin'))}
                    <Button color="secondary" style={{ marginLeft: "20px" }} onClick={this.logout}>LogOut</Button>
                </p>
                <br />
                <div>
                    <Button style={{ blockSize: "50px", margin: "100px" }} color="secondary" variant="contained" component="span" onClick={() => this.add(1)}>
                        Add a Team
                </Button>
                    <Button style={{ blockSize: "50px", margin: "100px" }} color="secondary" variant="contained" component="span" onClick={() => this.add(2)}>
                        Add a player
                </Button>
                    <Button style={{ blockSize: "50px", margin: "100px" }} color="secondary" variant="contained" component="span" onClick={() => this.add(3)}>
                        Add a Manager
                </Button>
                </div>

                <div>
                    <Button style={{ blockSize: "50px", margin: "100px", marginTop: "-75px" }} color="secondary" variant="contained" component="span" onClick={() => this.view(1)}>
                        All Teams
                </Button>
                    <Button style={{ blockSize: "50px", margin: "110px", marginTop: "-75px" }} color="secondary" variant="contained" component="span" onClick={() => this.view(2)}>
                        All Players
                </Button>
                    <Button style={{ blockSize: "50px", margin: "100px", marginTop: "-75px" }} color="secondary" variant="contained" component="span" onClick={() => this.view(3)}>
                        All Managers
                </Button>
                </div>
            </div>
        )
    }
}
