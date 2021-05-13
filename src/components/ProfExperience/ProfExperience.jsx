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
const liBodyTitle = [styled.liBodyTitle];

const ProfExperience = ({ localization }) => {
  const { profExperience } = localization.localizedContent.abilities;
  const {
    firm,
    special,
    spentTime,
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
    softSkill,
    nameSoftSkill
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
          <ul className={ulBody}>
            {taskExecution1 && <li className={liBody}>{taskExecution1}</li>}
            {taskExecution2 && <li className={liBody}>{taskExecution2}</li>}
            {taskExecution3 && <li className={liBody}>{taskExecution3}</li>}
            {taskExecution4 && <li className={liBody}>{taskExecution4}</li>}
            {taskExecution5 && <li className={liBody}>{taskExecution5}</li>}
            {taskExecution6 && <li className={liBody}>{taskExecution6}</li>}
            {taskExecution7 && <li className={liBody}>{taskExecution7}</li>}
            {taskExecution8 && <li className={liBody}>{taskExecution8}</li>}
            {taskExecution9 && <li className={liBody}>{taskExecution9}</li>}
            {taskExecution10 && <li className={liBody}>{taskExecution10}</li>}
            {taskExecution11 && <li className={liBody}>{taskExecution11}</li>}
            {taskExecution12 && <li className={liBody}>{taskExecution12}</li>}
            {taskExecution13 && <li className={liBody}>{taskExecution13}</li>}
            {softSkill && (
              <li className={liBody}>
                {softSkill}
                {nameSoftSkill}
              </li>
            )}
            {moreAbout && (
              <li>
                <p className={liBodyTitle}>{moreAbout}</p>
              </li>
            )}
          </ul>
        </div>
        <ProfBtnExtends />
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
