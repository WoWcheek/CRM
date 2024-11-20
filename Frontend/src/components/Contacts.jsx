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
                        <strong>Address:</strong> Oleksandr Polya avenue, 40, Dnipro,
                        Ukraine
                    </p>
                </div>

                <div style={styles.map}>
                    <h2>We are on the map</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9645.409440611523!2d35.022792420459!3d48.46471725728905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2c650ba5313%3A0x53f552d16c4dc477!2z0LLRg9C70LjRhtGPINCS0L7RgNC-0LTRgNGB0LrQsNGPINGD0YHRjNC60L7RgNC40LvQuNC90L3Ri9C5INC-0LHQuy4sIDQwLCDQlNC10LLRgdC60L7QvdC40LUg0KHRgtC-0LvRjNC90YwsINCa0LjRl9CyLCDQmtC40ZfQsiwgNzkwMDA!5e0!3m2!1suk!2sua!4v1732030494291!5m2!1suk!2sua"
                        width="100%"
                        height="350"
                        style={{ border: 0, borderRadius: "8px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
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
        width: "70%", 
        marginLeft: "20%", 
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    },
    heading: {
        fontSize: "32px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#333",
    },
    infoSection: {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        marginBottom: "20px",
    },
    contactDetails: {
        flex: 1,
        backgroundColor: "#79c7b1", 
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "left",
    },
    map: {
        flex: 1,
        backgroundColor: "#79c7b1", 
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    formSection: {
        backgroundColor: "#79c7b1",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    textarea: {
        width: "100%",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "16px",
        resize: "none", 
    },
    button: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "12px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "15px",
        fontSize: "16px",
        transition: "background-color 0.3s",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};

export default Contacts;

