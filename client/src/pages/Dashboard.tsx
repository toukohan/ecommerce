const Dashboard = () => {

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
        <div className="add-product-container">
            <h2>Add Product</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" />
                <label htmlFor="image_url">Image URL</label>
                <input type="text" name="image_url" id="image_url" />
                <label htmlFor="category">Category</label>
                <input type="text" name="category" id="category" />
                <button type="submit">Add Product</button>
            </form>

        </div>
        
        </div>
    );
};

export default Dashboard;