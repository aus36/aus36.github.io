import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <Link to={"/"}  className='navbarButton'>
                <h3 className='navbarText'>Link 1</h3>
            </Link>
            <Link to={"/"}  className='navbarButton'>
                <h3 className='navbarText'>Link 2</h3>
            </Link>
            <Link to={"/"}  className='navbarButton'>
                <h3 className='navbarText'>Link 3</h3>
            </Link>
        </div>
    );
};

export default Navbar;