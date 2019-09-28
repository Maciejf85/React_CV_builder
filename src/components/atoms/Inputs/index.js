import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.ms};
  line-height: 25px;
  resize: none;
  white-space: pre-line;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 10px 15px;
  outline: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.mediumGrey};
`;
