import React, { Component } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "glamor";
import T from "prop-types";
// import shortid from "shortid";
import withLocalization from "../../hoc/withLocalization";
import styled from "./ProfBtnExtends.module.css";

const btn = [styled.btn];
const btnMoreLoc = [styled.btnMoreLoc];
const divListProd = [styled.divListProd];
const divListProd2 = [styled.divListProd2];
const wrapperListProd = [styled.wrapperListProd];
const liBody = [styled.liBody];
const ulBody = [styled.ulBody];

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
    projWork2: T.string.isRequired
  };

  state = {
    isOpen: false
  };

  componentDidMount() {
    const btnClick = localStorage.getItem("isOpen");

    if (btnClick) {
      this.setState({ isOpen: JSON.parse(btnClick) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.state;
    if (prevState.isOpen !== isOpen) {
      localStorage.setItem("isOpen", JSON.stringify(isOpen));
    }
  }

  toggle = e => {
    console.log(e.target);
    const { abilities } = this.props.localization.localizedContent;
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));

    if (
      e.currentTarget.innerText === "Развернуть" ||
      e.currentTarget.innerText === "Expand" ||
      e.currentTarget.innerText === "Розгонути"
    ) {
      toast(`${abilities.moreInfo}`, {
        position: toast.POSITION.TOP_CENTER,
        className: css({
          background: "rgb(172, 236, 217)",
          color: "rgb(117, 117, 117)"
        }),
        bodyClassName: css({
          fontSize: "16px"
        }),
        progressClassName: css({
          background:
            "repeating-radial-gradient(circle at right, #b3c066 0, #40baf3, #2378a0 100%)"
        })
      });
    }
  };

  render() {
    // const {} = this.props;
    const { abilities } = this.props.localization.localizedContent;
    const { items } = this.props.localization.localizedContent;
    const { myProjNoComm } = this.props.localization.localizedContent;
    const { projects, myPracticalSite } =
      this.props.localization.localizedContent.notes;
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
          <div className={wrapperListProd}>
            <div className={divListProd}>
              <i>{projects}</i>
            </div>
            {items &&
              items.map(el => (
                <ul className={ulBody}>
                  <li className={liBody}>
                    <b>{el.projectSiteName} </b>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={el.linkInProject}
                    >
                      {el.linkName}
                    </a>
                  </li>
                  <li className={liBody}>
                    <i>{el.taskName}</i>
                    {`${el.tasks}`}
                  </li>
                  <li className={liBody}>
                    <i>{el.technologiesName}</i>
                    {`${el.technologies}`}
                  </li>
                  <li className={liBody}>
                    <i>{el.responsibilitiesName}</i>
                    {`${el.responsibilities}`}
                    {el.progress && <div>{el.progress}</div>}
                  </li>
                </ul>
              ))}
            <div className={divListProd2}>
              <i>{myPracticalSite}</i>
            </div>
            {myProjNoComm &&
              myProjNoComm.map(el => (
                <ul className={ulBody}>
                  <li className={liBody}>
                    <b>{el.projectSiteName} </b>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={el.linkInProject}
                    >
                      {el.linkName}
                    </a>
                  </li>
                  <li className={liBody}>
                    <i>{el.taskName}</i>
                    {`${el.tasks}`}
                  </li>
                  <li className={liBody}>
                    <i>{el.technologiesName}</i>
                    {`${el.technologies}`}
                  </li>
                  <li className={liBody}>
                    <i>{el.responsibilitiesName}</i>
                    {`${el.responsibilities}`}
                    {el.progress && <div>{el.progress}</div>}
                  </li>
                </ul>
              ))}
          </div>
        )}
      </div>
    );
  }
}

export default withLocalization(ProfBtnExtends);
