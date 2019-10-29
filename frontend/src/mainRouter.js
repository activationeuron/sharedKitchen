import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Profile/profile";
import Auth from "./components/Auth/Auth";
import Search from "./components/Search/Search";
import addkitchen from "./components/AddKitchen/Kitcheninfo";
import products from "./components/Products/";
import renterdashboard from "./components/Dashboards/RenterDashboard";
import ownerdashboard from "./components/Dashboards/OwnerDashboard";
import admindashboard from "./components/Dashboards/AdminDashboard";
const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/addkitchen" component={addkitchen} />
        <Route path="/products/:id" exact component={products} />
        <Route exact path="/renterdashboard" component={renterdashboard} />
        <Route exact path="/ownerdashboard" component={ownerdashboard} />
        <Route exact path="/admindashboard" component={admindashboard} />
      </Switch>
    </div>
  );
};

export default MainRouter;
