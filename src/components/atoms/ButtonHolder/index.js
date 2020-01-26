import styled from 'styled-components';

const ButtonHolder = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${({ theme }) => theme.media.small} {
    justify-content: center;
  }
`;

export default ButtonHolder;
