import { useContext } from 'react';
import { CartContext, CartItem } from '../context/CartProvider';
import { Button } from '@mui/material';
import './ProductCard.scss'

export interface Product {
    id: number;
    name: string;
    price: number;
    image_url: string;
    category: string;
 }

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { cart, setCart } = useContext(CartContext);
  const { name, price, image_url } = product;
  const cartItem: CartItem = { product, quantity: 1 };
  // todo type?
  const handleCart = () => {
    setCart((prev: any) => [...prev, cartItem]);
  }
  
  return (
    <div className="product-card">
      <div className="product-card_image">
        <img src={image_url} alt={name} />
      </div>
      <div className="product-card_details">
        <h3 className="product-card_name">{name}</h3>
        <p className="product-card_price">${price}</p>
        <Button onClick={handleCart} variant="contained">Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;