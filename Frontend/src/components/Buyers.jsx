import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import axios from "axios";
import toast from "react-hot-toast";

function Buyers() {
    const [isEditing, setIsEditing] = useState(false);
    const [id, setId] = useState(null);
    const [buyers, setBuyers] = useState([]);
    const [newBuyer, setNewBuyer] = useState({
        fullName: "",
        gender: 0,
        country: "",
        phoneNumber: "",
        email: ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get(API_URL + "/client")
            .then(response => {
                setBuyers(response.data);
            })
            .catch(() => {
                setBuyers([]);
            });
    }, []);

    const validateInput = () => {
        const newErrors = {};
        const phoneRegex = /^\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const countryRegex = /^[a-zA-Z\s]+$/;

        if (!newBuyer.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        if (!countryRegex.test(newBuyer.country)) {
            newErrors.country = "Country must contain only letters.";
        }

        if (!phoneRegex.test(newBuyer.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be 10 digits.";
        }

        if (!emailRegex.test(newBuyer.email)) {
            newErrors.email = "Invalid email format.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddBuyer = () => {
        if (validateInput()) {
            axios
                .post(API_URL + "/client", newBuyer)
                .then(() => {
                    toast.success("New client was added successfully");
                    axios
                        .get(API_URL + "/client")
                        .then(response => {
                            setBuyers(response.data);
                        })
                        .catch(() => {
                            setBuyers([]);
                        });
                })
                .catch(() => {
                    toast.error("New client can not be added");
                });

            clearInputs();
        }
    };

    const clearInputs = () => {
        setNewBuyer({
            fullName: "",
            gender: 0,
            dateOfBirth: "",
            country: "",
            phoneNumber: "",
            email: ""
        });
        setErrors({});
    };

    const handleEditBuyer = () => {
        if (validateInput()) {
            axios
                .put(API_URL + "/client/" + id, newBuyer)
                .then(() => {
                    toast.success("Client was saved successfully");
                    axios
                        .get(API_URL + "/client")
                        .then(response => {
                            setBuyers(response.data);
                        })
                        .catch(() => {
                            setBuyers([]);
                        });
                })
                .catch(() => {
                    toast.error("Client can not be saved");
                })
                .finally(() => setIsEditing(false));

            clearInputs();
        }
    };

    const handleDeleteBuyer = id => {
        axios
            .delete(API_URL + "/client/" + id)
            .then(() => {
                toast.success("Client was deleted successfully");
                axios
                    .get(API_URL + "/client")
                    .then(response => {
                        setBuyers(response.data);
                    })
                    .catch(() => {
                        setBuyers([]);
                    });
            })
            .catch(() => {
                toast.error("Client can not be deleted");
            })
            .finally(() => setIsEditing(false));
    };

    const handleEditClick = (id, client) => {
        setId(id);
        setIsEditing(true);
        setNewBuyer(client);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Buyers Page</h1>

            <form style={styles.form} onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={newBuyer.fullName}
                    onChange={e =>
                        setNewBuyer({ ...newBuyer, fullName: e.target.value })
                    }
                    style={styles.input}
                />
                {errors.fullName && (
                    <p style={styles.error}>{errors.fullName}</p>
                )}

                <select
                    id="gender"
                    value={newBuyer.gender}
                    onChange={e =>
                        setNewBuyer({ ...newBuyer, gender: +e.target.value })
                    }
                    style={styles.input}>
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                </select>

                <input
                    type="text"
                    placeholder="Country"
                    value={newBuyer.country}
                    onChange={e =>
                        setNewBuyer({ ...newBuyer, country: e.target.value })
                    }
                    style={styles.input}
                />
                {errors.country && <p style={styles.error}>{errors.country}</p>}

                <input
                    type="text"
                    placeholder="Phone Number (10 digits)"
                    value={newBuyer.phoneNumber}
                    onChange={e =>
                        setNewBuyer({
                            ...newBuyer,
                            phoneNumber: e.target.value
                        })
                    }
                    style={styles.input}
                />
                {errors.phoneNumber && (
                    <p style={styles.error}>{errors.phoneNumber}</p>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={newBuyer.email}
                    onChange={e =>
                        setNewBuyer({ ...newBuyer, email: e.target.value })
                    }
                    style={styles.input}
                />
                {errors.email && <p style={styles.error}>{errors.email}</p>}

                {isEditing ? (
                    <div style={{ display: "flex", gap: "2rem" }}>
                        <button
                            type="button"
                            onClick={handleEditBuyer}
                            style={styles.saveBtn}>
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                clearInputs();
                                setIsEditing(false);
                            }}
                            style={styles.cancelBtn}>
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={handleAddBuyer}
                        style={styles.button}>
                        Add Buyer
                    </button>
                )}
            </form>

            <table style={styles.table}>
                <thead style={{ paddingBottom: "1rem" }}>
                    <tr>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {buyers.map(buyer => (
                        <tr key={buyer.id} style={{ paddingBottom: "1rem" }}>
                            <td>{buyer.fullName}</td>
                            <td>{buyer.gender == 0 ? "Male" : "Female"}</td>
                            <td>{buyer.country}</td>
                            <td>{buyer.phoneNumber}</td>
                            <td>{buyer.email}</td>
                            <td>
                                <button
                                    style={styles.editButton}
                                    onClick={() =>
                                        handleEditClick(buyer.id, buyer)
                                    }>
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteBuyer(buyer.id)}
                                    style={styles.deleteButton}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        width: "70%",
        marginLeft: "20%",
        padding: "20px",
        backgroundColor: "#79c7b1", 
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "28px",
        fontWeight: "bold",
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "100%",
    },
    error: {
        color: "red",
        fontSize: "12px",
        margin: "0",
    },
    button: {
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        border: "none",
        backgroundColor: "#4caf50", 
        color: "#fff",
        cursor: "pointer",
        alignSelf: "center",
    },
    saveBtn: {
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        border: "none",
        backgroundColor: "green",
        color: "#fff",
        cursor: "pointer",
        width: "fit-content",
    },
    cancelBtn: {
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        border: "none",
        backgroundColor: "red",
        color: "#fff",
        cursor: "pointer",
        width: "fit-content",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "left",
        marginTop: "20px",
        borderSpacing: "0 10px",
    },
    tableHeader: {
        backgroundColor: "#4caf50",
        color: "#fff",
        fontSize: "16px",
        textAlign: "left",
        padding: "10px",
    },
    tableRow: {
        backgroundColor: "#fff",
        padding: "10px",
    },
    deleteButton: {
        backgroundColor: "red",
        color: "#fff",
        border: "none",
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "10px",
    },
    editButton: {
        backgroundColor: "green",
        color: "#fff",
        border: "none",
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "10px",
    },
};

export default Buyers;

