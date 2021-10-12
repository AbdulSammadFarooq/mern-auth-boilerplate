import React from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ComposeEmail from "./components/ComposeEmail";
import Activate from "../src/components/Activate";
import Forgot from "./components/Forgot";
import Reset from "./components/Reset";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import AddUser from "./pages/AddUser";
import Campaign from "./pages/Campaign";
import EditProfile from "./pages/EditProfile";
import EditPayment from "./pages/EditPayment";
import Leads from "./pages/Leads";
import Notifications from "./pages/Notifications";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* {
            localStorage.getItem('user')?
            <>
            <Link></Link>
            </>:
            <>
            </>
          } */}
          <Route exact path="/signup" component={Registration} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/auth/activate/:token" component={Activate} />
          <Route exact path="/auth/password/forgot" component={Forgot} />
          <Route exact path="/auth/password/reset/:token" component={Reset} />
          <Route exact path="/compose" component={ComposeEmail} />
        </Switch>
      </Router>
      {/* Dashboard */}
      {/* <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/campaign" component={Campaign} />
          <Route exact path="/leads" component={Leads} />
          <Route exact path="/settings/edit-profile" component={EditProfile} />
          <Route exact path="/settings/edit-payment" component={EditPayment} />
          <Route exact path="/settings/add-user" component={AddUser} />
          <Route exact path="/notifications" component={Notifications} />
          <Route path="/reports/reports1" component={ReportsOne} />
          <Route path="/reports/reports2" component={ReportsTwo} />
          <Route path="/reports/reports3" component={ReportsThree} />
          <Route exact path="/team" component={Team} />
        </Switch>
      </Router> */}
    </>
  );
};

export default App;
