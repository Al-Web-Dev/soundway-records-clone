import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/singles">Singles</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
}
