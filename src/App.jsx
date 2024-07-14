import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BerandaPage from './pages/BerandaPage';
import PengelolaanSampahPage from './pages/PengelolaanSampahPage';
import KolamRenangPage from './pages/KolamRenangPage';
import ProduksiBerasPage from './pages/ProduksiBerasPage';
import TokoDesaPage from './pages/TokoDesaPage';
import MitraPage from './pages/MitraPage';
import TokoPage from './pages/TokoPage';
import DesaWisataPage from './pages/DesaWisataPage';
import UMKMPage from './pages/UMKMPage';
import BeritaPage from './pages/BeritaPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BerandaPage/>} />
        <Route exact path='/Login' element={<LoginPage/>}/>
        <Route exact path='/Register' element={<RegisterPage/>}/>

        <Route exact path='/Pengelolaan-Sampah' element={<PengelolaanSampahPage/>} />
        <Route exact path='/Kolam-Renang' element={<KolamRenangPage/>}/>
        <Route exact path='/Taman-Kuliner' element={<KolamRenangPage/>}/>
        <Route exact path='/Produksi-Beras' element={<ProduksiBerasPage/>}/>
        <Route exact path='/Toko-Desa' element={<TokoDesaPage/>}/>
        <Route exact path='/Desa-Wisata' element={<DesaWisataPage/>}/>
        <Route exact path='/UMKM' element={<UMKMPage/>}/>

        <Route exact path='/Mitra' element={<MitraPage/>} />
        <Route exact path='/Berita' element={<BeritaPage/>}/>
        <Route exact path='/Toko' element={<TokoPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
