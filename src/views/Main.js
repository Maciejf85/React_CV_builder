import React from 'react';
import Button from 'components/atoms/Button/Button';
import Logo from 'components/atoms/Logo/Logo';

const Main = () => {
  return (
    <>
      <Logo />
      <Button>Push me</Button>
      <Button secondary>Push me </Button>
      <Button third>Push me</Button>
    </>
  );
};

export default Main;
