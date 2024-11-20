import { Link } from "react-router-dom";
import {
    HiHome,
    HiPhone,
    HiUsers,
    HiTrendingUp,
    HiCurrencyDollar
} from "react-icons/hi";

function Navigation() {
    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.link}>
                <HiHome />
                Home
            </Link>
            <Link to="/buyers" style={styles.link}>
                <HiUsers />
                Buyers
            </Link>
            <Link to="/sales" style={styles.link}>
                <HiCurrencyDollar />
                Sales
            </Link>
            <Link to="/analyses" style={styles.link}>
                <HiTrendingUp />
                Analyses
            </Link>
            <Link to="/contacts" style={styles.link}>
                <HiPhone />
                Contacts
            </Link>
        </nav>
    );
}

const styles = {
    nav: {
        width: "250px",
        backgroundColor: "#49665d",
        height: "100vh", // Повна висота сторінки
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        position: "fixed", // Фіксоване положення зліва
        top: 0,
        left: 0,
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 15px",
        borderRadius: "5px",
        marginBottom: "15px",
        backgroundColor: "#3d554d",
        width: "100%",
        textAlign: "center",
    },
};

export default Navigation;
