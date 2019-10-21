import React, { Component } from 'react';
import styled from 'styled-components';
import Panel from 'components/molecules/DefaultPanel/defaultPanel';
import { updateCVList } from 'actions';
import { withRouter } from 'react-router-dom';
import MainModal from 'components/molecules/DefaultPanel/MainPageModal'
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import Modal from 'components/organisms/Modal'
import store from 'store';
import { connect } from 'react-redux';

const StyleWrapper = styled.div`
position:relative;
  width: 100%;
  height: calc(100% -15px);
  /* border: 1px solid red; */
  margin: 15px;
`;

class CvList extends Component {
  state = {
    requestActive: false,
    isModal: false,
    isModalVisible: false,
    cvTitle: 'nowe CV'
  };



  handleModal = () => {
    const { isModal } = this.state;
    let modalDisplay;
    let modalClass;

    if (!isModal) {
      modalDisplay = 0;
      modalClass = 150;
    } else {
      modalDisplay = 350;
      modalClass = 0;
    }

    setTimeout(
      () => this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible })),
      modalDisplay,
    );
    setTimeout(() => this.setState(prevState => ({ isModal: !prevState.isModal })), modalClass);
  };

  handleNewCv = () => {
    this.setState({ requestActive: true });
    const { cvTitle } = this.state;
    const userId = sessionStorage.getItem('userID');
    const redir = this.props.history;
    store.dispatch(updateCVList('add', userId, null, redir, cvTitle));
    this.handleModal();
  };


  handleTitle = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCancelModal = () => {
    this.handleModal();
  }

  render() {
    const { cvList, name, caption } = this.props;
    const { requestActive, isModal, isModalVisible, cvTitle } = this.state;
    const list = cvList.map(item => item);


    return (
      <StyleWrapper>
        <Modal
          className={isModal ? 'active' : ''}
          style={isModalVisible ? { display: 'block' } : { display: 'none' }}
        >
          <MainModal>
            <header>Tytuł CV</header>
            <section>
              <input type='text' name='cvTitle' value={cvTitle} onChange={this.handleTitle} autoFocus />
            </section>
            <footer>
              <PrimaryButton type='button' primary onClick={this.handleNewCv} >zapisz</PrimaryButton>
              <PrimaryButton type='button' name='cancel' onClick={this.handleCancelModal}>anuluj</PrimaryButton></footer>

          </MainModal>
        </Modal>
        <Panel
          name={name}
          content={list}
          caption={caption}
          newCv={this.handleModal}
          disabled={requestActive}
        />
      </StyleWrapper>
    );
  }
}

const mapStateToProps = state => ({
  cvList: state.myCv,
  name: state.path.name,
  caption: state.path.caption,
});
export default withRouter(connect(mapStateToProps)(CvList));
