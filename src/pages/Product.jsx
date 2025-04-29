import React, {useState} from "react";
import './../assets/styles/index.css';
import logo from "./../assets/Images/LogoL.png";
import BottomNav from "./../components/BotNav";
import { useTranslation } from 'react-i18next';
import data from "./../assets/product.json";
// Import all images
import foodsIcon from "./../assets/Images/Foods/Foods.svg";
import drinksIcon from "./../assets/Images/Drinks/Drinks.svg";
import toysIcon from "./../assets/Images/Toys/Toys.svg";
import othersIcon from "./../assets/Images/Others/Others.svg";
import { useNavigate, createSearchParams } from 'react-router-dom';

export default function Product() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      try {
        return JSON.parse(storedProducts);
      } catch (error) {
        console.error("Error parsing stored products:", error);
        return data.products; // Fallback to default data on parse error
      }
    }
    return data.products; // Default data
  });
  const [selectedCategory, setCategory] = useState("All");

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  }

  const categories = [
    // All can be added
    { name: 'Foods', icon: foodsIcon },
    { name: 'Drinks', icon: drinksIcon },
    { name: 'Toys', icon: toysIcon },
    { name: 'Others', icon: othersIcon },
  ];

  console.log(products);

  const filteredProducts = selectedCategory === "All" ? products : products.filter(product => product.category === selectedCategory);
  
  const handleItemClick = (product) => {
    navigate({
      pathname: '/product/details',
      search: createSearchParams({
        name: product.name,
        price: product.price,
        image: product.image,
      }).toString(),
    });
  }
  
  return (
    <div className="dashboard">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div>
          <p className="welcome">{t('dashboard.welcome')}</p>
          <h2>{t('dashboard.title')}</h2>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder={t('dashboard.searchPlaceholder')} />
        <button className="cart-button">🛒</button>
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={() => handleCategoryClick(category.name)}>
            <img src={category.icon} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      <h3 className="section-title">{t('dashboard.popularProducts')}</h3>

      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={new URL(product.image, import.meta.url).href} alt={product.name} onClick={() => handleItemClick(product)}/>
            <div className="product-info">
              <div className="rating">
                ❤️ {product.rating} ({product.reviews})
              </div>
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
              <p className="product-mobile">📱 {product.mobileNumber}</p>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
