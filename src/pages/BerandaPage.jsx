import Header from "../component/header/Header";
import CoverVid from "../component/covervid/CoverVid";
// import ProfilBUMDesa from "../component/profilbumdesa/ProfilBUMDesa";
import Pengurus from "../component/pengurus/Pengurus";
import Catalog from "../component/catalog/Catalog";
import Footer from "../component/footer/Footer";
import ProfilPengelolaanSampah from "../component/profil/ProfilPengelolaanSampah";

const BerandaPage = () => {
  return (
    <div>
        <Header />
        <CoverVid/>
        <ProfilPengelolaanSampah/>
        {/* <ProfilBUMDesa/> */}
        <Pengurus/>
        <Catalog/>
        <Footer />
    </div>
  );
};

export default BerandaPage