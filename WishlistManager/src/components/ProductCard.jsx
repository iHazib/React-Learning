function ProductCard({name, price, inStock, onDelete}) {
  const showTick = inStock == true ? "✅" : "";

  return (
    <div>
      <h3>{name}{showTick}</h3>
      <h5>{price} USD</h5>
      <button onClick={onDelete}>Remove</button>
    </div>
  );
}

export default ProductCard;