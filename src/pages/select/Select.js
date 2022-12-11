import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Select.css";

function Select() {
  const [blog, setBlog] = useState({
    nome: "",
    titulo: "",
    conteudo: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPost();
  });

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:8080/api/buscar-id/${id}`);
    setBlog(result.data);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="usuario">Usuario: {blog.nome}</h1>

        <h3 className="titulo">{blog.titulo}</h3>
        <p className="conteudo">{blog.conteudo}</p>

        <Link to={"/"} className="btn-select">
          Voltar
        </Link>

        <div className="n"></div>
      </div>
    </div>
  );
}

export default Select;
