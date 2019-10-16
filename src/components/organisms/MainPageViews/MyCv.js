import React, { Component } from 'react';
import styled from 'styled-components';
import Panel from 'components/molecules/DefaultPanel/defaultPanel';
import { updateCVList } from 'actions';
import store from 'store';
import { connect } from 'react-redux';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  /* border: 1px solid red; */
  margin: 15px;
`;

class CvList extends Component {
  handleNewCv = () => {
    const userId = sessionStorage.getItem('userID');
    store.dispatch(updateCVList('add', userId))
  }

  render() {
    const { cvList, name, caption } = this.props;
    const list = cvList.map(item => item);


    return (
      <StyleWrapper>
        <Panel name={name} content={list} caption={caption} newCv={this.handleNewCv} />
      </StyleWrapper>
    );
  }
};

const mapStateToProps = state => ({ cvList: state.myCv, name: state.path.name, caption: state.path.caption })
export default connect(mapStateToProps)(CvList);
