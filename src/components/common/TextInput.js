import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";

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

function TextInput(props) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <TextField
        value={props.value}
        name={props.name}
        id={props.id}
        label={props.label}
        error={props.error.length > 0}
        helperText={props.error}
        onChange={props.onChange}
      />
    </FormControl>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
    error: ""
}

export default TextInput;
