import React, { Component } from 'react';
import styled from 'styled-components';
import Panel from 'components/molecules/DefaultPanel/defaultPanel';
import { updateCVList } from 'actions';
import { withRouter } from 'react-router-dom';
import MainModal from 'components/molecules/DefaultPanel/MainPageModal'
import PrimaryButton from 'components/atoms/Buttons/PrimaryButton';
import Modal from 'components/organisms/Modal'
import withModal from 'components/hoc/withModal'
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
    cvTitle: 'nowe CV'
  };



  handleNewCv = () => {
    this.setState({ requestActive: true });
    const { cvTitle } = this.state;
    const userId = sessionStorage.getItem('userID');
    const redir = this.props.history;
    store.dispatch(updateCVList('add', userId, null, redir, cvTitle));
    this.props.handleModal();
  };


  handleTitle = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { cvList, name, caption, modal, modalVisible, handleModal } = this.props;
    const { requestActive, cvTitle } = this.state;
    const list = cvList.map(item => item);


    return (
      <StyleWrapper>
        <Modal
          className={modal ? 'active' : ''}
          style={modalVisible ? { display: 'block' } : { display: 'none' }}
        >
          <MainModal >
            <header>Tytuł CV</header>
            <section>
              <input type='text' name='cvTitle' value={cvTitle} onChange={this.handleTitle} />
            </section>
            <footer>
              <PrimaryButton type='button' primary onClick={this.handleNewCv}>zapisz</PrimaryButton>
              <PrimaryButton type='button' name='cancel' onClick={handleModal}>anuluj</PrimaryButton></footer>

          </MainModal>
        </Modal >
        <Panel
          name={name}
          content={list}
          caption={caption}
          newCv={handleModal}
          disabled={requestActive}
        />
      </StyleWrapper >
    );
  }
}

const mapStateToProps = state => ({
  cvList: state.myCv,
  name: state.path.name,
  caption: state.path.caption,
});
export default withModal(withRouter(connect(mapStateToProps)(CvList)));
