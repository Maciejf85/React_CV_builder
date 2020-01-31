import React, { Component } from 'react';
import styled from 'styled-components';
import Panel from 'components/molecules/DefaultPanel/defaultPanel';
import PropTypes from 'prop-types';
import { updateCVList } from 'actions';
import { withRouter } from 'react-router-dom';
import MainModal from 'components/molecules/DefaultPanel/MainPageModal';
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import Modal from 'components/organisms/Modal';
import withModal from 'components/hoc/withModal';
import store from 'store';
import { connect } from 'react-redux';

const StyleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 15px);
  /* border: 1px solid red; */
  margin: 15px;
  @media ${({ theme }) => theme.media.small} {
    margin: 15px 0;
  }
  @media ${({ theme }) => theme.media.tablet} {
  }
`;

class CvList extends Component {
  state = {
    requestActive: false,
    cvTitle: 'tytuł CV',
  };

  handleNewCv = () => {
    this.setState({ requestActive: true });
    const { cvTitle } = this.state;
    const userId = sessionStorage.getItem('userID');
    const redir = this.props.history;
    return (
      store.dispatch(updateCVList('add', userId, null, redir, cvTitle)), this.props.handleModal()
    );
  };

  handleCvTitle = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const {
      cvList,
      name,
      nameL,
      caption,
      captionL,
      modal,
      modalVisible,
      handleModal,
      language,
    } = this.props;
    const { requestActive, cvTitle } = this.state;
    const list = cvList.map(item => item);

    return (
      <StyleWrapper>
        <Modal
          className={modal ? 'active' : ''}
          style={modalVisible ? { display: 'block' } : { display: 'none' }}
        >
          <MainModal>
            <header>{language === 'PL' ? 'Tytuł CV' : 'CV title'}</header>
            <section>
              <input
                type="text"
                id="cvTitle"
                value={cvTitle}
                onChange={this.handleCvTitle}
                autoFocus
              />
            </section>
            <footer>
              <PrimaryButton type="button" primary onClick={this.handleNewCv}>
                {language === 'PL' ? 'zapisz' : 'save'}
              </PrimaryButton>
              <PrimaryButton type="button" name="cancel" onClick={handleModal}>
                {language === 'PL' ? 'anuluj' : 'cancel'}
              </PrimaryButton>
            </footer>
          </MainModal>
        </Modal>
        <Panel
          name={language === 'PL' ? name : nameL}
          content={list}
          caption={language === 'PL' ? caption : captionL}
          newCv={handleModal}
          disabled={requestActive}
          language={language}
        />
      </StyleWrapper>
    );
  }
}

CvList.propTypes = {
  cvList: PropTypes.array,
  name: PropTypes.string,
  caption: PropTypes.string,
  modal: PropTypes.bool,
  modalVisible: PropTypes.bool,
  handleModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
CvList.defaultProps = {
  name: '',
  cvList: [],
  caption: '',
  modal: false,
  modalVisible: false,
};

const mapStateToProps = state => ({
  cvList: state.myCv,
  name: state.path.name,
  nameL: state.path.nameL,
  caption: state.path.caption,
  captionL: state.path.captionL,
  language: state.appState.language,
});
export default withModal(withRouter(connect(mapStateToProps)(CvList)));
