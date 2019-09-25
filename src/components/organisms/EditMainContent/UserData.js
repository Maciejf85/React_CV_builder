import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  width: 100%;
  background: #333;
  color: white;
`;

class UserData extends Component {
  componentDidMount() {
    console.log('UserData did mount');
  }

  render() {
    const { id, name, surname } = this.props;
    return (
      <StyledWrapper>
        <div>{name}</div>
        <div>{id}</div>
        <div>{surname}</div>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = state => state.myCv[0];
export default connect(mapStateToProps)(UserData);
