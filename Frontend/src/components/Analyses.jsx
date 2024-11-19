import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import axios from "axios";

function Analyses() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        axios
            .get(API_URL + "/deals")
            .then(response => {
                setSales(response.data);
            })
            .catch(() => {
                setSales([]);
            });
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Analyses Page</h1>
            <div style={styles.cardContainer}>
                <div style={styles.card}>
                    <h2>Total Deals</h2>
                    <p style={styles.number}>{sales?.length || 0}</p>
                </div>
                <div style={styles.card}>
                    <h2>Completed Deals</h2>
                    <p style={styles.number}>
                        {sales?.filter(x => x.status === "Completed").length ||
                            0}
                    </p>
                </div>
                <div style={styles.card}>
                    <h2>Canceled Deals</h2>
                    <p style={styles.number}>
                        {sales?.filter(x => x.status === "Cancelled").length ||
                            0}
                    </p>
                </div>
                <div style={styles.card}>
                    <h2>Deals in Progress</h2>
                    <p style={styles.number}>
                        {sales?.filter(x => x.status === "Pending").length || 0}
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "80%",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
    },
    title: {
        marginBottom: "20px"
    },
    cardContainer: {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        flexWrap: "wrap"
    },
    card: {
        flex: "1 1 calc(25% - 20px)",
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
    },
    number: {
        fontSize: "2rem",
        marginTop: "10px"
    }
};

export default Analyses;
