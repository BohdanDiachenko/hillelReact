import { Link, Outlet } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styles from './Header.module.css'

const Header = () => {
    return (
    <header className={`${styles.header_style} container `}>
        <nav className={styles.nav}>
            <span>
                <Link to="/">Home</Link>
            </span>
            <span>
                <Link to="/users">Users</Link>
            </span>
        </nav>
        <BreadCrumbs/>
        <Outlet/>
    </header>
    )
};
export default Header;