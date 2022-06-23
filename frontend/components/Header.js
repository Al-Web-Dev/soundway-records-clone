import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="container">
      <div className="bar" />
      <div className="sub-bar">
        <Link href="/">Sound Records</Link>
        <Nav />
        Search
      </div>
    </header>
  );
}
