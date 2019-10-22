import styled from 'styled-components'

const MainModal = styled.div`
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
display:flex;
flex-direction:column;
width:550px;
height:340px;
border-radius:10px;
overflow:hidden;
background:white;
font-style:italic;
box-shadow:0 0 15px ${({ theme }) => theme.colors.darkGrey};

header{
    /* border:1px solid red; */
    height:50px;
    line-height:50px;
    font-size:${({ theme }) => theme.fontSize.xl};
    font-weight:${({ theme }) => theme.font.bold};
    color:white;
    background:${({ theme }) => theme.colors.lightBlue};
    padding:0 20px;
}
section{
    height:350px;
    display:flex;
    justify-content:center;
    align-items:center;
    /* border:1px solid green; */
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
    height:50px;
    /* border:1px solid blue; */
    text-align:right;
    margin: 10px;
    
}
`

export default MainModal