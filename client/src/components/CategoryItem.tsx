import { Link } from 'react-router-dom'
import './CategoryItem.scss'

export interface CategoryItemProps {
    category: {
        id: number;
        name: string;
        image_url: string;
    }
}

const CategoryItem = ({ category } : CategoryItemProps) => {

    const  { name, image_url } = category;

    return (
        <div className="category-container">
            <div 
                className="background-image"
                style={{
                    backgroundImage: `url(${image_url})`
                }}
             />
                <div className="category-body-container">
            <Link to={{ pathname: '/products', search: `?category=${category.name}` }}>
                    <h2>{category.name}</h2>
                    <p>Shop Now</p>
            </Link>
                </div>
        </div>
    )
}

export default CategoryItem