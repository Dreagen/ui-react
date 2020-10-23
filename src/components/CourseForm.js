import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

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

  return (
    <>
      <Container maxWidth="md">
        <Card className={classes.root}>
          <CardContent>
            <form className={classes.root} noValidate autoComplete="off">
              <TextInput
                name="title"
                id="title"
                label="Title"
                error={props.errors.title}
                value={props.course.title}
                onChange={props.onChange}
              />
              <br />
              <FormControl className={classes.formControl} error={props.errors.authorId}>
                <InputLabel id="demo-simple-select-label">Author</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="authorId"
                  value={props.course.authorId || ""}
                  onChange={props.onChange}
                >
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={"1"}>Cory House</MenuItem>
                  <MenuItem value={"2"}>Scott Allen</MenuItem>
                </Select>
                <FormHelperText>{props.errors.authorId}</FormHelperText>
              </FormControl>
              <br />

              <TextInput
                name="category"
                id="category"
                label="Category"
                error={props.errors.category}
                value={props.course.category}
                onChange={props.onChange}
              />
              <br />
              <br />

              <Button
                variant="contained"
                color="secondary"
                onClick={props.onSubmit}
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
}

export default CourseForm;
