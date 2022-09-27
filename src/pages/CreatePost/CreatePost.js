// React and Router
import { Navigate } from "react-router-dom";

// Context
import { useAuthValue } from "../../context/AuthContext";

// Hooks
import { useState } from "react";

// CSS
import styles from "./CreatePost.module.css";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.createpost}>
            <h1>Criar Post</h1>
            <p>Compartilhe o seu conhecimento!</p>

            <form onClick={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input
                        type="text"
                        name="title"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity("Campo obrigatório")
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                        placeholder="Pense em um título intuitivo"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>

                <label>
                    <span>URL da Imagem:</span>
                    <input
                        type="text"
                        name="image"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity("Campo obrigatório")
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                        placeholder="Insira uma imagem que representa o tem do seu post"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>

                <label>
                    <span>Conteúdo:</span>
                    <textarea
                        name="body"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity("Campo obrigatório")
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                        placeholder="Insira o conteúdo do post"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                        cols="30"
                        rows="10"
                    ></textarea>
                </label>

                <label>
                    <span>Tags:</span>
                    <input
                        type="text"
                        name="tags"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity("Campo obrigatório")
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                        placeholder="Insira as tags separadas por vírgula"
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                <button className="btn">Postar</button>
                {/* {!loading && <button className="btn">Registrar</button>}
                {loading && (
                    <button className="btn" disabled>
                        Aguarde...
                    </button>
                )}
                {error && <p className="error">{error}</p>} */}
            </form>
        </div>
    );
};

export default CreatePost;
