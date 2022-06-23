import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="container">
      <div className="bar" />
      <div className="sub-bar">
        <Link href="/">
          <img alt="Header Logo" src="../public/static/header-logo.png" />
        </Link>
        <Nav />
        Search
      </div>
    </header>
  );
}
