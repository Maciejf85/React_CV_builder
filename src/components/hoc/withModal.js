import React, { Component } from 'react';

const withModal = WrappedComponent => {
  return class WithModal extends Component {
    state = {
      isModal: false,
      isModalVisible: false,
    };

    handleModal = () => {
      const { isModal } = this.state;
      let modalDisplay;
      let modalClass;

      if (!isModal) {
        modalDisplay = 0;
        modalClass = 450;
      } else {
        modalDisplay = 400;
        modalClass = 0;
      }

      setTimeout(
        () => this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible })),
        modalDisplay,
      );
      setTimeout(() => this.setState(prevState => ({ isModal: !prevState.isModal })), modalClass);
    };

    render() {
      const { isModal, isModalVisible } = this.state;
      return (
        <WrappedComponent
          modal={isModal}
          modalVisible={isModalVisible}
          handleModal={this.handleModal}
        />
      );
    }
  };
};

export default withModal;
