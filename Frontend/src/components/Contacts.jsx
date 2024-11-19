import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "../utils/constants";

function Contacts() {
    const handleSubmit = e => {
        e.preventDefault();

        const fullName = e.target["name"].value;
        const topic = e.target["topic"].value;
        const description = e.target["description"].value;

        if (!fullName.trim() || !topic.trim() || !description.trim()) {
            toast.error("Fill all the fields!");
        }

        axios
            .post(API_URL + "/requests", { fullName, topic, description })
            .then(res => toast.success(res.data))
            .catch(() =>
                toast.error("Error occurred when submitting a request")
            )
            .finally(e.target.reset());
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Contacts</h1>

            <div style={styles.infoSection}>
                <div style={styles.contactDetails}>
                    <h2>Ours contacts</h2>
                    <p>
                        <strong>Telephone:</strong> +380 123 456 789
                    </p>
                    <p>
                        <strong>Email:</strong> support@crm-system.com
                    </p>
                    <p>
                        <strong>Address:</strong> Zhylianska Street, 75, Kyiv,
                        Ukraine
                    </p>
                </div>

                <div style={styles.map}>
                    <h2>We are on the map</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.780432454764!2d30.501218942387084!3d50.43930038168524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef1c68c9a5f%3A0x3b98e006521a4958!2sEurasia%20Business%20Centre!5e0!3m2!1sen!2sua!4v1732030494291!5m2!1sen!2sua"
                        width="700"
                        height="350"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"></iframe>
                </div>
            </div>

            <div style={styles.formSection}>
                <h2 style={{ marginBottom: "1rem" }}>Contact us</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Full Name
                        <input
                            type="text"
                            name="name"
                            style={styles.input}
                            required
                        />
                    </label>
                    <label>
                        Topic
                        <input
                            type="text"
                            name="topic"
                            style={styles.input}
                            required
                        />
                    </label>
                    <label>
                        Description
                        <textarea
                            name="description"
                            rows="4"
                            style={styles.textarea}
                            required></textarea>
                    </label>
                    <button type="submit" style={styles.button}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif"
    },
    heading: {
        fontSize: "32px",
        textAlign: "center",
        marginBottom: "20px"
    },
    infoSection: {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        marginBottom: "20px"
    },
    contactDetails: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    map: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    },
    formSection: {
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    },
    input: {
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc"
    },
    textarea: {
        width: "100%",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc"
    },
    button: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 15px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "1rem"
    }
};

export default Contacts;
