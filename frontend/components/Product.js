import ItemStyles from './styles/ItemStyles';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <p>{product.name}</p>
    </ItemStyles>
  );
}
