import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CardActions, Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function HomePage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    title: {
      fontSize: 16,
    },
  }));
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container maxWidth="md">
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Pluralsight Administration
          </Typography>
          <Typography variant="body2" component="p">
            React, Flux and React Router for ultra-responseive web apps.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary" variant="contained" onClick={() => history.push("about")}>
            About
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default HomePage;
