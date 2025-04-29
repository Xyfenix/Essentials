import logo from "./../assets/Images/LogoL.png";
import BottomNav from "./../components/BotNav";
import { useSearchParams } from 'react-router-dom';

export default function ProductDetail() {
  const [searchParams] = useSearchParams()
  
  const productName = searchParams.get('name');
  const productPrice = searchParams.get('price');
  const productImage = searchParams.get('image');
  const productMobile = searchParams.get('mobileNumber');

  return (
    <>
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <div className="product-detail">
      <img className="product-image" src={new URL(productImage, import.meta.url).href} alt="product" />

      <h1 className="price">{productPrice}</h1>
      <h2 className="product-title">{productName}</h2>

      {/* Mini thumbnails */}
      <div className="thumbnails">
        <img src={new URL('./../assets/Images/Others/Small 1.jpg', import.meta.url).href} alt="thumb1" />
        <img src={new URL('./../assets/Images/Others/Small 2.png', import.meta.url).href} alt="thumb2" />
        <img src={new URL('./../assets/Images/Others/Small 3.png', import.meta.url).href} alt="thumb3" />
      </div>

      {/* Rectangle box before seller info */}
      <div className="rectangle-box"></div>

      {/* Seller */}
      <div className="seller">
        <img src={new URL('./../assets/Images/Review Person.png', import.meta.url).href} alt="seller" />
        <div className="seller-info">
          <p>Putu Kinaya Dewitara Putri</p>
          <p className="seller-mobile">📱 {productMobile}</p>
        </div>
      </div>

      {/* Description */}
      <div className="description">
        <h3>Deskripsi</h3>
        <p>COCOK UNTUK PAJANGAN MINIATUR MOBIL / MOTOR HADIAH (TERSEDIA BOX) DAN HOBI KOLEKSI. REAL PHOTO, SEMUA FOTO TERSEDIA KAMI FOTO SENDIRI, DENGAN PRODUK KAMI SENDIRI. LOKASI: DENPASAR SELATAN COD/MP READY!!</p>
      </div>
    </div>
      {/* bottom icons */}
        <div className="dashboard-container">
        {/* related to dashboard */}
        <BottomNav/>
        </div>
        </>
  );
}