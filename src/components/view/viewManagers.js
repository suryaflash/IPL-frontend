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
        fontSize: 15,
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

class ViewManagers extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                managers: [],
            }
    }

    componentWillMount = () => {
        if (localStorage.getItem('admin') === null)
            window.location.href = '/'
        axios.get('/managers')
            .then((res) => {
                console.log(res);
                this.setState({ managers: res.data })
            })
    }

    deleteHandler = (id) => {
        axios.delete(`/managers/${id}`)
            .then((res) => {
                console.log(res);
                sweeta("Deleted", "Manager is deleted!", "error")
            })

            .catch((err) => {
                console.log(err);
            })
        window.location.href = "/admin/view_managers";
    }

    render() {

        return (
            <div>
                <div>
                    <Chip color="primary" style={{ blockSize: "40px", fontSize: "20px", marginLeft: "600px", marginBottom: "50px" }} label="Managers" />
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>#</CustomTableCell>
                            <CustomTableCell>   First Name   </CustomTableCell>
                            <CustomTableCell>   Last Name    </CustomTableCell>
                            <CustomTableCell>    Age     </CustomTableCell>
                            <CustomTableCell>   Date Of Birth   </CustomTableCell>
                            <CustomTableCell>    Nationality   </CustomTableCell>
                            <CustomTableCell>    Team    </CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.managers ? this.state.managers.map((manager, index) => (
                            <TableRow key={index}>
                                <CustomTableCell> {manager.id} </CustomTableCell>
                                <CustomTableCell> {manager.first_name}</CustomTableCell>
                                <CustomTableCell> {manager.last_name}</CustomTableCell>
                                <CustomTableCell> {manager.age}</CustomTableCell>
                                <CustomTableCell> {manager.dob}</CustomTableCell>
                                <CustomTableCell> {manager.nationality}</CustomTableCell>
                                <CustomTableCell> {manager.team}</CustomTableCell>
                                <CustomTableCell><NavLink to={"/managers/" + manager.id + "/show"}> Show </NavLink></CustomTableCell>
                                <CustomTableCell><NavLink to={"/managers/" + manager.id + "/edit"}> Edit </NavLink></CustomTableCell>
                                <CustomTableCell><Button onClick={() => this.deleteHandler(manager.id)}>Delete</Button> </CustomTableCell>
                            </TableRow>
                        )) : 'No Data'}
                    </TableBody>
                </Table>
            </div>

        )
    }
}

ViewManagers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewManagers);
