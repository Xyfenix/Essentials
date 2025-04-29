import React, { useState } from "react";
import Landing from "./../pages/LandingPage";
import Product from "./../pages/Product";
import Modal from "./Modal";
import AddItemModal from "./AddItemModal";
import homeIcon from "./../assets/Images/Home.png";
import productIcon from "./../assets/Images/Market.png";
import settingsIcon from "./../assets/Images/Settings.png";
import userIcon from "./../assets/Images/User Boy.png";
import { useNavigate } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);

  // [state, perubahstate] = useState(nilai state);

  const handleTabClick = (tab) => {
    if (tab === 'home') {
      navigate('/');
    } else if (tab === 'product') {
      navigate('/product');
    } else if (tab === 'user') {
      navigate('/');
    }
  };

  return (
    <>
      <div className="bottom-nav">
        <button onClick={() => handleTabClick('home')} className="nav-button">
          <img src={homeIcon} alt="Home" className="nav-icon"/>
        </button>
        <button onClick={() => handleTabClick('product')} className="nav-button">
          <img src={productIcon} alt="Product" className="nav-icon"/>
        </button>
        <button onClick={() => setIsModalOpen(true)} className="nav-button">
          <img src={settingsIcon} alt="Settings" className="nav-icon"/>
        </button>
        <button onClick={() => handleTabClick('user')} className="nav-button">
          <img src={userIcon} alt="User" className="nav-icon"/>
        </button>
        <button onClick={() => setIsAddItemOpen(true)} className="nav-button">
          <img src={new URL('./../assets/Images/Add.svg', import.meta.url).href} alt="Add" className="nav-icon"/>
        </button>
      </div>

      {/* Settings Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      </Modal>

      {/* Add Item Modal */}
      <AddItemModal isOpen={isAddItemOpen} onClose={() => setIsAddItemOpen(false)}>
      </AddItemModal>
    </>
  );
}
