import "./Beranda.css";
import Header from "./component/header/Header";
import CoverVid from "./component/covervid/CoverVid";
import ProfilBUMDesa from "./component/profilbumdesa/ProfilBUMDesa";
import Catalog from "./component/catalog/Catalog";
import Footer from "./component/footer/Footer";

const Beranda = () => {
  return (
    <div className="Background-beranda">
      <Header />
      <CoverVid/>
      <ProfilBUMDesa/>
      <Catalog/>
      <Footer />
    </div>
  );
};

export default Beranda;
