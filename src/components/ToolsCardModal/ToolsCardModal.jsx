import React, { Component, createRef } from "react";
import { createPortal } from "react-dom";
import Bounce from "react-reveal/Bounce";
import T from "prop-types";
import styled from "./ToolsCardModal.module.css";

const backdrop = [styled.backdrop];
const modal = [styled.modal];
const btn = [styled.btn];

const MODAL_TOOLS_ROOT = document.querySelector("#modal-tools-root");

class ToolsCardModal extends Component {
  static propTypes = {
    title: T.string.isRequired,
    title2: T.string.isRequired,
    name: T.string.isRequired,
    str0: T.string.isRequired,
    str1: T.string.isRequired,
    str2: T.string.isRequired,
    str3: T.string.isRequired,
    str4: T.string.isRequired,
    onClose: T.func.isRequired,
  };

  state = {};

  toolsRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKey);
  }

  handleKey = (e) => {
    if (e.code !== "Escape") return;
    this.props.onClose();
  };

  handlerBackdropClose = (e) => {
    if (this.toolsRef.current && e.target !== this.toolsRef.current) {
      return;
    }
    this.props.onClose();
  };

  render() {
    const {
      children,
      title,
      title2,
      name,
      str0,
      str1,
      str2,
      str3,
      str4,
      btnClose,
      onClose,
    } = this.props;
    return createPortal(
      <div
        className={backdrop}
        ref={this.toolsRef}
        role="presentation"
        onClick={this.handlerBackdropClose}
      >
        <div className={modal}>
          <button type="button" onClick={onClose} className={btn}>
            {btnClose}
          </button>
          <h2>{name}</h2>
          <Bounce right>
            <h6>
              <b>{title}</b>
            </h6>
            <p>{str0}</p>
            <p>{str1}</p>
            <p>{str2}</p>
            <p>{str3}</p>
            <h6>{title2 && <b>{title2}</b>}</h6>
            <p>{str4}</p>
          </Bounce>
          {children}
        </div>
      </div>,
      MODAL_TOOLS_ROOT
    );
  }
}

export default ToolsCardModal;
