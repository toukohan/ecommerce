import { useEffect, useState } from 'react'
import axios from '../api/axios'

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
        <div>
            {loading ? <h1>Loading...</h1> : (
                <div>
                    {categories.map((category: any) => (
                        <div key={category.id}>
                            <h1>{category.name}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Categories;