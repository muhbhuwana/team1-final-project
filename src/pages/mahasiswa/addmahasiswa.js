import React from 'react';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import './css/mahasiswa.css'
import { useNavigate } from 'react-router-dom';

const TambahMahasiswa = () => {
    const navigate = useNavigate();
    return (
        <div className="wrapper d-flex justify-content-center align-items-center">

            <div className="tambahprodukcontainer">
                <Container>
                    <Form className="m-5">
                        <div className="loginform">
                            <h3 className="text-center mb-4">MAHASISWA</h3>
                            <FormGroup floating>
                                <Input
                                    id="nim"
                                    name="nim"
                                    placeholder="nim"
                                    type="text"
                                />
                                <Label for="nim">
                                    NIM
                                </Label>
                            </FormGroup>
                            {' '}
                            <FormGroup floating>
                                <Input
                                    id="NamaLengkap"
                                    name="namalengkap"
                                    placeholder="NamaLengkap"
                                    type="text"
                                />
                                <Label for="NamaLengkap">
                                    NAMA LENGKAP
                                </Label>
                            </FormGroup>
                            {' '}
                            <FormGroup floating>
                                <Input
                                    id="Alamat"
                                    name="alamat"
                                    placeholder="Alamat"
                                    type="textarea"
                                />
                                <Label for="Alamat">
                                    ALAMAT
                                </Label>
                            </FormGroup>
                            {' '}
                            <Label check className="radio">
                                JENIS KELAMIN
                            </Label>
                            <FormGroup check>
                                <Input type="radio" name="jeniskelamin" value="Laki-Laki" /> Laki-Laki
                            </FormGroup>
                            <FormGroup check>
                                <Input type="radio" name="jeniskelamin" value="Perempuan" /> Perempuan
                            </FormGroup>
                            {' '}
                            <br />
                            <FormGroup floating>

                                <Input
                                    id="hobi"
                                    name="hobi"
                                    type="select"
                                >
                                    <option selected>
                                        SILAHKAN PILIH
                                    </option>
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                                    </option>
                                    <option>
                                        5
                                    </option>
                                </Input>
                                <Label for="hobi">
                                    Hobi
                                </Label>
                            </FormGroup>
                            {' '}
                            <FormGroup floating>
                                <Input
                                    id="Komentar"
                                    name="komentar"
                                    placeholder="Komentar"
                                    type="textarea"
                                />
                                <Label for="Komentar">
                                    KOMENTAR
                                </Label>
                            </FormGroup>

                            <Button className="bg-primary">
                                Submit
                            </Button>&nbsp;&nbsp;
                            {/* <Button className="bg-warning" onClick={handleClick}>
                                Reset
                            </Button> */}
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    )
};

export default TambahMahasiswa