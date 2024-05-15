import React from 'react';
import wallpaper from '../images/wallpaper_pacman.jpg';
import gatoTrevoso from '../images/gatotrevoso-removebg-preview.png';

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  textAlign: 'center',
  marginTop: '20vh', // Adiciona espaço acima dos botões para evitar que sejam cortados na parte superior
};


const wallpaperStyle = {
  width: '100%',
  height: '100vh',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
};

const gatoTrevosoStyle = {
  position: 'absolute',
  zIndex: 3,
  marginTop: '50%', // Ajusta a posição vertical do gato
  marginLeft: '50%', // Ajusta a posição horizontal do gato
  transform: 'translate(-50%, -50%)', // Centraliza o gato
};


function Inicio() {
  return (
    <div style={{ position: 'relative' }}>
      <img src={wallpaper} alt="Wallpaper" style={wallpaperStyle} />
      <div className="container" style={buttonStyle} >
        <img src={gatoTrevoso} alt="Gato trevoso" style={gatoTrevosoStyle} />
        <div className="row">
          <div className="col-md-6">
            <div className="text-center">
              <a href="/cadastro" className="btn btn-primary">
                Cadastrar usuário
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <a href="/lista-usuarios" className="btn btn-success">
                Listar usuários
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
