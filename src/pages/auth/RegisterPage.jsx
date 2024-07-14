import "./Auth.css";
import logo from "../../assets/img/BUMDesa.jpg";


const RegisterPage = () => {
  return (
    <div className="body">

 
    <div className="body-container">
      <div className="login-container">
        <div className="login-form">
          <h1 className="judul-login">Buat Akun Baru</h1>
          <img src={logo} alt="Logo" className="logo-login" />
          <h8>Silahkan daftar menggunakan informasi anda</h8>
          <form className="form-auth">
            <input
              className="input-login"
              type="text"
              placeholder="Masukan Username"
              required
            />
            <input
              className="input-login"
              type="email"
              placeholder="Masukan Email"
              required
            />
            <input
              className="input-login"
              type="password"
              placeholder="Masukan Password"
              required
            />
            <input
              className="input-login"
              type="password"
              placeholder="Ulangi Password"
              required
            />
            <button className="button-login" type="submit">
              DAFTAR
            </button>
          </form>
          <p>
            Sudah mempunyai akun? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RegisterPage;
