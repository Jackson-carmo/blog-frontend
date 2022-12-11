import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [blog, setBlog] = useState({
    nome: "",
    titulo: "",
    conteudo: "",
  });

  const { nome, titulo, conteudo } = blog;

  const onInputChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPost();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/alterar/${id}`, blog);
    navigate("/");
  };

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:8080/api/buscar-id/${id}`);
    setBlog(result.data);
  };

  return (
    <div className="new-post">
      <h2>Atualizar Post</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
          <label htmlFor="user">Usuario:</label>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={(e) => onInputChange(e)}
            placeholder="Digite o nome de usuario"
          />
        </div>

        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="titulo"
            value={titulo}
            onChange={(e) => onInputChange(e)}
            placeholder="Digite o título"
          />
        </div>

        <div className="form-control">
          <label htmlFor="content">Conteúdo:</label>
          <textarea
            name="conteudo"
            value={conteudo}
            onChange={(e) => onInputChange(e)}
            placeholder="Digite o conteúdo"
          ></textarea>
        </div>
        <input type="submit" value="Atualizar" className="btn" />
        <Link to={'/'} className="btn">Voltar</Link>
      </form>
    </div>
  );
}

export default Edit;
