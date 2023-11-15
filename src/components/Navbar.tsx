import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <div className = {styles.navbarContainer}>
            <Link to={"/projects"}  className={styles.navbarButton}>
                <h3 className={styles.navbarText}>Projects</h3>
            </Link>
            <Link to={"/experience"}  className={styles.navbarButton}>
                <h3 className={styles.navbarText}>Experience</h3>
            </Link>
            <Link to={"/skills"}  className={styles.navbarButton}>
                <h3 className={styles.navbarText}>Skills</h3>
            </Link>
            <Link to={"/"}  className={styles.navbarButton}>
                <h3 className={styles.navbarText}>Home</h3>
            </Link>
            <Link to={"/resume"}  className={styles.navbarButton}>
                <h3 className={styles.navbarText}>Resume</h3>
            </Link>
            <Link to={"/contact"}  className={styles.navbarButton}>
                <h3 className={styles.navbarText}>Contact</h3>
            </Link>
        </div>
    );
};

export default Navbar;