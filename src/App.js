import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard";
import Auth from "./Signup";
import "./App.css";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/register">
            <Auth />
          </Route>
          <Route exact path="/login">
            <Auth login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
