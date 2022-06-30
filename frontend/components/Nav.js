import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/singles">Singles</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/products">Products</Link>
    </NavStyles>
  );
}
