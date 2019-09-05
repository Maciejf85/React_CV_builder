import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4px;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

const InfoStrip = () => {
  const { info } = useSelector(state => state.cvData);
  const date = new Date(info.date * 1000);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getUTCFullYear();
  const monthArr = [
    'styczeń',
    'luty',
    'marzec',
    'kwiecień',
    'maj',
    'czerwiec',
    'lipiec',
    'sierpień',
    'wrzesień',
    'październik',
    'listopad',
    'grudzień',
  ];

  return (
    <StyleWrapper>
      <div>{info.title}</div>
      <div>{`${day}  ${monthArr[month]}  ${year}`}</div>
      <div>pdf</div>
    </StyleWrapper>
  );
};

InfoStrip.propTypes = {};

export default InfoStrip;
