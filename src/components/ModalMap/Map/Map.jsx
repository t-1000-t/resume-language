import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import Zoom from 'react-reveal/Zoom';
import PropTypes from 'prop-types';
import styled from './Map.module.css';

const backdrop = [styled.backdrop];

const MODAL_ROOT = document.querySelector('#modal-root');

export default class Map extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  state = {};

  mapRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.closeModal();
  };

  handleBackDropClick = e => {
    const { current } = this.mapRef;
    if (current && e.target !== current) {
      return;
    }

    this.props.closeModal();
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div
        className={backdrop}
        ref={this.mapRef}
        onClick={this.handleBackDropClick}
        role="presentation"
      >
        <div>
          <Zoom>
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d634.7600624834251!2d30.620691129269105!3d50.47759439871746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d50.4776178!2d30.621101699999997!4m3!3m2!1d50.4775974!2d30.621114!5e0!3m2!1sen!2sua!4v1597760623379!5m2!1sen!2sua"
              width="320"
              height="380"
            />
          </Zoom>
          {children}
        </div>
      </div>,
      MODAL_ROOT,
    );
  }
}
