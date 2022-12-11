import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

function Post() {

const navigate = useNavigate();

const [blog, setBlog] = useState({
  nome:"",
  titulo:"",
  conteudo:""
});

const  { nome,  titulo, conteudo } = blog;

const onInputChange = (e) => {
      setBlog({ ...blog, [e.target.name]: e.target.value });
}

const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/api/inserir", blog);
      navigate("/");
}

    return (
        <div className="new-post">
        <h2>Inserir novo Post</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-control">
            <label htmlFor="user">Usuario:</label>
            <input 
            type="text" 
            name="nome" 
            id="nome"
            placeholder="Digite o nome de usuario"
            value={nome}
            onChange={(e) => onInputChange(e)}
            />
          </div>
  
          <div className="form-control">
            <label htmlFor="title">Título:</label>
            <input 
            type="text" 
            name="titulo" 
            id="titulo"
            placeholder="Digite o título"
            value={titulo}
            onChange={(e) => onInputChange(e)}
            />
          </div>
  
          <div className="form-control">
            <label htmlFor="content">Conteúdo:</label>
            <textarea 
            name="conteudo" 
            id="conteudo"
            placeholder="Digite o conteúdo"
            value={conteudo}
            onChange={(e) => onInputChange(e)}
            ></textarea>
          </div>
            <input 
            type="submit" 
            value="Criar Post" 
            className="btn" />
        </form>
      </div>
    )
}

export default Post;