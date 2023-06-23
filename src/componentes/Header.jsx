import { Link } from 'react-router-dom';

import './Header.css';
export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link"> HOME </Link>
                    </li>
                    <li>
                        <Link to="/about" className="link"> ABOUT </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="link"> DASHBOARD </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};