import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue, pink } from "@material-ui/core/colors";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

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

  const [toastMessage, setToastMessage] = React.useState("");
  const [toastOpen, setToastOpen] = React.useState(false);

  const createToast = (message) =>
  {
    setToastMessage(message);
    setToastOpen(true);
  }

  const closeToast = () => {
    setToastOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Snackbar open={toastOpen} autoHideDuration={3000} onClose={closeToast}>
        <Alert
          elevation={6}
          onClose={closeToast}
          variant="filled"
          severity="success"
        >
          {toastMessage}
        </Alert>
        </Snackbar>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" render={(props) => <ManageCoursePage createToast={createToast} {...props} />} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
