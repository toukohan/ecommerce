import { useSelector, useDispatch } from 'react-redux';
import { CartItem } from '../context/CartProvider';
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
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const { name, price, image_url } = product;
  const cartItem: CartItem = { ...product, quantity: 1 };

  const handleCart = () => {
    const isInCart = cart.cartItems.find((item: any) => item.id === cartItem.id);
    console.log("Is in cart:", isInCart)
    console.log("------------------")
    if (isInCart) {
      isInCart.quantity++;
      dispatch({ type: 'INCREASE', payload: isInCart });
      return;
    }
    dispatch({ type: 'ADD_TO_CART', payload: cartItem })
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