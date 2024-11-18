import { Link } from "react-router-dom";
import {
    HiMail,
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
            <Link to="/supports" style={styles.link}>
                <HiMail />
                Supports
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
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#333",
        padding: "10px"
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "1.2rem",
        display: "flex",
        gap: "8px"
    }
};

export default Navigation;
