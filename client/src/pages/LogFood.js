import React from "react";
import BackBtn from "../components/Layout/BackBtn";
import CopyrightFooter from "../components/Layout/CopyrightFooter";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Card, Container, CardMedia, Box, Grid, Paper, Typography } from '@material-ui/core';
import FoodTable from "../components/Layout/FoodTable";
import FoodInput from "../components/Layout/FoodInput";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(5, 0, 0, 0),
    },
    radius: {
        borderRadius: 10,
    },
    buttonOption1: {
        background: theme.palette.secondary.light,
        margin: theme.spacing(6, 0, 0, 0),
        borderRadius: 10,
    },
    buttonOption4: {
        background: theme.palette.secondary.light,
        margin: theme.spacing(6, 0),
        borderRadius: 10,
    },
    headBody: {
        padding: theme.spacing(2, 0, 2),
        borderRadius: 10,
    },
    headText: {
        color: theme.palette.primary.dark,
    },
    cardGrid: {
        padding: theme.spacing(8),
    },
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        borderRadius: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));


function LogFood(props) {
    const classes = useStyles();
    const { user, logoutUser } = props;

    return (
        <Container
            maxWidth='false'
        >
            <AppBar
                position="static"
                spacing="0"
                color="transparent"
                fullwidth
                className={classes.heroContent}
            >
                <Grid container
                    fullwidth
                    justify="center"
                >
                    <Grid item
                        xs={12} sm={11} md={10} lg={9} xl={8}
                    >
                        <Card
                            className={classes.radius}
                        >
                            <CardMedia
                                component="img"
                                alt="Swaddle Swan Logo"
                                image="Banner.png"
                                title="Swaddle Swan Logo"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </AppBar>


            <main>
                <Grid container
                    justify="center"
                >
                    <Grid item
                        className={classes.headBody}
                        xs={12} sm={11} md={10} lg={9} xl={8}
                    >
                        <div className={classes.root}>
                            <AppBar
                                className={classes.radius}
                                color="transparent"

                                position="static">
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <IconButton
                                            edge="start"
                                            className={classes.menuButton}
                                            color="inherit"
                                            aria-label="menu"
                                        >
                                            <BackBtn />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5"
                                            align="center"
                                            className={classes.title}
                                        >
                                            Log<br></br>Food
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            size="small"
                                            className={classes.buttonOption4}
                                            component={Link} to="/" onClick={logoutUser} color="inherit"
                                            >
                                            Log<br></br>Out
                                        </Button>
                                    </Grid>
                                </Grid>
                            </AppBar>
                        </div>
                    </Grid>
                </Grid>

                <div
                    justify="center"
                    align="center"
                    className={classes.root}>
                    <Grid container
                        justify="center"
                        align="center"
                    >
                        <Grid item
                            justify="center"
                            align="center"

                            xs={9} lg={8} xl={7}
                        >
                            <Paper className={classes.buttonOption4}>
                                <Typography variant="h4" className={classes.text}>Feeding Times</Typography>
                            </Paper>
                        </Grid>
                        <Grid item
                            xs={10}
                        >
                            <FoodTable child={props.location.state} />
                        </Grid>
                    </Grid>

                    <Grid container
                        // spacing={3}
                        justify="center"
                        align="center"
                    >
                        <Grid item
                            xs={9} lg={8} xl={7}
                        >
                            <Paper className={classes.buttonOption4}>
                                <Typography variant="h4" className={classes.text}>
                                    Add a New Food
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item
                            xs={9} lg={8} xl={7}
                        >
                            <FoodInput child={props.location.state} />
                        </Grid>
                    </Grid>
                </div>
            </main>
            <Box mt={8}>
                <CopyrightFooter />
            </Box>

        </Container>
    );
}

export default LogFood;