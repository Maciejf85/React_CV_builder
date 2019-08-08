import React from 'react';
import { connect } from 'react-redux';

const Main = props => {
  return (
    <>
      <h1>Main Component</h1>
      {console.log(props.notes)}
    </>
  );
};

const mapStateToProps = ({ notes }) => ({ notes });
export default connect(mapStateToProps)(Main);
