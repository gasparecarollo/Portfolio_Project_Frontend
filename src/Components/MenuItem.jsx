import { Link } from "react-router-dom";

function MenuItem({ menuitem }) {
    return (
        <tr>
            <td>
                {menuitem.out_of_stock ? (<span> ⭐️ </span>) : (
                    <span>&nbsp; &nbsp; &nbsp; &nbsp; </span>
                )}
            </td>
            <td style={{ cursor: "alias" }}>
                <a href={menuitem.url}
                    target='_blank' rel="noreferrer">
                    {menuitem.name}
                </a>
            </td>
            <td>
                <Link to={`/menuitems/${menuitem.id}`}> ✏️</Link>
            </td>
        </tr>
    );
}

export default MenuItem; 