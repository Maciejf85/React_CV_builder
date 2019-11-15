import styled from 'styled-components';

const Notification = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.buttonActive};
  font-size: ${({ theme }) => theme.fontSize.ml};

  padding: 20px 15px;
  border-radius: 7px;
  margin: 10px 0;
  text-align: center;
`;

export default Notification;
