import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import './../assets/styles/Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if ( isDarkMode ) {
      document.body.classList.add('dark-theme');
    }
    else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };


  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content ${isDarkMode ? 'dark' : ''}`} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <h2 className="modal-title">{t('settings.title')}</h2>
          <div className="modal-section">
            <h3>Appearance</h3>
            <div className="theme-toggle">
              <span>{isDarkMode ? t('settings.appearance.darkMode') : t('settings.appearance.lightMode')}</span>
              <label className="switch">
              <input 
                  type="checkbox" 
                  checked={isDarkMode}
                  onChange={handleDarkModeToggle}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="modal-section">
          <h3>{t('settings.language.title')}</h3>
            <select 
              className="language-select"
              value={i18n.language}
              onChange={handleLanguageChange}
            >
              <option value="en">{t('settings.language.en')}</option>
              <option value="id">{t('settings.language.id')}</option>
              <option value="zh">{t('settings.language.zh')}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 