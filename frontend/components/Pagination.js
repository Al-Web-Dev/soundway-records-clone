import gql from 'graphql-tag';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
  query {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>Sound Records - Page {page} of ___</title>
      </Head>
      <Link href={`/products/${page - 1}`}> &larr; Previous </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p> {count} items Total</p>
      <Link href={`/products/${page + 1}`}> Next &rarr;</Link>
    </PaginationStyles>
  );
}
