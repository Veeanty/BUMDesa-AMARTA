import "./Header.css";
import "@fontsource/poppins";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IoCart, IoCall } from "react-icons/io5";
import Logo from "../../assets/img/Logo-BUMDesa-NoBG.png";
import katalog from "../../assets/docs/Katalog_BUMDES_Amarta.pdf";

const Header = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" sticky="top">
      <Container className="container1" fluid>
        <Navbar.Brand className="brandlogo" href="/">
          <img src={Logo} alt="Logo Perusahaan" width="100" height="85" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="btn-link" href="/">
              Beranda
            </Nav.Link>
            <NavDropdown title="Unit Usaha" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Pengelolaan Sampah
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Kuliner</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Kolam Renang
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Produksi Beras
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"> Toko Desa</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="btn-link" href="#bag-1">
              Mitra Usaha
            </Nav.Link>
            <Nav.Link className="btn-link" href="#bag-1">
              Berita
            </Nav.Link>
            <Nav.Link className="btn-link" href={katalog} download>
            Download Katalog
        </Nav.Link>
          </Nav>
          <Nav>
            <a className="btn btn-navbar"  href="https://wa.me/6287838523909">
              <IoCall className="icon-spacing" />
              Hubungi Kami
            </a>
            <a className="btn btn-navbar" href="/login">
              <IoCart className="icon-spacing" />
              Toko
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
