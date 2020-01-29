import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OptionPanel from 'components/atoms/Buttons/OptionPanel';
import { formatDate } from 'functions/index';

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  width: 100%;
  padding: 5px 0;
  margin-bottom: 10px;
  align-items: start;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.ms};
  color: ${({ theme }) => theme.colors.secondaryGrey};

  @media ${({ theme }) => theme.media.small} {
    div:first-of-type {
      font-size: ${({ theme }) => theme.fontSize.ml};
      font-weight: ${({ theme }) => theme.font.bold};
    }
  }

  div {
    align-self: center;
    text-align: center;
  }
  @media ${({ theme }) => theme.media.small} {
    display: inline-flex;
    flex-direction: column;
    flex: 1 1 50%;
  }
`;

const StripBody = props => {
  const { title, date, id, language } = props;

  return (
    <StyleWrapper>
      <div>{title}</div>
      <div>{formatDate(date)}</div>
      <div>
        <OptionPanel id={id} language={language} />
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
