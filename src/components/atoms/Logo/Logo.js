import styled from 'styled-components';
import image from 'assets/logo-small.png';

const Logo = styled.div`
  width: 100px;
  height: 100%;
  background-image: url(${image});
  background-position: center center;
  background-size: cover;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export default Logo;
