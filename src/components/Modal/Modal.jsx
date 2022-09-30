import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalWrapper = document.getElementById('modal');

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();

      return;
    }
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.closeModal} className={css.overlay}>
        <div className={css.modal}>
          <img src={this.props.data.src} alt={this.props.data.tags} />
        </div>
      </div>,
      modalWrapper
    );
  }
}
