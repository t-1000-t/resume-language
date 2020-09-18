import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Page from './Page/Page';

const MODAL_PRINT = document.querySelector('#print-root');

class ModalPrint extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div
        ref={this.printRef}
        role="presentation"
        onClick={this.handlerBackdropClose}
      >
        <div>
          <Page />
          {children}
        </div>
      </div>,
      MODAL_PRINT,
    );
  }
}

export default ModalPrint;
