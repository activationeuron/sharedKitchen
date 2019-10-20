import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Profile/profile";
import Auth from "./components/Auth/Auth";
import Search from "./components/Search/Search";
import addkitchen from "./components/AddKitchen/Kitcheninfo";
import products from "./components/Products/";
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
      </Switch>
    </div>
  );
};

export default MainRouter;
