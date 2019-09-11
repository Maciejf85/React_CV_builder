import React, { Component } from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import EditSidebar from 'components/molecules/SideBar/EditSidebar';

class Edit extends Component {
  componentDidMount() {
    console.log('Component did mount');
  }

  render() {
    return (
      <>
        <NavBar />
        <EditSidebar />
      </>
    );
  }
}

export default Edit;
