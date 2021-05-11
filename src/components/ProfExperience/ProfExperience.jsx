import React from "react";

import Icon from "@iconify/react";
import printOutline from "@iconify/icons-ion/print-outline";
import shortid from "shortid";
import withLocalization from "../../hoc/withLocalization";
import ProfBtnExtends from "../ProfBtnExtends/ProfBtnExtends";
import styled from "./ProfExperience.module.css";
import { NavLink } from "react-router-dom";

const profExperienceH4 = [styled.profExperience];
const liBody = [styled.liBody];
const ulBody = [styled.ulBody];
const divBody = [styled.divBody];
const divB = [styled.divB];
const printLink = [styled.print_link];
const print = [styled.print];
const printBox = [styled.printBox];

const ProfExperience = ({ localization }) => {
  const { profExperience } = localization.localizedContent.abilities;
  const {
    firm,
    special,
    spentTime,
    morePractice,
    taskExecution1,
    taskExecution2,
    taskExecution3,
    taskExecution4,
    taskExecution5,
    taskExecution6,
    taskExecution7,
    taskExecution8,
    taskExecution9,
    taskExecution10,
    taskExecution11,
    taskExecution12,
    taskExecution13,
    moreAbout,
    projects,
    projectSiteName,
    tasks,
    technologies,
    responsibilities,
    nameSkills,
    softSkill,
    progress,
    scrum,
    proj0,
    proj1,
    proj2,
    proj3,
    proj4,
    proj5,
    proj6,
    proj7,
    proj8,
    proj9,
    proj10,
    proj11,
    projectNames,
    projWork1,
    projWork2
  } = localization.localizedContent.notes;
  return (
    <div>
      <h4 className={profExperienceH4}>{profExperience}</h4>
      <div key={shortid.generate()} className={divBody}>
        <div className={divB}>
          <b>{firm}</b>
        </div>

        <div className={divB}>
          <b>{special}</b>
        </div>

        <div className={divB}>
          <b>{spentTime}</b>
        </div>
        <div>
          <p>
            <b>{morePractice}</b>
          </p>

          <ul className={ulBody}>
            <li className={liBody}>{taskExecution1}</li>
            <li className={liBody}>{taskExecution2}</li>
            <li className={liBody}>{taskExecution3}</li>
            <li className={liBody}>{taskExecution4}</li>
            <li className={liBody}>{taskExecution5}</li>
            <li className={liBody}>{taskExecution6}</li>
            <li className={liBody}>{taskExecution7}</li>
            <li className={liBody}>{taskExecution8}</li>
            <li className={liBody}>{taskExecution9}</li>
            <li className={liBody}>{taskExecution10}</li>
            <li className={liBody}>{taskExecution11}</li>
            <li className={liBody}>{taskExecution12}</li>
            <li className={liBody}>{taskExecution13}</li>
            <li className={liBody}>
              <b>{moreAbout}</b>
            </li>
            <li className={liBody}>
              <i>{projects}</i>
            </li>
            <li className={liBody}>
              <b>{projectSiteName}</b>
              <a href="https://intshop.store"> intshop.store</a>
            </li>
            <li className={liBody}>{tasks}</li>
            <li className={liBody}>{technologies}</li>
            <li className={liBody}>
              <div>{responsibilities}</div>
              <div>{progress}</div>
            </li>
          </ul>
        </div>
        <ProfBtnExtends
          moreAbout={moreAbout}
          nameSkills={nameSkills}
          softSkill={softSkill}
          scrum={scrum}
          proj0={proj0}
          proj1={proj1}
          proj2={proj2}
          proj3={proj3}
          proj4={proj4}
          proj5={proj5}
          proj6={proj6}
          proj7={proj7}
          proj8={proj8}
          proj9={proj9}
          proj10={proj10}
          proj11={proj11}
          projectNames={projectNames}
          projWork1={projWork1}
          projWork2={projWork2}
        />
      </div>

      <div className={printBox}>
        <NavLink to="/print">
          <div className={printLink}>
            <Icon icon={printOutline} width="30px" className={print} />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default withLocalization(ProfExperience);
