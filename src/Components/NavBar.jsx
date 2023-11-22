import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/home/" > Home </Link>
                <Link to="/menuitems/"> Menu </Link>
                <Link to="/menuitems/show"> Show </Link>
                <Link to="/menuitems/edit"> Edit </Link>
                <Link to="/menuitems/new"> New </Link>
                {/* <Link to="/menuitems/" */}
            </h1>
        </nav >
    );
}
