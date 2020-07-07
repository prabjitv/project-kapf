import React from "react";
import BackBtn from "../components/Layout/BackBtn";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import FoodTable from "../components/Layout/FoodTable"
import FoodInput from "../components/Layout/FoodInput"





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "white",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));


function LogFood() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <BackBtn />
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" className={classes.text}>Feeding Times</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <FoodTable />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" className={classes.text}>Add a New Food</Typography>
                    </Paper>
                </Grid>
            </Grid>
            <FoodInput />
            <Grid container spacing={3} direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Button component={Link} to="/logfood" className={classes.paper} variant="contained" size="large" color="primary">
                        Log New Food
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default LogFood;