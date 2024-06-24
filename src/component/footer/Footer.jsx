import "./Footer.css";
// import '../../assets/aos/aos.css';
import '../../assets/bootstrap-icons/bootstrap-icons.css';
import '../../assets/boxicons/css/boxicons.min.css';
// import '../../assets/bootstrap/css/bootstrap.min.css';
// import '../../assets/glightbox/css/glightbox.min.css';
// import '../../assets/swiper/swiper-bundle.min.css';
import BRILogo from '../../assets/img/mitra/BRI.jpg';
import PRSILogo from '../../assets/img/mitra/PRSI.png';
import JejemuranLogo from '../../assets/img/mitra/jejamuran.png';
import sampoernaLogo from '../../assets/img/mitra/sampoerna.png';
// import './path/to/custom.css';
// import './path/to/responsive.css';



const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>BUMDes</h3>
                <p>
                  BUMDes Amarta merupakan unit usaha milik desa Pandowoharjo. Saat ini Amarta memiliki lima unit usaha
                  dan telah bekerjasama dengan berbagai Mitra.
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100064683969849&_rdc=1&_rdr" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Tentang Kami</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="welcome">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="detail">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="welcome#Pengurus">Pengurus BUMDes</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Alamat</h4>
              <p>
                Niron, Pandowoharjo, Sleman,<br />
                Sleman Regency, Special Region of Yogyakarta 55512<br /><br />
                <strong>Phone:</strong> 087838523909<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>
            <div className="col-lg-4 col-md-5 footer-newsletter">
              <h4>Mitra Kami</h4>
              <div className="row ">
                <div className="col" >
                  <img src={BRILogo} className="bank-bri img-fluid" alt="BRI" />
                </div>
                <div className="col">
                  <img src={PRSILogo} className="img-fluid" alt="PRSI" />
                </div>
                <div className="col">
                  <img src={JejemuranLogo} className="img-fluid" alt="Jejamuran" />
                </div>
                <div className="col">
                  <img src={sampoernaLogo} className="img-fluid" alt="Sampoerna" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>BUMDes</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by AMIKOM
        </div>
      </div>
    </footer>
  );
}

export default Footer;
