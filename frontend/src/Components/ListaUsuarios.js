import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import wallpaper from '../images/wallpaper_pacman.jpg';
import gatoNoia from '../images/gatonoia-removebg-preview.png';

const wallpaperStyle = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
};

const corpoCadastroStyle = {
    position: 'absolute',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '45vh',
    marginLeft: '600px'
};

const gatoNoiaStyle = {
    position: 'absolute',
    zIndex: 2,
    marginTop: '965px',
    marginLeft: '1990px'
};

const UserList = () => {
    const [users, setUsers] = useState([]);

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
                    <table style={{ color: 'whitesmoke', border: '1px solid whitesmoke' }}>
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
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList;
