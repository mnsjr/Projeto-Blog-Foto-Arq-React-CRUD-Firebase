// Navlink
import { NavLink } from "react-router-dom";

// Hooks
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                blog <span>FotoArq</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Início
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Sobre
                    </NavLink>
                </li>

                {!user && (
                    <>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Registrar
                            </NavLink>
                        </li>
                    </>
                )}

                {user && (
                    <>
                        <li>
                            <NavLink
                                to="/posts/create"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Novo Post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}

                {user && (
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
