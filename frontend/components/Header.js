import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);

  background: red;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 1px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Header() {
  return (
    <HeaderStyles className="container">
      {/* <img alt="Header Logo" src="/public/static/header-logo.png" /> */}
      <Logo>
        <Link href="/">Sound Records</Link>
      </Logo>
      <Nav />
      <div className="bar">
        <p>Search</p>
      </div>
    </HeaderStyles>
  );
}
