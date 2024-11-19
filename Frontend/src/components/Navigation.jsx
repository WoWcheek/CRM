import { Link } from "react-router-dom";
import {
    HiHome,
    HiPhone,
    HiUsers,
    HiTrendingUp,
    HiCurrencyDollar
} from "react-icons/hi";
import { MdMargin } from "react-icons/md";

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
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#49665d",
        padding: "10px",
        borderRadius: "8px",
        margin: "10px"
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
