import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())


app.get('/GETUsuarios', (req, res) => {
    const query = 'SELECT * FROM Usuario;';

    const usuarios = [{
        UsuarioID: 1,
        UsuarioLogin: "Teste1"
    },
    {
        UsuarioID: 2,
        UsuarioLogin: "Teste2"
    },
    {
        UsuarioID: 3,
        UsuarioLogin: "Teste3"
    },
    {
        UsuarioID: 4,
        UsuarioLogin: "Teste4"
    },]

    console.log('Usuários buscados com sucesso!');
    res.send({ Sucesso: true, usuarios: usuarios });

});



app.listen(3001, () => {
    console.log("Servidor rodando!")
})
