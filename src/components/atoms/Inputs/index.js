import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Textarea = styled.textarea`
  width: 100%;
  min-height: ${({ edit }) => (edit ? '100px' : '300px')};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.ms};
  border-radius: ${({ edit }) => edit && '10px'};
  line-height: 25px;
  resize: none;
  white-space: pre-line;
`;
