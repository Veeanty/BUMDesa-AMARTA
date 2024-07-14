import "./ProfilBUMDesa.css";
import Logo from "../../assets/img/BUMDesa.jpg";

const ProfilBUMDesa = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="logo">
          <img src={Logo} alt="Logo BUMDesa" className="logo-image" />
        </div>
        <div className="text">
          <h2 className="judul-profil">BUMDesa AMARTA PANDOWOHARJO</h2>
          <p className="deskripsi-profil">
            BUMDesa Amarta merupakan suatu kumpulan dari usaha-usaha yang
            berlokasikan di Desa Pandowoharjo, Kec. Sleman, Kab. Sleman.
            Yogyakarta. Berdiri sejak tahun 2016, yang di ketuai oleh Bapak Agus
            Setyanta, S.SOS memiliki visi misi “Bersinergi Mewujudkan Desa
            Mandiri” mengartikan bahwa BUMDesa Amarta menjadi suatu rumah bagi
            para usahawan di daerah Pandowoharjo untuk terus berkembang dalam
            berinovasi, mengajak para Masyarakat untuk memajukan perekonomian.
            Pada awalnya, BUMDesa Amarta hanya mengelola unit Tempat
            Pengelolahan Sampah, namun seiring berjalannya waktu, banyak mitra
            dan inovasi yang terus dikembangkan dan bekerjasama hingga saat ini.
            Sudah terdapat 5 usaha yang diunggulkan, mulai dari Pengelolaan
            Sampah, Kolam Renang, Toko Desa, Beras, dan Taman Kuliner. Dan UMKM
            yang berada disekitar Pandowoharjo seperti Gethuk Madu, Batik
            Idaman, Klanting, Ampyang Jahe, dan beberapa UMKM lainnya. Sekitar
            300 hingga 400 orang setiap tahunnya BUMDesa Amarta di datangi oleh
            wisata dari berbagai daerah untuk studi banding denga unit-unitnya
            terutama Pengolalaan TPST.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilBUMDesa;
