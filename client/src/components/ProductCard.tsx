import { Button } from '@mui/material';
import './ProductCard.scss'

export interface Product {
    id: number;
    name: string;
    price: number;
    image_url: string;
 }

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, image_url } = product;
  return (
    <div className="product-card">
      <div className="product-card_image">
        <img src={image_url} alt={name} />
      </div>
      <div className="product-card_details">
        <h3 className="product-card_name">{name}</h3>
        <p className="product-card_price">${price}</p>
        <Button variant="contained">Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;