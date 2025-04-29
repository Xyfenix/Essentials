import React, {useState} from 'react';
import './../assets/styles/Modal.css';
import data from "./../assets/product.json";

const AddItemModal = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState(data.products);
  const storedProducts = localStorage.getItem('products');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    rating: 0,
    reviews: 0,
    category: 'Foods',
    mobileNumber: ''
  });

  if (!storedProducts || storedProducts.length === 0) {
    localStorage.setItem('products', data.products);
  }

  console.log('Type of products:', typeof products);
  console.log('Value of products:', products);

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert('Please fill in all required fields.');
      return;
    }
  
    const priceNumber = Number(newProduct.price);
    if (isNaN(priceNumber)) {
      alert('Price must be a valid number.');
      return;
    }

    const finalNewProduct = {
      ...newProduct,
      price: priceNumber,
      rating: 0, 
      reviews: 0,
    }
  
    const updatedProducts = [...products, finalNewProduct];
    setProducts(updatedProducts);
  
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    setIsModalOpen(false);
    setNewProduct({  
      name: '',
      price: '',
      image: '',
      rating: 0,
      reviews: 0,
      category: 'Foods',
      mobileNumber: ''
    });
  };

  if (!isOpen) return null;


  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <h2 className="modal-title">Add New Product</h2>
          <form>
            <div className="modal-form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="modal-form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="modal-form-group">
              <label htmlFor="image">Image URL:</label>
              <input
                type="text"
                id="image"
                name="image"
                value={newProduct.image}
                onChange={handleInputChange}
              />
            </div>
            <div className="modal-form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
              >
                <option value="Foods">Foods</option>
                <option value="Toys">Toys</option>
                <option value="Others">Others</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
            <div className="modal-form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={newProduct.mobileNumber}
                onChange={handleInputChange}
                placeholder="+6281234567890"
              />
            </div>
            <button type="button" onClick={handleAddProduct}>
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal; 
