import {useState} from 'react';
import ProductCard from './ProductCard';

function WishlistManager() {
 
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Sneakers", price: 50, inStock: true },
    { id: 2, name: "Backpack", price: 30, inStock: false },
    { id: 3, name: "Headphones", price: 80, inStock: true },
  ]);

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlist.map((item) => (
        <ProductCard
        key={item.id}
        name={item.name}
        price={item.price}
        inStock={item.inStock}
        onDelete={() => {
            setWishlist(wishlist.filter((f) => f.id !== item.id));
        }} />
      ))}
    </div>
  );
}

export default WishlistManager