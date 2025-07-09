function ProductLists({ product }) {
  const { productName, price, description } = product;

  return (
    <li className="product">
      <p className="product-name">{productName}</p>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </li>
  );
}

export default ProductLists;
