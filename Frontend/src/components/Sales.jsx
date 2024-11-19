import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import toast from "react-hot-toast";

function Sales() {
    const [isEditing, setIsEditing] = useState(false);
    const [id, setId] = useState(null);
    const [sales, setSales] = useState([]);
    const [buyers, setBuyers] = useState([]);
    const [newSale, setNewSale] = useState({
        price: "",
        title: "",
        clientId: "",
        description: ""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get(API_URL + "/client")
            .then(response => {
                setBuyers([{ id: "", fullName: "" }, ...response.data]);
            })
            .catch(() => {
                setBuyers([]);
            });
    }, []);

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

    const validateInput = () => {
        const newErrors = {};

        if (!newSale.title.trim()) {
            newErrors.title = "Title is required.";
            return false;
        }

        if (!newSale.description.trim()) {
            newErrors.description = "Description is required.";
        }

        if (!(Number(newSale.price) > 0)) {
            newErrors.price = "Price must be a positive number.";
        }

        if (!newSale.clientId.trim()) {
            newErrors.client = "Client is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddDeal = () => {
        if (validateInput()) {
            console.log(1);
            axios
                .post(API_URL + "/deals", newSale)
                .then(() => {
                    toast.success("New sale was added successfully");
                    axios
                        .get(API_URL + "/deals")
                        .then(response => {
                            setSales(response.data);
                        })
                        .catch(() => {
                            setSales([]);
                        });
                })
                .catch(() => {
                    toast.error("New sale can not be added");
                });

            clearInputs();
        }
    };

    const clearInputs = () => {
        setNewSale({
            price: "",
            title: "",
            clientId: "",
            description: ""
        });
        setErrors({});
    };

    const handleEditDeal = () => {
        if (validateInput()) {
            axios
                .put(API_URL + "/deals/" + id, newSale)
                .then(() => {
                    toast.success("Sale was saved successfully");
                    axios
                        .get(API_URL + "/deals")
                        .then(response => {
                            setSales(response.data);
                        })
                        .catch(() => {
                            setSales([]);
                        });
                })
                .catch(() => {
                    toast.error("Sale can not be saved");
                })
                .finally(() => setIsEditing(false));

            clearInputs();
        }
    };

    const handleDeleteDeal = id => {
        axios
            .delete(API_URL + "/deals/" + id)
            .then(() => {
                toast.success("Sale was deleted successfully");
                axios
                    .get(API_URL + "/deals")
                    .then(response => {
                        setSales(response.data);
                    })
                    .catch(() => {
                        setSales([]);
                    });
            })
            .catch(() => {
                toast.error("Sale can not be deleted");
            })
            .finally(() => setIsEditing(false));
    };

    const handleComplete = id => {
        axios
            .patch(API_URL + "/deals/" + id + "/complete")
            .then(() => {
                toast.success("Sale was completed successfully");
                axios
                    .get(API_URL + "/deals")
                    .then(response => {
                        setSales(response.data);
                    })
                    .catch(() => {
                        setSales([]);
                    });
            })
            .catch(() => {
                toast.error("Sale can not be completed");
            });
    };

    const handleCancel = id => {
        axios
            .patch(API_URL + "/deals/" + id + "/cancel")
            .then(() => {
                toast.success("Sale was cancelled successfully");
                axios
                    .get(API_URL + "/deals")
                    .then(response => {
                        setSales(response.data);
                    })
                    .catch(() => {
                        setSales([]);
                    });
            })
            .catch(() => {
                toast.error("Sale can not be cancelled");
            });
    };

    const handleEditClick = (id, client) => {
        setId(id);
        setIsEditing(true);
        setNewSale(client);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Sales Page</h1>

            <div style={styles.form}>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="Title"
                    value={newSale.title}
                    onChange={e =>
                        setNewSale({ ...newSale, title: e.target.value })
                    }
                />
                {errors.title && <p style={styles.error}>{errors.title}</p>}

                <input
                    style={styles.input}
                    type="text"
                    placeholder="Description"
                    value={newSale.description}
                    onChange={e =>
                        setNewSale({ ...newSale, description: e.target.value })
                    }
                />
                {errors.description && (
                    <p style={styles.error}>{errors.description}</p>
                )}

                <input
                    style={styles.input}
                    type="number"
                    placeholder="Price"
                    value={newSale.price}
                    onChange={e =>
                        setNewSale({ ...newSale, price: e.target.value })
                    }
                />
                {errors.price && <p style={styles.error}>{errors.price}</p>}

                <label htmlFor="client" style={styles.label}>
                    Client
                </label>
                <select
                    id="client"
                    value={newSale.clientId}
                    onChange={e =>
                        setNewSale({ ...newSale, clientId: e.target.value })
                    }
                    style={styles.input}>
                    {buyers.map(x => (
                        <option value={x.id} key={x.id}>
                            {x.fullName}
                        </option>
                    ))}
                </select>
                {errors.client && <p style={styles.error}>{errors.client}</p>}

                {isEditing ? (
                    <div style={{ display: "flex", gap: "2rem" }}>
                        <button
                            type="button"
                            onClick={handleEditDeal}
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
                        onClick={handleAddDeal}
                        style={styles.button}>
                        Add Sale
                    </button>
                )}
            </div>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Start Date</th>
                        <th>Cancel Date</th>
                        <th>Completion Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.id}>
                            <td>
                                {
                                    buyers.find(x => x.id == sale.clientId)
                                        ?.fullName
                                }
                            </td>
                            <td>{sale.title}</td>
                            <td>{sale.description}</td>
                            <td>{sale.price}</td>
                            <td>{sale.startDate?.slice(0, 10)}</td>
                            <td>{sale.cancelDate?.slice(0, 10)}</td>
                            <td>{sale.completionDate?.slice(0, 10)}</td>
                            <td>{sale.status}</td>
                            <td style={styles.actions}>
                                <button
                                    style={styles.editButton}
                                    onClick={() => handleComplete(sale.id)}>
                                    Complete
                                </button>
                                <button
                                    style={styles.deleteButton}
                                    onClick={() => handleCancel(sale.id)}>
                                    Cancel
                                </button>
                                <button
                                    style={styles.editButton}
                                    onClick={() =>
                                        handleEditClick(sale.id, sale)
                                    }>
                                    Edit
                                </button>
                                <button
                                    style={styles.deleteButton}
                                    onClick={() => handleDeleteDeal(sale.id)}>
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
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
    },
    title: {
        marginBottom: "20px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "20px"
    },
    label: {
        marginTop: "10px",
        textAlign: "start"
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ddd"
    },
    error: {
        color: "red",
        fontSize: "12px",
        margin: "0"
    },
    button: {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        width: "fit-content"
    },
    table: {
        width: "100%",
        borderCollapse: "separate",
        textAlign: "left",
        rowGap: "10px",
        borderSpacing: "0 10px"
    },
    deleteButton: {
        backgroundColor: "red",
        color: "#fff",
        border: "none",
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "5px"
    },
    editButton: {
        backgroundColor: "green",
        color: "#fff",
        border: "none",
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "5px"
    },
    saveBtn: {
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        border: "none",
        backgroundColor: "green",
        color: "#fff",
        cursor: "pointer",
        width: "fit-content"
    },
    cancelBtn: {
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
        border: "none",
        backgroundColor: "red",
        color: "#fff",
        cursor: "pointer",
        width: "fit-content"
    }
};

export default Sales;
