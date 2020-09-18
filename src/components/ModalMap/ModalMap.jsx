import React, { Component, createRef } from 'react';

import T from 'prop-types';
import styled from './ModalMap.module.css';
import Map from './Map/Map';

const img = [styled.img];

class ModalMap extends Component {
  static propTypes = {
    isModalOpen: T.bool.isRequired,
    closeModal: T.func.isRequired,
  };

  state = {};

  modalRef = createRef();

  componentDidMount() {}

  render() {
    const { isModalOpen, closeModal } = this.props;
    return (
      <div className={img}>
        {isModalOpen && (
          <Map isModalOpen={isModalOpen} closeModal={closeModal} />
        )}
      </div>
    );
  }
}

export default ModalMap;
