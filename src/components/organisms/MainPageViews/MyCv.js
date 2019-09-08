import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Panel from 'components/molecules/DefaultPanel/defaultPanel';
import path from '../../../path';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  /* border: 1px solid red; */
  margin: 15px;
`;

class cvList extends Component {
  state = {
    id: '',
    token: '',
    date: '',
  };

  componentDidMount() {
    axios
      .post(`${path.cors}login.php`, {
        text: 'fialek85@gmail.com',
        password: '123',
      })
      .then(response => {
        this.handleGetData(response);
      })
      .catch(error => {
        console.log('error :', error);
      });
  }

  handleGetData = response => {
    const { data } = response;
    this.setState({
      id: data.id,
      token: data.token,
      date: data.date,
    });
  };

  render() {
    const { id, token, date } = this.state;
    return (
      <StyleWrapper>
        <Panel id={id} token={token} date={date} />
      </StyleWrapper>
    );
  }
}
export default cvList;
