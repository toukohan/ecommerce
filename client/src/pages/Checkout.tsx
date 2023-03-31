import { useEffect, useContext, useState } from 'react';
import { CartContext } from '../context/CartProvider';
import { UserContext, User } from '../context/UserProvider';
import { Button } from '@mui/material';
import axios from '../api/axios';
import './Checkout.scss';

interface Customer extends User {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    zip: string;
    phone: string;

}
const Checkout = () => {
    const { userData } = useContext(UserContext);
    const [customer, setCustomer] = useState<Customer| null>(null)
    const { cart, setCart, setCartOpen } = useContext(CartContext);

    const getCustomer = async () => {
        const response = await axios.get('/api/auth/me');
        console.log(response);
    }

    useEffect(() => {
        if(userData?.user !== null) {
            getCustomer();
        }
        setCartOpen(false);
    }, [userData]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log("handling submit")
        }

    return (
        <div className="checkout-container">
            <div className="checkout-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name" value={customer?.firstName} />
                    <input type="text" placeholder="Last Name" value={customer?.lastName} />
                    <input type="text" placeholder="Address" value={customer?.address} />
                    <input type="text" placeholder="City" value={customer?.city} />
                    <input type="text" placeholder="Zip" value={customer?.zip} />
                    <input type="text" placeholder="Phone" value={customer?.phone} />
                    <Button type="submit" variant="contained" color="primary">Order</Button>
                </form>
            </div>
            <div className="checkout-items">
                {cart.map(({product, quantity}) => (
                    <div className="checkout-item">
                        <p>{quantity} x {product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Checkout;