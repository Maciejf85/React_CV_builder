import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OptionPanel from 'components/atoms/Buttons/OptionPanel';
import { formatDate } from 'functions/index';

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 5px;
  width: 100%;
  padding: 5px 0;
  margin-bottom: 10px;
  align-items: start;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.ms};
  color: ${({ theme }) => theme.colors.secondaryGrey};

  div {
    align-self: center;
    text-align: center;
  }
`;

const StripBody = props => {
  const { title, date, id } = props;

  return (
    <StyleWrapper>
      <div>{title}</div>
      <div>{formatDate(date)}</div>
      <div>
        <OptionPanel id={id} />
      </div>
    </StyleWrapper>
  );
};

StripBody.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  id: PropTypes.string,
};
StripBody.defaultProps = {
  title: 'pusty',
  date: 'pusty',
  id: '',
};

export default StripBody;
