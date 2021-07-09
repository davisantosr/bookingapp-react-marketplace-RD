import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TopNav from "./components/TopNav";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./user/Dashboard";

import { store } from "./redux/store";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <TopNav />
          <ToastContainer position={"top-center"} />
          <Switch>
            <Route component={Home} exact path={"/"} />
            <Route component={Login} path={"/login"} />
            <Route component={Register} path={"/register"} />
            <PrivateRoute component={Dashboard} path={"/dashboard"} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
