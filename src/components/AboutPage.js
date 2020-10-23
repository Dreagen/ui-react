import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardHeader, CardMedia, Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import reactImage from '../static/react.jpeg';

function AboutPage(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    title: {
      fontSize: 16,
    },
    media: {
      height: 0,
      paddingTop: "30.00%", // 16:9
    },
  }));
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Card className={classes.root}>
        <CardHeader title="About" />
        <CardMedia
          className={classes.media}
          image={reactImage}
          title="react"
        />
        <CardContent>
          <Typography variant="body2" component="p">
            This app uses React
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutPage;
