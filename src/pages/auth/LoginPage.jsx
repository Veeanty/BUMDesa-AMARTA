import "./Auth.css";
import logo from "../../assets/img/BUMDesa.jpg";
import image1 from "../../assets/img/Hero.jpg";
import image2 from "../../assets/img/batik/batik6.jpg";
import image3 from "../../assets/img/beras/BERAS6.jpg";
import { Carousel } from "react-bootstrap";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="body">
    <div className="body-container">
      <div className="login-container">
        <div className="login-form">
          <h1 className="judul-login">Selamat Datang</h1>
          <img src={logo} alt="Logo" className="logo-login" />
          <h8>Silahkan login menggunakan email dan password anda</h8>
          <form className="form-auth">
            <input
              className="input-login"
              type="email"
              placeholder="Masukan Email"
              required
            />
             <div className="password-container">
              <input
                className="input-login"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </form>
          <p>
            Belum mempunyai akun? <a href="/register">Daftar</a>
          </p>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
