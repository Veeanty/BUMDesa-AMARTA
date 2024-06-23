import "./Dashboard.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Catalog from "./component/catalog/Catalog";


const Dashboard = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="min-h-screen flex items-center relative video-container">
        <video
          autoPlay
          muted
          loop
          className="video-background"
        >
          <source src="/src/assets/Vid/Video-Dashboard.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content-container">
          <div className="content-judul">
            BUMDesa AMARTA PANDOWO HARJO
          </div>
          <div className="content-deskripsi">
            Mewujudkan kesejahterahan masyarakat Desa
          </div>
          <div className="mt-20">
            <a
              href="https://wa.me/6287838523909"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-contact"
            >
              Tentang Kami
            </a>
          </div>
        </div>
      </div>
      <Catalog/>
      <Footer />
    </div>
  );
};

export default Dashboard;
