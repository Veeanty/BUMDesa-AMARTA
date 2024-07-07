import './Pengurus.css';
import img1 from '../../assets/img/pengurus/Pengurus-1.jpg';
import img2 from '../../assets/img/pengurus/Pengurus-2.jpg';
import img3 from '../../assets/img/pengurus/Pengurus-3.jpg';

const profiles = [
    {
        name: "Agus Setyanta, S.Sos.",
        role: "Direktur Bumdes Amarta",
        imgUrl: img1,
        social: {
          twitter: "",
          facebook: "https://www.facebook.com/profile.php?id=100064683969849&_rdc=1&_rdr",
          instagram: "",
          linkedin: ""
        }
      },
      {
        name: "Eko Susetyo",
        role: "Bendahara Bumdes Amarta",
        imgUrl: img2,
        social: {
          twitter: "",
          facebook: "https://www.facebook.com/profile.php?id=100064683969849&_rdc=1&_rdr",
          instagram: "",
          linkedin: ""
        }
      },
      {
        name: "Sri Nurtamsi",
        role: "Sekretaris Bumdes Amarta",
        imgUrl: img3,
        social: {
          twitter: "",
          facebook: "https://www.facebook.com/profile.php?id=100064683969849&_rdc=1&_rdr",
          instagram: "",
          linkedin: ""
        }
      }
];

const Pengurus = () => {
  return (
    <section id="Pengurus" className="team">
        
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 className='judul'>Pengurus Bumdes</h2>
          <p className='deskripsi'>Berikut adalah beberapa pengurus BUMDes Amarta</p>
        </div>
        <div className="row">
          {profiles.map((profile, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="member" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="pic">
                  <img src={profile.imgUrl} className="img-fluid" alt={profile.name} />
                </div>
                <div className="member-info">
                  <h4>{profile.name}</h4>
                  <span>{profile.role}</span>
                  <div className="social">
                    {profile.social.twitter && <a href={profile.social.twitter}><i className="bi bi-twitter"></i></a>}
                    {profile.social.facebook && <a href={profile.social.facebook}><i className="bi bi-facebook"></i></a>}
                    {profile.social.instagram && <a href={profile.social.instagram}><i className="bi bi-instagram"></i></a>}
                    {profile.social.linkedin && <a href={profile.social.linkedin}><i className="bi bi-linkedin"></i></a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pengurus;
