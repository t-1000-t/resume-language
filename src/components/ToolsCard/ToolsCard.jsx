import React, { Component } from "react";
import T from "prop-types";
import ToolsCardModal from "../ToolsCardModal/ToolsCardModal";
import styled from "./ToolsCard.module.css";

const btn = [styled.btn];
const toolsName = [styled.toolsName];
const nameBtn = [styled.nameBtn];

class ToolsCard extends Component {
  static propTypes = {
    id: T.number.isRequired,
    name: T.string.isRequired,
    title: T.string.isRequired,
    title2: T.string.isRequired,
    str0: T.string.isRequired,
    str1: T.string.isRequired,
    str2: T.string.isRequired,
    str3: T.string.isRequired,
    str4: T.string.isRequired,
  };

  state = {
    isModalTool: false,
  };

  closeModal = () =>
    this.setState({
      isModalTool: false,
    });

  openModal = () =>
    this.setState({
      isModalTool: true,
    });

  render() {
    const { isModalTool } = this.state;
    const {
      id,
      name,
      title,
      title2,
      str0,
      str1,
      str2,
      str3,
      str4,
      btnClose,
    } = this.props;

    return (
      <div key={id} className={toolsName}>
        <button onClick={this.openModal} type="button" className={btn}>
          <div className={nameBtn}>{name}</div>
        </button>

        {isModalTool && (
          <>
            <ToolsCardModal
              id={id}
              name={name}
              title={title}
              title2={title2}
              str0={str0}
              str1={str1}
              str2={str2}
              str3={str3}
              str4={str4}
              btnClose={btnClose}
              onClose={this.closeModal}
            />
          </>
        )}
      </div>
    );
  }
}

export default ToolsCard;
