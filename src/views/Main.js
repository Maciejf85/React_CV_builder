import React from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import tools from 'actions/tools';
import Footer from 'components/organisms/Footer/footer';

const StyledWrapper = styled.div`
  margin: 0 20px;
`;

const Main = props => {
  const dispatch = useDispatch();
  return (
    <StyledWrapper>
      <h1>Main Component</h1>
      <h2>{`mapStateToProps : ${props.userName.name} ${props.userName.surname}   `}</h2>
      <h2>{`mapStateToProps : languages : ${props.skills.languages}`}</h2>
      <h2>{`mapStateToProps :  tools: ${props.skills.tools}`}</h2>
      <Button type="button" onClick={() => dispatch(tools())}>
        change tools
      </Button>
      <Footer />
    </StyledWrapper>
  );
};

Main.propTypes = {
  userName: PropTypes.object.isRequired,
  skills: PropTypes.object.isRequired,
};

const mapStateToProps = ({ userName, skills }) => ({ userName, skills });
export default connect(mapStateToProps)(Main);
