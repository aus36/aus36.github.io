import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <h1>This is a navbar</h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Navbar;