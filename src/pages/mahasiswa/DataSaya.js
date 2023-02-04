import React from 'react';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText
} from 'reactstrap';
import './css/mahasiswa.css'
import { useNavigate } from 'react-router-dom';

const DataSaya = () => {
    const navigate = useNavigate();

    return (
        <div className="wrapper d-flex justify-content-center align-items-center">

            <div className="tambahprodukcontainer">
                <div className="tambahmahasiswa bg-primary text-white" onClick={() => navigate('/menu')}>Kembali</div>
                <Container>
                <h3 className="text-center mb-4">DATA DIRI</h3>
                    <ListGroup  flush>
                        <ListGroupItem>
                            <ListGroupItemHeading>NIM</ListGroupItemHeading>
                            <ListGroupItemText>
                                {/* Nama */}
                                202302000227201
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>Nama Lengkap</ListGroupItemHeading>
                            <ListGroupItemText>
                            Achmad Kalla
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>Alamat</ListGroupItemHeading>
                            <ListGroupItemText>
                            Jl. Ciledug Raya No.18, RT.7/RW.5, Cipulir, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12230
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>Jenis Kelamin</ListGroupItemHeading>
                            <ListGroupItemText>
                                Laki Laki
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>Hobi</ListGroupItemHeading>
                            <ListGroupItemText>
                                Mendengarkan Musik
                            </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ListGroupItemHeading>Komentar</ListGroupItemHeading>
                            <ListGroupItemText>
                                -
                            </ListGroupItemText>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
            </div>
        </div>
    )
};

export default DataSaya