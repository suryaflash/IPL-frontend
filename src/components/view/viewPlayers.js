import React, { Component } from 'react';
// import './../App.css';
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


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 10
    },
    body: {
        fontSize: 10,
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


class ViewPlayers extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                players: [],
            }
    }

    componentWillMount = () => {
        if (localStorage.getItem('admin') === null)
            window.location.href = '/'
        axios.get('/players')
            .then((res) => {
                console.log(res);
                this.setState({ players: res.data })
            })
    }

    deleteHandler = (id) => {
        axios.delete(`/players/${id}`)
            .then((res) => {
                console.log(res);
                sweeta("Deleted", "Player is deleted!", "error")
            })
            .catch((err) => {
                console.log(err);
            })
        window.location.href = "/admin/view_players";
    }
    render() {

        return (
            <div>
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px", marginBottom: "50px" }} label="Players" />
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>#</CustomTableCell>
                            <CustomTableCell>   First Name   </CustomTableCell>
                            <CustomTableCell>   Last Name    </CustomTableCell>
                            <CustomTableCell>    Age     </CustomTableCell>
                            <CustomTableCell>   Date Of Birth   </CustomTableCell>
                            <CustomTableCell>     Role    </CustomTableCell>
                            <CustomTableCell>    Nationality   </CustomTableCell>
                            <CustomTableCell>    Team    </CustomTableCell>
                            <CustomTableCell>    Batting Style  </CustomTableCell>
                            <CustomTableCell>    Bowling Style    </CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.players ? this.state.players.map((player, index) => (
                            <TableRow key={index}>
                                <CustomTableCell> {player.id} </CustomTableCell>
                                <CustomTableCell> {player.first_name}</CustomTableCell>
                                <CustomTableCell> {player.last_name}</CustomTableCell>
                                <CustomTableCell> {player.age}</CustomTableCell>
                                <CustomTableCell> {player.dob}</CustomTableCell>
                                <CustomTableCell> {player.role} </CustomTableCell>
                                <CustomTableCell> {player.nationality}</CustomTableCell>
                                <CustomTableCell> {player.team}</CustomTableCell>
                                <CustomTableCell> {player.batting_style}</CustomTableCell>
                                <CustomTableCell> {player.bowling_style}</CustomTableCell>
                                <CustomTableCell><NavLink to={"/players/" + player.id + "/show"}> Show </NavLink></CustomTableCell>
                                <CustomTableCell><NavLink to={"/players/" + player.id + "/edit"}> Edit </NavLink></CustomTableCell>
                                <CustomTableCell><Button onClick={() => this.deleteHandler(player.id)}>Delete</Button> </CustomTableCell>
                            </TableRow>
                        )) : 'No Data'}
                    </TableBody>
                </Table>
            </div>

        )
    }
}

ViewPlayers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewPlayers);
