import React from 'react';

import Icon from '@iconify/react';
import printOutline from '@iconify/icons-ion/print-outline';
import shortid from 'shortid';
import withLocalization from '../../hoc/withLocalization';
import ProfBtnExtends from '../ProfBtnExtends/ProfBtnExtends';
import styled from './ProfExperience.module.css';
import {NavLink} from "react-router-dom";

const profExperience = [styled.profExperience];
const liBody = [styled.liBody];
const ulBody = [styled.ulBody];
const divBody = [styled.divBody];
const divB = [styled.divB];
const printLink = [styled.print_link];
const print = [styled.print];
const printBox = [styled.printBox];

const ProfExperience = ({localization}) => (
    <div>
        <h4 className={profExperience}>
            {localization.localizedContent.abilities.profexperiens}
        </h4>
            <div key={shortid.generate()} className={divBody}>
                <div className={divB}>
                    <b>{localization.localizedContent.notes.firm}</b>
                </div>

                <div className={divB}>
                    <b>{localization.localizedContent.notes.spicial}</b>
                </div>

                <div className={divB}>
                    <b>{localization.localizedContent.notes.spenttime}</b>
                </div>
                <div>
                    <p>
                        <b>{localization.localizedContent.notes.morePractice}</b>
                    </p>

                    <ul className={ulBody}>
                        <li className={liBody}>{localization.localizedContent.notes.taskexecution1}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution2}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution3}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution4}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution5}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution6}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution7}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution8}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution9}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution10}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution11}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution12}</li>

                        <li className={liBody}>{localization.localizedContent.notes.taskexecution13}</li>

                        <li className={liBody}>{localization.localizedContent.notes.moreAbout}</li>

                        <li className={liBody}>{localization.localizedContent.notes.realpractical}</li>

                        <li className={liBody}>{localization.localizedContent.notes.studytech}</li>

                        <li className={liBody}>{localization.localizedContent.notes.fastlearn}</li>

                    </ul>
                </div>
                <ProfBtnExtends
                    moreAbout={localization.localizedContent.notes.moreAbout}
                    nameSkills={localization.localizedContent.notes.nameSkills}
                    softSkill={localization.localizedContent.notes.softSkill}
                    scrum={localization.localizedContent.notes.scrum}
                    proj0={localization.localizedContent.notes.proj0}
                    proj1={localization.localizedContent.notes.proj1}
                    proj2={localization.localizedContent.notes.proj2}
                    proj3={localization.localizedContent.notes.proj3}
                    proj4={localization.localizedContent.notes.proj4}
                    proj5={localization.localizedContent.notes.proj5}
                    proj6={localization.localizedContent.notes.proj6}
                    proj7={localization.localizedContent.notes.proj7}
                    proj8={localization.localizedContent.notes.proj8}
                    proj9={localization.localizedContent.notes.proj9}
                    proj10={localization.localizedContent.notes.proj10}
                    proj11={localization.localizedContent.notes.proj11}
                    projectNames={localization.localizedContent.notes.projectNames}
                    projWork1={localization.localizedContent.notes.projWork1}
                    projWork2={localization.localizedContent.notes.projWork2}
                    realpractical={localization.localizedContent.notes.realpractical}
                    anyframeworks={localization.localizedContent.notes.anyframeworks}
                    studytech={localization.localizedContent.notes.studytech}
                    fastlearn={localization.localizedContent.notes.fastlearn}
                />
            </div>
        )}

        <div className={printBox}>
            <NavLink to="/print">
                <div className={printLink}>
                    <Icon icon={printOutline} width="30px" className={print}/>
                </div>
            </NavLink>
        </div>
    </div>
);

export default withLocalization(ProfExperience);
