import React from 'react';
import Icon from '@iconify/react';
import socialCodepenOutline from '@iconify/icons-ion/social-codepen-outline';
import socialTwitterOutline from '@iconify/icons-ion/social-twitter-outline';
// import socialInstagramOutline from '@iconify/icons-ion/social-instagram-outline';
import socialLinkedinOutline from '@iconify/icons-ion/social-linkedin-outline';
import socialSkypeOutline from '@iconify/icons-ion/social-skype-outline';
import socialGithubOutline from '@iconify/icons-ion/social-github-outline';
import scGooglePlus from '@iconify/icons-ei/sc-google-plus';
import scFacebook from '@iconify/icons-ei/sc-facebook';
import scTelegram from '@iconify/icons-ei/sc-telegram';
import styled from './ListIconHeader.module.css';

const listUl = [styled.listUl];
const elemLi = [styled.elemLi];
const menuLink = [styled.menu_link];
const tel = [styled.tel];
const goog = [styled.goog];
const git = [styled.git];
const code = [styled.code];
const twit = [styled.twit];
const sky = [styled.sky];
const lin = [styled.lin];
const face = [styled.face];

const ListIconHeader = () => (
  <div className={listUl}>
    <ul>
      <li className={elemLi}>
        <a href="https://t.me/joinchat/EOSjchV97KNGq5_FZ4ca5w">
          <Icon
            icon={scTelegram}
            width="30px"
            className={`${tel} ${menuLink}`}
          />
        </a>
      </li>
      <li className={elemLi}>
        <a href="mailto:goognya@gmail.com">
          <Icon
            icon={scGooglePlus}
            width="30px"
            className={`${goog} ${menuLink}`}
          />
        </a>
      </li>
      <li className={elemLi}>
        <a href="https://github.com/t-1000-t">
          <Icon
            icon={socialGithubOutline}
            width="30px"
            className={`${git} ${menuLink}`}
          />
        </a>
      </li>
      <li className={elemLi}>
        <a href="https://codepen.io/t-1000-t">
          <Icon
            icon={socialCodepenOutline}
            width="30px"
            className={`${code} ${menuLink}`}
          />
        </a>
      </li>
      <li className={elemLi}>
        <a href="https://twitter.com/ItVladlen">
          <Icon
            icon={socialTwitterOutline}
            width="30px"
            className={`${twit} ${menuLink}`}
          />
        </a>
      </li>
      <li className={elemLi}>
        <a href="https://join.skype.com/invite/eNby2R35BJ0u">
          <Icon
            icon={socialSkypeOutline}
            width="30px"
            className={`${sky} ${menuLink}`}
          />
        </a>
      </li>
      <li className={elemLi}>
        <a href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%BB%D0%B5%D0%BD-%D0%B1%D1%80%D0%B0%D0%BD%D0%B5%D1%86%D0%BA%D0%B8%D0%B9-2b7645163/">
          <Icon
            icon={socialLinkedinOutline}
            width="30px"
            className={`${lin} ${menuLink}`}
          />
        </a>
      </li>
      <li className={elemLi}>
        <a href="https://www.facebook.com/vladlen.branetskiy">
          <Icon
            icon={scFacebook}
            width="30px"
            className={`${face} ${menuLink}`}
          />
        </a>
      </li>
    </ul>
  </div>
);

export default ListIconHeader;
