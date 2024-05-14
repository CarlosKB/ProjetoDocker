import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import Axios from 'axios';
import Swal from 'sweetalert2';
import wallpaper from '../images/wallpaper_pacman.jpg';
import gatoNoia from '../images/gatonoia-removebg-preview.png'

const wallpaperStyle = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    position: 'absolute', // Permite que o wallpaper ocupe a tela inteira
    top: 0,
    left: 0,
    zIndex: 1, // Coloca o wallpaper em um plano inferior
};

const corpoCadastroStyle = {
    position: 'absolute',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '45vh',
    marginLeft: '600px'
}

const gatoNoiaStyle = {
    position: 'absolute',
    zIndex: 2,
    marginTop: '965px',
    marginLeft: '1990px'
}

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false); // Controla a visibilidade do modal
    const [selectedUser, setSelectedUser] = useState(null);
    const [editedLogin, setEditedLogin] = useState('');
    const [editedSenha, setEditedSenha] = useState('');
    const [editedId, setEditedId] = useState('');

    const GETUsuarios = async () => {
        try {
            const response = await Axios.get(`${process.env.REACT_APP_API_URL}/GETUsuarios`);
            if (response.data.Sucesso) {
                return response.data.usuarios;
            } else {
                console.error('Erro ao buscar usuários:', response.data.msg);
                return [];
            }
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return [];
        }
    };

    const fetchUsers = async () => {
        const users = await GETUsuarios();
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <div style={{ position: 'relative' }}>
            <img src={wallpaper} alt="Wallpaper" style={wallpaperStyle} />
            <div style={corpoCadastroStyle}>
                <img src={gatoNoia} alt="Gato noia" style={gatoNoiaStyle} />
                <div className="container">
                    <h2 style={{ color: 'whitesmoke' }}>Lista de Usuários</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{ width: '50px'}}>ID</th>
                                <th style={{ width: '50px'}}>Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.UsuarioID}>
                                    <td>{user.UsuarioID}</td>
                                    <td>{user.UsuarioLogin}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default UserList;
