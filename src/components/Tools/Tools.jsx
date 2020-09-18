import React from 'react';
import Jump from 'react-reveal/Jump';

import withLocalization from '../../hoc/withLocalization';
import styled from './Tools.module.css';
import ToolsCard from '../ToolsCard/ToolsCard';

const hTool = [styled.hTool];
const liTool = [styled.liTool];
const ulTool = [styled.ulTool];

const Tools = ({ localization }) => (
  <ul>
    <h3 className={hTool}>{localization.localizedContent.abilities.ability}</h3>
    <div className={ulTool}>
      <Jump effect="fadeInUp">
        {localization.localizedContent.tools.map(elem => (
          <li key={elem.id} className={liTool}>
            <ToolsCard
              id={elem.id}
              name={elem.name}
              title={elem.title}
              title2={elem.title2 ? elem.title2 : ``}
              str0={elem.str0}
              str1={elem.str1}
              str2={elem.str2 ? elem.str2 : ``}
              str3={elem.str3 ? elem.str3 : ``}
              str4={elem.str4 ? elem.str4 : ``}
              btnClose={elem.btnClose}
            />
          </li>
        ))}
      </Jump>
    </div>
  </ul>
);

export default withLocalization(Tools);
