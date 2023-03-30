import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';
import './CartIcon.scss';

const CartIcon = () => {
    const { cart } = useContext(CartContext);
    
    return (
        
        <IconButton>
            <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
            </Badge>
        </IconButton>
        
    );
    };

export default CartIcon;