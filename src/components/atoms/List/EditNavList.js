import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  background: ${({ active, theme }) => (active ? theme.colors.primaryBlue : theme.colors.darkGrey)};
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  justify-items: self-start;
  align-items: center;
  padding-left: 25px;
  font-size: ${({ theme }) => theme.fontSize.ms};
  transition: 0.3s;
  :hover {
    background: ${({ theme }) => theme.colors.secondaryBlue};
    cursor: pointer;
  }

  div {
    /* border: 1px dotted red; */
  }
`;

class EditNavList extends Component {
  componentDidMount() {
    console.log('this.props', this.props);
  }

  render() {
    const { name, icons, active } = this.props;
    console.log('icon', icons);
    return (
      <StyledWrapper active={active}>
        <div>
          <FontAwesomeIcon icon={icons} />
        </div>
        <div>{name}</div>
        <div>opt</div>
      </StyledWrapper>
    );
  }
}
export default EditNavList;
