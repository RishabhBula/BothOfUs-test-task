import { createTheme, ThemeProvider } from "@material-ui/core";
import { Route, Router, Switch } from "react-router-dom";

import AdminMessages from "./screens/AdminMessages";
import BrandsAndCommisions from "./screens/BrandsCommisions";
import history from "./services/history";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 770,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: "#1da1f2",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ff6d6d",
      contrastText: "#fff"
    },
    text: {
      primary: "#242529",
      secondary: "#8a96a3"
    }
  },
  typography: {
    fontFamily: "Metropolis",
    h2: {
      fontSize: "1.563rem",
      fontWeight: 600
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600
    },
    h5: {
      fontWeight: 600
    },
    h6: {
      fontWeight: 600
    },
    subtitle1: {
      fontSize: "0.938"
    }
  },
  shape: { borderRadius: 30 }
});

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route
            exact={true}
            path={"/"}
            render={(routesProps) => {
              return <AdminMessages />;
            }}
          />
          <Route
            exact={false}
            path={"/brands"}
            render={(routesProps) => {
              return <BrandsAndCommisions />;
            }}
          />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
