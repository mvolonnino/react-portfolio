import React from "react";

import HeroCardProject from "../../components/Card";
import EmployeeCardProject from "../../components/Card-Employee";
import BudgetCardProject from "../../components/Card-Budget";
// herocardproject images
import novaSearch from "./heroImg/nova-search.png";
import novaFight from "./heroImg/nova-fight.png";
import novaUniverse from "./heroImg/nova-universe.png";
// employeecardproject images
import empDirectory from "./empImg/emp-directory.png";
import startDate from "./empImg/start-date.png";
import searchMatt from "./empImg/search-matt.png";
// budgetcardproject images
import budget from "./budgetImg/budget.png";
import FitnessCardProject from "../../components/Card-Fitness";
// fitnesscardproject images
import lastWorkout from "./fitnessImg/last-workout.png";
import logWorkout from "./fitnessImg/log-workout.png";
import dashboard from "./fitnessImg/dashboard.png";

function EpicProjects() {
  return (
    <div className="container">
      <div className="row">
        <HeroCardProject img={[novaSearch, novaUniverse, novaFight]} />
        <EmployeeCardProject img={[empDirectory, startDate, searchMatt]} />
      </div>
      <div className="row mt-5">
        <BudgetCardProject img={[budget]} />
        <FitnessCardProject img={[lastWorkout, logWorkout, dashboard]} />
      </div>
      <br></br>
    </div>
  );
}

export default EpicProjects;
