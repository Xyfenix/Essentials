import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from "./pages/Product";
import Product from "./pages/Product";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <Router>
      <Routes>
        localhost/product/details
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/details" element={<ProductDetails />} />
      </Routes>
    </Router>
    </I18nextProvider>
  );
}

export default App;