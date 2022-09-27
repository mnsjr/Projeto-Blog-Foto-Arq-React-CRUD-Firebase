// Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

// CSS
import styles from "./Register.module.css";

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password,
        };

        const res = await createUser(user);

        if (password !== confirmPassword) {
            setError("Confirmação da senha diferente da senha.");
            return;
        }

        console.log(res);
    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={styles.register}>
            <h1>Registrar</h1>
            <p>Crie seu usuário e compartilhe suas histórias.</p>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity("Campo obrigatório")
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                        placeholder="Nome de usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>

                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity("Campo obrigatório")
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                        placeholder="Email de usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity("Campo obrigatório")
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <label>
                    <span>Confirmação de Senha:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity("Campo obrigatório")
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>

                {!loading && <button className="btn">Registrar</button>}
                {loading && (
                    <button className="btn" disabled>
                        Aguarde...
                    </button>
                )}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Register;
