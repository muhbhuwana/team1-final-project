import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import TambahMahasiswa from './pages/mahasiswa/addmahasiswa'
import Mahasiswa from './pages/mahasiswa/mahasiswa'
import Login from './Login'
import Menu from './Menu'
import DataSaya from './pages/mahasiswa/DataSaya'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        
       <Route path="/add" element={ <TambahMahasiswa /> } />
       <Route path="/list" element={<Mahasiswa />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/login" element={<Login />} />
       <Route path="/saya" element={<DataSaya />} />
      </Routes>
    </BrowserRouter>
    )
  }
}