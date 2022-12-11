import './Navbar.css';

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
        <h2>
            <Link to={'/'}>Blog</Link>
        </h2>
        <ul>
            <li>
            <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/post'} className="new-btn">Novo Post</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;