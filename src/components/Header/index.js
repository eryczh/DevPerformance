import {Link} from 'react-router-dom';
import "./header.css"

function Header() {
    return (
<header className="header">
    <h2>Dev<strog className="titulo_destaque">Performance</strog></h2>
    <div classeName="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/performance">Performance</Link>
        <Link to="/sobre">Sobre Nós</Link>
        
    </div>
</header>
    )
}

export default Header;