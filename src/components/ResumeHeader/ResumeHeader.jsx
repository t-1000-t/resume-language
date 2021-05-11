import React, { Component } from "react";
import Icon from "@iconify/react";
import locationSharp from "@iconify/icons-ion/location-sharp";
import { Spring } from "react-spring";

import withLocalization from "../../hoc/withLocalization";
import ModalMap from "../ModalMap/ModalMap";
import ListIconHeader from "../ListIconHeader/ListIconHeader";
import Tools from "../Tools/Tools";
import ProfExperience from "../ProfExperience/ProfExperience";
import styled from "./ResumeHeader.module.css";

const resumeHeader = [styled.resumeHeader];
const relative = [styled.relative];
const localIcon = [styled.localIcon];
const locSharp = [styled.locSharp];
const imgSvg = [styled.imgSvg];
const tools = [styled.tools];
const section = [styled.section];

class ResumeHeader extends Component {
  state = {
    isModalOpen: false,
    isMatherLand: false
  };

  componentDidMount() {
    this.toggleSvg();
  }

  toggleSvg = () => {
    const { isMatherLand } = this.state;
    this.setState({
      isMatherLand: !isMatherLand
    });
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    const { locales, changeLocale, currentLocale, localizedContent } =
      this.props.localization;
    const { author } = localizedContent;
    return (
      <div>
        <section className={styled.selectorRH}>
          {locales.map(locale => (
            <button
              key={locale}
              onClick={() => changeLocale(locale)}
              className={
                locale === currentLocale ? styled.activeRH : styled.buttonRH
              }
            >
              {locale}
            </button>
          ))}
        </section>
        <div className={`${resumeHeader} ${relative}`}>
          <h2>
            <span>{author.firstname} </span>
            {author.lastname}
          </h2>
          <h3>{author.specialisation}</h3>
          <div className={localIcon}>
            <h4>{author.city}</h4>
            <Icon
              className={locSharp}
              onClick={this.openModal}
              icon={locationSharp}
              width="25px"
            />
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 0, duration: 6000 }}
            >
              {props => (
                <div>
                  <img
                    style={props}
                    className={imgSvg}
                    src="https://svgshare.com/i/Gts.svg"
                    alt="Motherland standing in kiev"
                  />
                </div>
              )}
            </Spring>
          </div>

          <div>
            <ModalMap isModalOpen={isModalOpen} closeModal={this.closeModal} />
            <ListIconHeader />
          </div>
        </div>
        <div className={tools}>
          <div className={section}>
            <Tools />
          </div>
          <div className={section}>
            <ProfExperience />
          </div>
        </div>
      </div>
    );
  }
}

export default withLocalization(ResumeHeader);
