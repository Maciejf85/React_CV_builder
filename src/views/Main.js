import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Main = props => {
  return (
    <>
      <h1>Main Component</h1>
      <h2>{`mapStateToProps : ${props.userName.name} ${props.userName.surname}   `}</h2>
    </>
  );
};

Main.propTypes = {
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = ({ userName }) => ({ userName });
export default connect(mapStateToProps)(Main);
