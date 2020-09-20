import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Page from './Page/Page';

const MODAL_PRINT = document.querySelector('#print-root');

class ModalPrint extends Component {


  render() {
    const { children } = this.props;
    return createPortal(
      <div
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
