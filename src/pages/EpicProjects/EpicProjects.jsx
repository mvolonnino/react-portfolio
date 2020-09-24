import React from "react";

import ProjectPageHeader from "../../components/Project-Card";
import HeroCardProject from "../../components/Card";
import EmployeeCardProject from "../../components/Card-Employee";
import BudgetCardProject from "../../components/Card-Budget";
import FitnessCardProject from "../../components/Card-Fitness";
import PokemonCardProject from "../../components/Card-Pokemon";
import TeamProfileCardProject from "../../components/Card-Team-Generator";
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
// fitnesscardproject images
import lastWorkout from "./fitnessImg/last-workout.png";
import logWorkout from "./fitnessImg/log-workout.png";
import dashboard from "./fitnessImg/dashboard.png";
// pokemoncardproject images
import pokeSearch from "./pokemonImg/poke-search.png";
import pokedex from "./pokemonImg/pokedex.png";
import errorSearch from "./pokemonImg/error-search.png";
// teamprofilecardproject images
import teamGenerator from "./profileGenImg/team-generator.png";
import htmlGen from "./profileGenImg/html-gen.png";
import htmlFile from "./profileGenImg/html-file.png";

function EpicProjects() {
  return (
    <div className="container">
      <ProjectPageHeader />
      <div className="row">
        <HeroCardProject img={[novaSearch, novaUniverse, novaFight]} />
        <EmployeeCardProject img={[empDirectory, startDate, searchMatt]} />
      </div>
      <div className="row mt-5">
        <BudgetCardProject img={[budget]} />
        <FitnessCardProject img={[lastWorkout, logWorkout, dashboard]} />
      </div>
      <div className="row mt-5">
        <PokemonCardProject img={[pokeSearch, pokedex, errorSearch]} />
        <TeamProfileCardProject img={[teamGenerator, htmlGen, htmlFile]} />
      </div>
      <br></br>
    </div>
  );
}

export default EpicProjects;
