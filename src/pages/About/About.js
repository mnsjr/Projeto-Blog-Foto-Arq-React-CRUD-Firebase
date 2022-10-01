// CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.about}>
            <h1>
                Sobre o blog <span>FotoArq</span>
            </h1>
            <p>
                Blog sobre Fotografía profissional técnica de Arquitetura,
                Interiores e Paisagismo.
            </p>
            <Link to="/posts/create" className="btn">
                Criar Post
            </Link>
        </div>
    );
};

export default About;
