import React from 'react'
import Nav from 'components/Nav';
import styled from 'styled-components';

const MyButton = styled.button`
border:1px solid red;
padding:50px;
`

class Main extends React.Component {

    render() {
        return (
            <>
                <Nav />
                <MyButton>Przycisk</MyButton>
            </>
        )
    }
}

export default Main;