import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import './CartIcon.scss';

const CartIcon = () => {
    const { cartItems } = useSelector((state: any) => state.cart);
    return (
        
       
            <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCartIcon />
            </Badge>
        
    );
    };

export default CartIcon;