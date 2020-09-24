import React from "react";

import HeroCardProject from "../../components/Card";
import EmployeeCardProject from "../../components/Card-Employee";
// herocardproject
import novaSearch from "./heroImg/nova-search.png";
import novaFight from "./heroImg/nova-fight.png";
import novaUniverse from "./heroImg/nova-universe.png";
// employeecardproject
import empDirectory from "./empImg/emp-directory.png";
import startDate from "./empImg/start-date.png";
import searchMatt from "./empImg/search-matt.png";
// budgetcardproject
import budget from "./budgetImg/budget.png";
import BudgetCardProject from "../../components/Card-Budget";

function EpicProjects() {
  return (
    <div className="container">
      <div className="row">
        <HeroCardProject img={[novaSearch, novaUniverse, novaFight]} />
        <EmployeeCardProject img={[empDirectory, startDate, searchMatt]} />
      </div>
      <div className="row mt-5">
        <BudgetCardProject img={[budget]} />
      </div>
    </div>
  );
}

export default EpicProjects;
