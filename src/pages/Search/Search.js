// CSS
import styles from "./Search.module.css";

// React Router
import { Link } from "react-router-dom";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// components
import PostDetail from "../../components/PostDetail";

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts } = useFetchDocuments("posts", search);

    return (
        <div className={styles.search_container}>
            <h1>Resultados encontrados para: {search}</h1>
            <div className="post-list">
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>
                            Não foram encontrados posts a partir da sua busca...
                        </p>
                        <Link to="/" className="btn btn-dark">
                            Voltar
                        </Link>
                    </div>
                )}
                {posts &&
                    posts.map((post) => (
                        <div>
                            <PostDetail key={post.id} post={post} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Search;
