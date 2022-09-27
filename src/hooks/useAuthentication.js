// Firebase Imports
import { db } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

// Hooks
import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // cleanup - deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    // Register
    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, { displayName: data.displayName });

            setLoading(false);

            return user;
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let sistemErrorMessagem;

            if (error.message.includes("Password")) {
                sistemErrorMessagem =
                    "A senha precisa ter ao menos 6 caracteres.";
            } else if (error.message.includes("already")) {
                sistemErrorMessagem = "Email já cadastrado.";
            } else {
                sistemErrorMessagem =
                    "Ocorreu um erro, por favor tente mais tarde.";
            }

            setLoading(false);
            setError(sistemErrorMessagem);
        }
    };

    // Logout - sign out
    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    };

    // Login - sign in
    const login = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);
        } catch (error) {
            let sistemErrorMessagem;

            if (error.message.includes("user-not-found")) {
                sistemErrorMessagem = "Usuário não encontrado.";
            } else if (error.message.includes("wrong-password")) {
                sistemErrorMessagem = "Senha Inválida.";
            } else {
                sistemErrorMessagem =
                    "Ocorreu um erro, por favor tente mais tarde.";
            }

            setError(sistemErrorMessagem);
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    };
};
