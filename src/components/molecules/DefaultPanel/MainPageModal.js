import styled from 'styled-components'

const MainModal = styled.div`
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-60%);
display:flex;
flex-direction:column;
width:450px;
height:240px;
background:white;
font-style:italic;
border-radius:10px;
overflow:hidden;

header{
    height:50px;
    line-height:50px;
    font-size:${({ theme }) => theme.fontSize.xl};
    font-weight:${({ theme }) => theme.font.bold};
    color:white;
    background:${({ theme }) => theme.colors.secondaryBlue};
    padding:0 20px;
}
section{
    height:150px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 10px;
    padding:0 10px;
    input{
        font-size:${({ theme }) => theme.fontSize.xxl};
        text-align:center;
        border:none;
        outline:none;
        color:${({ theme }) => theme.colors.buttonActive};
        border-bottom:1px solid grey;
        width:70%;
        font-style:italic;
    }
}
footer{
    height:35px;
    /* border:1px solid blue; */
    text-align:right;
    margin: 10px;
    
}
`

export default MainModal