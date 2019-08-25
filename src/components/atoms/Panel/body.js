import React, { Component } from 'react';
import { Textarea } from 'components/atoms/Inputs';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  /* border: 1px solid black; */
  padding: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.ms};
  line-height: 25px;
  p {
    cursor: default;
    user-select: none;
  }
`;

class Body extends Component {
  state = {};

  render() {
    const { confidential, edit } = this.props;

    return (
      <StyledWrapper>
        {edit ? (
          <form>
            <Textarea value={confidential} />
          </form>
        ) : (
          <p>{confidential}</p>
        )}
      </StyledWrapper>
    );
  }
}

const mapStateTProps = state => state.confidential;
export default connect(mapStateTProps)(Body);
