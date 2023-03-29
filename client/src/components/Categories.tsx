import { useEffect, useState } from 'react'
import axios from '../api/axios'
import './Categories.scss'
import CategoryItem from './CategoryItem'

const Categories = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    const getCategories = async () => {
        const response = await axios.get('/api/products/categories');
        console.log(response.data);
        setCategories(response.data);
        setLoading(false);
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <>
            {loading ? <h1>Loading...</h1> : (
                <div className="categories-container">
                    {categories.map((category: any) => (
                        <CategoryItem key={category.id} category={category} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Categories;

