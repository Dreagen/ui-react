import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function CourseForm(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "50ch",
        position: "relative",
      },
    },
    submit: {
      width: "20ch",
    },
  }));
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  return (
    <Container maxWidth="md">
      <Card className={classes.root}>
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl className={classes.formControl}>
              <TextField id="outlined-basic" label="Title" />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Author</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              >
                <MenuItem value={""}></MenuItem>
                <MenuItem value={"1"}>Cory House</MenuItem>
                <MenuItem value={"2"}>Scott Allen</MenuItem>
              </Select>
            </FormControl>
            <br />

            <FormControl className={classes.formControl}>
              <TextField id="outlined-basic" label="Category" />
            </FormControl>
            <br />
            <br />

            <Button
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CourseForm;
