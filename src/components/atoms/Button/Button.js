import styled from 'styled-components';

const Button = styled.button`
padding:10px;
background: '#FFD8B2';
width: 220px;
color: ${({ theme }) => theme.primary};
height: '47px';
border:none;
border-radius:50px;
font-size:16px;
font-family:'Montserrat';
font-weight:800;
text-transform:uppercase;
outline:none;
&:hover {
    background: #555;
    cursor: pointer;
  }
`

export default Button;