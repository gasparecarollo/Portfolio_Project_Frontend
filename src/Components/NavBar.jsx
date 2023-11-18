import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/menuitems"> Menu </Link>
            </h1>
            <button>
                <Link to="/menuitems/new"> New Menu Item</Link>
            </button>
        </nav>
    );
}