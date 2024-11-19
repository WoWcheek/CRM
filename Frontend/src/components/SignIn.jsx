import axios from "axios";
import { useState } from "react";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignIn = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleAuth = async endpoint => {
        const request = {
            username,
            password
        };

        if (request.username.length === 0 || request.password.length === 0) {
            toast.error("Fill in all the fields");
            return;
        }

        const res = await axios.post(API_URL + "/auth/" + endpoint, request);

        if (res?.data?.token) {
            toast.success("Logged in successfully");
            localStorage.setItem("authToken", res.data.token);
            navigate("/");
        } else {
            toast.error("Error occurred trying to sign in");
        }
    };

    const signIn = async e => {
        e.preventDefault();
        await handleAuth("login");
    };

    const registerAdmin = async e => {
        e.preventDefault();
        await handleAuth("register-admin");
        await handleAuth("login");
    };

    const register = async e => {
        e.preventDefault();
        await handleAuth("register");
        await handleAuth("login");
    };

    return (
        <main style={styles.wrapper}>
            <div style={styles.container}>
                <h1 style={styles.title}>Sign In</h1>
                <form style={styles.form}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username..."
                        style={styles.input}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password..."
                        style={styles.input}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div style={styles.buttonsContainer}>
                        <button
                            style={{
                                ...styles.button
                            }}
                            onClick={register}>
                            Register
                        </button>
                        <button style={styles.button} onClick={signIn}>
                            Sign In
                        </button>
                    </div>
                    <button style={styles.button} onClick={registerAdmin}>
                        Register admin
                    </button>
                </form>
            </div>
        </main>
    );
};

export default SignIn;

const styles = {
    wrapper: {
        width: "100%",
        display: "flex",
        "justify-content": "center",
        paddingTop: "100px"
    },
    buttonsContainer: {
        display: "flex",
        marginBottom: "1rem",
        justifyContent: "space-around"
    },
    container: {
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        height: "500px",
        width: "500px",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
        gap: "10px"
    },
    input: {
        width: "300px",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "1.5rem"
    },
    title: {
        textAlign: "center",
        marginBottom: "3rem"
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease, transform 0.2s ease"
    }
};
