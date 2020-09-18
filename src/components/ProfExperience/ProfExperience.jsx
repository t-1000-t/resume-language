import React from 'react';

import Icon from '@iconify/react';
import printOutline from '@iconify/icons-ion/print-outline';
import shortid from 'shortid';
import withLocalization from '../../hoc/withLocalization';
import ProfBtnExtends from '../ProfBtnExtends/ProfBtnExtends';
import styled from './ProfExperience.module.css';

const profExperience = [styled.profExperience];
const liBody = [styled.liBody];
const ulBody = [styled.ulBody];
const divBody = [styled.divBody];
const divB = [styled.divB];
const printLink = [styled.print_link];
const print = [styled.print];
const printBox = [styled.printBox];

const ProfExperience = ({ localization }) => (
  <div>
    <h4 className={profExperience}>
      {localization.localizedContent.abilities.profexperiens}
    </h4>

    {localization.localizedContent.notes.map(elem => (
      <div key={shortid.generate()} className={divBody}>
        <div className={divB}>
          <b>{elem.firm}</b>
        </div>

        <div className={divB}>
          <b>{elem.spicial}</b>
        </div>

        <div className={divB}>
          <b>{elem.spenttime}</b>
        </div>
        <div>
          <p>
            <b>{elem.morePractice}</b>
          </p>

          <ul className={ulBody}>
            <li className={liBody}>{elem.taskexecution1}</li>

            <li className={liBody}>{elem.taskexecution2}</li>

            <li className={liBody}>{elem.taskexecution3}</li>

            <li className={liBody}>{elem.taskexecution4}</li>

            <li className={liBody}>{elem.taskexecution5}</li>

            <li className={liBody}>{elem.taskexecution6}</li>

            <li className={liBody}>{elem.taskexecution7}</li>

            <li className={liBody}>{elem.taskexecution8}</li>

            <li className={liBody}>{elem.taskexecution9}</li>

            <li className={liBody}>{elem.taskexecution10}</li>

            <li className={liBody}>{elem.taskexecution11}</li>

            <li className={liBody}>{elem.taskexecution12}</li>

            <li className={liBody}>{elem.taskexecution13}</li>
          </ul>
        </div>
        <ProfBtnExtends
          moreAbout={elem.moreAbout}
          nameSkills={elem.nameSkills}
          softSkill={elem.softSkill}
          scrum={elem.scrum}
          proj0={elem.proj0}
          proj1={elem.proj1}
          proj2={elem.proj2}
          proj3={elem.proj3}
          proj4={elem.proj4}
          proj5={elem.proj5}
          proj6={elem.proj6}
          proj7={elem.proj7}
          proj8={elem.proj8}
          proj9={elem.proj9}
          proj10={elem.proj10}
          proj11={elem.proj11}
          projectNames={elem.projectNames}
          projWork1={elem.projWork1}
          projWork2={elem.projWork2}
        />
      </div>
    ))}

    <div className={printBox}>
      <a href="/printresume">
        <div className={printLink}>
          <Icon icon={printOutline} width="30px" className={print} />
        </div>
      </a>
    </div>
  </div>
);

export default withLocalization(ProfExperience);
