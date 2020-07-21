import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from '../../utils/API.js';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CopyrightFooter from './CopyrightFooter';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button1: {
    backgroundColor: theme.palette.success.main,
    margin: theme.spacing(1),
  },
  button2: {
    backgroundColor: theme.palette.warning.main,
    margin: theme.spacing(1),
  },
  button3: {
    backgroundColor: theme.palette.info.main,
    margin: theme.spacing(1),
  },
  button4: {
    backgroundColor: theme.palette.error.main,
    margin: theme.spacing(1),
  },
  button5: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  button6: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  childimagecard: {
    alignItems: "center"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

}));

function ChildCreate() {
  const classes = useStyles();
  const [gender, setGender] = useState('');
  const [name, setFName] = useState('');
  const [DOB, setDOB] = useState('');
  const [childImage, setChildImg] = useState("https://i.pinimg.com/236x/3d/31/09/3d310984e773f11d1769d08ab3c773de.jpg")

  const [allergies, setAllergies] = useState('');
  const [likes, setLikes] = useState('');
  const [dislikes, setDislikes] = useState('');
  const [notes, setNotes] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleNameChange = (event) => {
    setFName(event.target.value);
  };
  const handleDOBChange = (event) => {
    setDOB(event.target.value);
  };
  const handleAllergiesChange = (event) => {
    setAllergies(event.target.value);
  };
  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };
  const handleLikesChange = (event) => {
    setLikes(event.target.value);
  };
  const handleDislikesChange = (event) => {
    setDislikes(event.target.value);
  };

  const postChild = () => {
    let childData = {
      childGender: gender,
      childName: name,
      childDOB: DOB,
      childImg: childImage
    }
    API.Child.create(childData);
  };

  const postLike = () => {
    let likeData = {
      like: likes
    }
    API.Likes.create(likeData);
    console.log(likeData);
  };

  const postDislike = () => {
    let dislikeData = {
      dislike: dislikes
    }
    API.Dislikes.create(dislikeData);
    console.log(dislikeData);
  };

  const postAllergy = () => {
    let allergyData = {
      allergy: allergies
    }
    API.Allergy.create(allergyData);
    console.log(allergyData);
  };

  const postNote = () => {
    let noteData = {
      note: notes
    }
    API.Note.create(noteData);
    console.log(noteData);
  };

  function nugImg() {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'project-kapf',
      uploadPreset: 'fec0tg1l'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        setChildImg(result.info.secure_url);
      }
    }
    )
    myWidget.open()
  }

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Child's Basics
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Name"
                name="Name"
                label="Name"
                fullWidth
                value={name}
                onChange={handleNameChange}
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleGenderChange}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>        </Grid>
            <Grid item xs={12} sm={6}>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="X"
                  className={classes.textField}
                  onChange={handleDOBChange}
                  value={DOB}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
          </Grid>


        </Paper>

        <Paper className={classes.paper}>

          <Typography variant="h6" gutterBottom>
            Health Info and Comments
      </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <form>
                <TextField
                  id="outlined-multiline-static"
                  label="Allergies"
                  variant="outlined"
                  value={allergies}
                  onChange={handleAllergiesChange}
                />
                <Button
                  variant="contained"
                  className={classes.button1}
                  onClick={postAllergy}
                >
                  Add
                    </Button>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-multiline-static"
                label="Notes"
                variant="outlined"
                value={notes}
                onChange={handleNotesChange}
              />
              <Button
                variant="contained"
                className={classes.button2}
                onClick={postNote}
              >
                Add
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-multiline-static"
                label="Likes"
                variant="outlined"
                value={likes}
                onChange={handleLikesChange}
              />
              <Button
                variant="contained"
                className={classes.button3}
                onClick={postLike}
              >
                Add
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-multiline-static"
                label="Dislikes"
                variant="outlined"
                value={dislikes}
                onChange={handleDislikesChange}
              />
              <Button
                variant="contained"
                className={classes.button4}
                onClick={postDislike}
              >
                Add
                </Button>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container direction="row"
            justify="center"
            alignItems="center">
            <Typography variant="h6" gutterBottom>
              Add a lil photo of your Nugget-roo
          </Typography>
            <Card>
              <CardContent>
                <img src={childImage} alt="beauty"></img>
              </CardContent>

            </Card>
            </Grid>
            <Grid container direction="row"
            justify="center"
            alignItems="center">
            <Button
              className={classes.button6}
              onClick={nugImg}>
              Upload Image
          </Button>
          </Grid>
        </Paper>

        <Paper className={classes.paper}>
          <Grid container spacing={3} direction='column' alignItems='center'>
            <Grid item xs={12}>
              <Button
                onClick={postChild}
                component={Link} to="/home" className={classes.paper}
                variant='contained'
                size='large'
                className={classes.button5}
              >
                Submit
                </Button>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </Fragment>
  );
};

export default ChildCreate;