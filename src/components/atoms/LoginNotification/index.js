import styled from 'styled-components';

const Notification = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.font.thin};
  letter-spacing: -1px;
  font-style: italic;
  padding-top: 10px;
  border-radius: 7px;
  margin: 10px 0;
  text-align: center;
`;

export default Notification;
