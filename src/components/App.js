import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blueGrey, cyan, lightBlue, pink } from "@material-ui/core/colors";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: lightBlue[200],
      },
      secondary: {
        main: pink[500],
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
