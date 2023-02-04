import React, { useState } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import './pages/mahasiswa/css/login.css'
import Routes2 from './Routes';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== 'admin@gmail.com' || password !== '123') {
            setError('Invalid username or password.');
        } else {
            setError('');
            navigate('/menu');
        }

        return;
    };

    return (
        <div className="wrapper d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit}>
                <div className="loginform">
                    <h3 className="text-center mb-4">LOGIN FORM</h3>
                    <FormGroup floating>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label for="exampleEmail">
                            Email
                        </Label>
                    </FormGroup>
                    {' '}
                    <FormGroup floating>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Password"
                            type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Label for="examplePassword">
                            Password
                        </Label>
                    </FormGroup>
                    {' '}
                    <p>Belum mempunyai akun ?
                        <Button color="link" onClick={() => navigate('/add')}>Daftar Sekarang</Button>
                        </p>
                    {error && <div class="alert alert-danger p-1" role="alert">{error} </div>}
                    <Button color="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
};

export default Login