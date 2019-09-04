import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  min-width: 300px;
  min-height: 100px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};

  header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    padding: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.ms};
    font-weight: ${({ theme }) => theme.font.bold};
    background: ${({ theme }) => theme.colors.lightGrey};
  }
  section {
    width: 100%;
    /* border: 1px solid black; */
    padding: 10px 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.ms};
    line-height: 25px;
    p {
      font-size: ${({ theme }) => theme.fontSize.ms};
    }
  }
`;

const defaultPanel = props => {
  const { id, token, date, title } = props;
  return (
    <StyledWrapper>
      <header>{title}</header>
      <section>
        <p>{id}</p>
        <p>{token}</p>
        <p>{date}</p>
      </section>
    </StyledWrapper>
  );
};

defaultPanel.propTypes = {
  id: PropTypes.string,
  token: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};
defaultPanel.defaultProps = {
  id: 'no id',
  token: 'no token',
  date: 'no date',
  title: 'panel title',
};

export default defaultPanel;
