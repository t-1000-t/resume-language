import React, { Component } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import T from 'prop-types';
import shortid from 'shortid';
import withLocalization from '../../hoc/withLocalization';
import styled from './ProfBtnExtends.module.css';

const btn = [styled.btn];
const btnMoreLoc = [styled.btnMoreLoc];
const btnToggleText = [styled.btnToggleText];
const textLinkTog = [styled.textLinkTog];
const scrumText = [styled.scrumText];

class ProfBtnExtends extends Component {
  static propTypes = {
    softSkill: T.string.isRequired,
    scrum: T.string.isRequired,
    moreAbout: T.string.isRequired,
    nameSkills: T.string.isRequired,
    proj0: T.string.isRequired,
    proj1: T.string.isRequired,
    proj2: T.string.isRequired,
    proj3: T.string.isRequired,
    proj4: T.string.isRequired,
    proj5: T.string.isRequired,
    proj6: T.string.isRequired,
    projectNames: T.string.isRequired,
    projWork1: T.string.isRequired,
    projWork2: T.string.isRequired,
  };

  state = {
    isOpen: false,
  };

  componentDidMount() {
    const btnClick = localStorage.getItem('isOpen');

    if (btnClick) {
      this.setState({ isOpen: JSON.parse(btnClick) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.state;
    if (prevState.isOpen !== isOpen) {
      localStorage.setItem('isOpen', JSON.stringify(isOpen));
    }
  }

  toggle = e => {
    const { abilities } = this.props.localization.localizedContent;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));

    if (
      e.currentTarget.innerText === 'Развернуть' ||
      e.currentTarget.innerText === 'Expand' ||
      e.currentTarget.innerText === 'Розгонути'
    ) {
      toast(`${abilities.moreinfo}`, {
        position: toast.POSITION.TOP_CENTER,
        className: css({
          background: 'rgb(172, 236, 217)',
          color: 'rgb(117, 117, 117)',
        }),
        bodyClassName: css({
          fontSize: '16px',
        }),
        progressClassName: css({
          background:
            'repeating-radial-gradient(circle at right, #b3c066 0, #40baf3, #2378a0 100%)',
        }),
      });
    }
  };

  render() {
    const {
      softSkill,
      scrum,
      moreAbout,
      nameSkills,
      proj0,
      proj1,
      proj2,
      proj3,
      proj4,
      proj5,
      proj6,
      projectNames,
      projWork1,
      projWork2,
    } = this.props;
    const { abilities } = this.props.localization.localizedContent;
    const { isOpen } = this.state;

    return (
      <div>
        <div className={btnMoreLoc}>
          <button className={btn} type="button" onClick={this.toggle}>
            {isOpen ? <>{abilities.collapse}</> : <>{abilities.expand}</>}
          </button>
        </div>
        <ToastContainer autoClose={2500} transition={Zoom} />
        {isOpen && (
          <>
            <p>
              <b>
                {softSkill}
                <span className={scrumText}>{scrum}</span>
              </b>
            </p>
            <p>
              <b>{nameSkills}</b>
            </p>
            <p>
              <b>{moreAbout}</b>
            </p>
            <ul key={shortid.generate()} className={btnToggleText}>
              <a href="https://craft-house.netlify.app">
                <li className={textLinkTog}>{proj0}</li>
              </a>
              <a href="https://reader-sheets-on-react.netlify.app">
                <li className={textLinkTog}>{proj6}</li>
              </a>
              <a href="https://budget-planner-on-react.netlify.app/">
                <li className={textLinkTog}>{proj5}</li>
              </a>
              <a href="https://t-1000-t-goit-react-hw-06-phonebook.netlify.app/">
                <li className={textLinkTog}>{proj4}</li>
              </a>
              <a href="https://finder-images-on-react.netlify.app">
                <li className={textLinkTog}>{proj3}</li>
              </a>
              <a href="https://t1001t-goit-react-hw-04-movies.netlify.app">
                <li className={textLinkTog}>{proj1}</li>
              </a>
              <a href="https://t-1000-t.github.io/Responsive-web/">
                <li className={textLinkTog}>{proj2}</li>
              </a>
              <a href="https://googman.site">
                <li className={textLinkTog}>{projWork1}</li>
              </a>
            </ul>
            <p>
              <b>{projectNames}</b>
            </p>
            <ul key={shortid.generate()} className={btnToggleText}>
              <a href="https://integral-shop.netlify.app">
                <li className={textLinkTog}>{projWork2}</li>
              </a>
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default withLocalization(ProfBtnExtends);
