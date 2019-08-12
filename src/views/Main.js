import React from 'react';
import { connect } from 'react-redux';

const Main = props => {
  return (
    <>
      <h1>Main Component</h1>
      {console.log(props.userName)}
    </>
  );
};

const mapStateToProps = ({ userName }) => ({ userName });
export default connect(mapStateToProps)(Main);
