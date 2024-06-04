
import './Header.css';
import './assets/aos/aos.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap-icons/bootstrap-icons.css';
import './assets/boxicons/css/boxicons.min.css';
import './assets/glightbox/css/glightbox.min.css';
import './assets/swiper/swiper-bundle.min.css';
// import './path/to/custom.css';
// import './path/to/responsive.css';

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="description">
          <div className="logo">
            {/* <img src={require('./assets/img/logo 3.png').default} alt="Logo" /> */}
          </div>
        </div>
        <div className="logo me-auto">
          <h1><a href="index.html">BUMDesa AMARTA</a></h1>
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto" href='welcome'>Home </a></li>
            <li className="dropdown">
              <a href="#"><span>Unit Usaha</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><a className="nav-link scrollto" href='sampah'>Unit Pengelolaan Sampah</a></li>
                <li><a className="nav-link scrollto" href='tamkul'>Unit Usaha Taman Kuliner</a></li>
                <li><a className="nav-link scrollto" href='kolam'>Unit Usaha Kolam Renang</a></li>
                <li><a className="nav-link scrollto" href='beras'>Produksi Beras Sleman</a></li>
                <li><a className="nav-link scrollto" href='toko'>Toko Desa</a></li>
              </ul>
            </li>
            <li><a className="nav-link scrollto" href='mitra'>Mitra usaha</a></li>
            <li><a className="nav-link scrollto" href='ecommerce'>E-Commerce</a></li>
            <li><a className="nav-link scrollto" href='berita'>Berita</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="header-social-links d-flex align-items-center">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100064683969849&_rdc=1&_rdr" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
