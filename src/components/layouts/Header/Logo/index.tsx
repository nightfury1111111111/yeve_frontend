import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Information } from './Logo.styled';

type LogoProps = {
  themeConfig: Record<string, any>;
};

export default function Logo({ themeConfig }: LogoProps) {
  return (
    <Container>
      <Link to="/">
        <img src={themeConfig.images.header?.logo} />
      </Link>
      <Information>
        TVL:
        <span>$12.000.000</span>
      </Information>
      <Information>
        APR:
        <span>+121%</span>
      </Information>
    </Container>
  );
}
