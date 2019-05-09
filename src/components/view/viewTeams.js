import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import sweeta from 'sweetalert';
// import './../App.css';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 20
    },
    body: {
        fontSize: 18,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

class ViewTeams extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                teams: [],
            }
    }



    componentWillMount = () => {
        if (localStorage.getItem('admin') === null)
            window.location.href = '/'
        axios.get('/teams')
            .then((res) => {
                console.log(res);
                this.setState({ teams: res.data })
            })
    }

    deleteHandler = (id) => {
        axios.delete(`/teams/${id}`)
            .then((res) => {
                console.log(res);
                sweeta("Deleted", "Team is deleted!", "error")
            })
            .catch((err) => {
                console.log(err);
            })
        window.location.href = "/admin/view_teams";
    }

    render() {

        return (
            <div className="container">
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px", marginBottom: "50px" }} label="Teams" />
                </div>
                <Table borderless>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>#</CustomTableCell>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell>Owner</CustomTableCell>
                            <CustomTableCell>Manager</CustomTableCell>
                            <CustomTableCell>Captain</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.teams ? this.state.teams.map((team, index) => (
                            <TableRow key={index}>
                                <CustomTableCell> {team.id} </CustomTableCell>
                                <CustomTableCell> {team.name}</CustomTableCell>
                                <CustomTableCell> {team.owner}</CustomTableCell>
                                <CustomTableCell> {team.manager}</CustomTableCell>
                                <CustomTableCell> {team.captain}</CustomTableCell>
                                <CustomTableCell><NavLink to={"/teams/" + team.id + "/show"}> Show </NavLink></CustomTableCell>
                                <CustomTableCell><NavLink to={"/teams/" + team.id + "/edit"}> Edit </NavLink></CustomTableCell>
                                <CustomTableCell><Button onClick={() => this.deleteHandler(team.id)}>Delete</Button> </CustomTableCell>
                            </TableRow>
                        )) : 'No Data'}
                    </TableBody>
                </Table>
            </div>

        )
    }
}

ViewTeams.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewTeams);
