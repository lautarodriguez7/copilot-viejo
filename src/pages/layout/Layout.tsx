import { Outlet, NavLink, Link } from "react-router-dom";
import github from "../../assets/github.svg";
import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Chat GPT</h3>
                    </Link>
                    <h4 className={styles.headerRightText}>Información Personalizada</h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
