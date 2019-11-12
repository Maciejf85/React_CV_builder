import styled from 'styled-components';

const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  margin: 10px 0;
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export default Notification;
