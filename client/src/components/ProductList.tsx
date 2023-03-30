import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../api/axios';
import ProductCard from './ProductCard';
import './ProductList.scss'

const ProductList = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const myParamValue = queryParams.get('category');
    console.log(myParamValue);
    
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const { data } = await axios.get('/api/products');
        const filteredData = data.filter((product: any) => product.category === myParamValue?.toLowerCase());
        setProducts(filteredData);
    };


    useEffect(() => {
        try {
        getProducts();
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <div className="product-list-container">
            <h1>Product List</h1>
            <div className="product-list">
                {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;