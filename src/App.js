import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import MyNavbar from "./components/Nav";
import Profile from "./pages/Profile/Profile";
import AboutMe from "./pages/AboutMe";
import EpicProjects from "./pages/EpicProjects/EpicProjects";

function App() {
  return (
    <Router>
      <div className="App bg-image">
        <MyNavbar />
        <Switch>
          <Route exact path={["/", "/react-portfolio"]}>
            <Profile />
          </Route>
          <Route exact path={"/react-portfolio/about"}>
            <AboutMe />
          </Route>
          <Route exact path={"/react-portfolio/projects"}>
            <EpicProjects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
