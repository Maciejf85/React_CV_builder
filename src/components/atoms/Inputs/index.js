import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  height: 300px;
  border: 1px solid black;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 25px;
`;

export const Input = styled.input`
  width: 100px;
`;
