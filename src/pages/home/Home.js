import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {

const [blog, setBlog] = useState([]);

useEffect(() => {
    loadPost();
},[]);

const loadPost = async () => {
  const result = await axios.get("http://localhost:8080/api/buscar");
  setBlog(result.data);
}

const deletePost = async (id) => {
  await axios.delete(`http://localhost:8080/api/excluir/${id}`);
  loadPost();
}

    return (
        <div className="home">
        <h1>Últimos posts</h1>
      
          
          
            {
              blog.map((blog) => (
                <div className="post" key={blog.id}>
            <div>
              <h2>Usuario: {blog.nome}</h2>
            <h3>{blog.titulo}</h3>
            <p className='conteudo-home'>{blog.conteudo}</p>
            <div>
            <Link to={`/select/${blog.id}`} className="btn">Ler mais</Link>
            <Link to={`/edit/${blog.id}`} className="btn">Editar</Link>
            <button className="btn-delete" onClick={() => deletePost(blog.id)}>Apagar post</button>
            </div>
            </div>
            </div>)
              )
            }
          
          
      </div>
    )
}

export default Home;