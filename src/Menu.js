import React from 'react';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    ListGroup, ListGroupItem,ListGroupItemHeading
} from 'reactstrap';
import './pages/mahasiswa/css/login.css'
import { useNavigate } from 'react-router-dom';


const Menu = () => {
    const navigate = useNavigate();

    return (
        <div className="wrapper d-flex justify-content-center align-items-center">
            <Container>
                <h3 className="text-center mb-4">MENU</h3>
                <ListGroup flush>
                    <ListGroupItem tag="a" onClick={() => navigate('/list')}>
                        Data Mahasiswa
                    </ListGroupItem>
                    <ListGroupItem tag="a" onClick={() => navigate('/saya')}>
                        Data Saya
                    </ListGroupItem>
                    <ListGroupItem tag="a" onClick={() => navigate('/login')}>
                        Log Out
                    </ListGroupItem>
                </ListGroup>
            </Container>
        </div>
    )
};

export default Menu