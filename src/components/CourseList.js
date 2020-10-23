import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 750,
  },
  tableRow: {
    cursor: "pointer"
  },
  title: {
    flex: '1 1 100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  toolbar: {
    padding: '16px'
  }
}));

function CourseList(props) {
  const classes = useStyles();
  const history = useHistory();

  function addCourse() {
    history.push("course");
  }
  return (
    <Container maxWidth="md">
      <Paper className={classes.paper}>
      <Toolbar className={classes.toolbar} >
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div" color="primary">
          Courses
        </Typography>
        <Tooltip title="Add Course">
          <IconButton aria-label="Add Course" onClick={addCourse} color="primary">
            <AddIcon />
          </IconButton>
        </Tooltip>
    </Toolbar>
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Author ID</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.courses.map((course) => (
            <TableRow className={classes.tableRow} hover key={course.id} onClick={() => history.push(`course/${course.slug}`)}>
              <TableCell component="th" scope="row">
                {course.title}
              </TableCell>
              <TableCell align="right">{course.authorId}</TableCell>
              <TableCell align="right">{course.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </Container>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
