import './Profil.css'

const ProfilPengelolaanSampah = () => {
  return (
    <div className="container profil">
      <div className="video-section">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/khd7bXyCNas"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-section">
        <h2>UNIT PENGELOLAH SAMPAH</h2>
        <p>
          Unit ini melayani kurang lebih 600 pelanggan dibantu oleh empat jasa pengepul sampah mandiri yang merupakan warga desa Pandowoharjo. Unit ini juga memberikan edukasi emas kepada masyarakat dan pengunjung bahwa sampah bisa didaur ulang yang bermanfaat bagi lingkungan dan juga mendapatkan keuntungan.
        </p>
      </div>
    </div>
  );
};

export default ProfilPengelolaanSampah