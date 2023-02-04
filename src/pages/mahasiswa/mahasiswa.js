import React from 'react';
import './css/mahasiswa.css'
import { Container, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Mahasiswa = () => {
    const navigate = useNavigate();
    
    return (

        <div className="mahasiswacontainer">
            <Container>
                <div className="tambahmahasiswa bg-primary text-white" onClick={() => navigate('/menu')}>Kembali</div>
                <Table hover>
                    <thead>
                        <tr>
                        <th>
                            No
                        </th>
                        <th>
                            NIM
                        </th>
                        <th>
                            NAMA LENGKAP
                        </th>
                        <th>
                            JENIS KELAMIN
                        </th>
                        <th>
                            HOBI
                        </th>
                        <th>
                            ALAMAT
                        </th>
                        <th>
                            KOMENTAR
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                1
                            </th>
                            <td>
                                Mark
                            </td>
                            <td>
                                Otto
                            </td>
                            <td>
                                @mdo
                            </td>
                            <td>
                                @mdo
                            </td>
                            <td>
                                @mdo
                            </td>
                            <td>
                                @mdo
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
  };

export default Mahasiswa