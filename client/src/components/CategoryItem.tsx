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
            <h2>{category.name}</h2>
            <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem