import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    useLocation
  } from "react-router-dom";
import Mahasiswa from './pages/mahasiswa/mahasiswa'
import TambahMahasiswa from './pages/mahasiswa/addmahasiswa'

function ShippingScreen() {
    return <div className="page">Shipping</div>;
  }

function Routes2() {
    return (
       <BrowserRouter>
       <Routes>
       <Route path="/add" element={ <TambahMahasiswa /> } />
       <Route path="/list" element={<Mahasiswa />} />
       </Routes>
     </BrowserRouter>
    );
}
export default Routes;