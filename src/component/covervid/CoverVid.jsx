import "./CoverVid.css";

const CoverVid = () => {
    return (
      <div className="bg-white">
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
                href="https://www.youtube.com/watch?v=Ev8M4f9RgfY"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-contact"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoverVid;
