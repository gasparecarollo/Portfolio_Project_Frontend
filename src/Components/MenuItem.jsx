import { Link } from "react-router-dom";

function MenuItem({ menuitem }) {
    return (
        <tr>
            <td> {menuitem.name}</td>
            <td> {menuitem.category} </td>
            <td>  {menuitem.price} </td>
            <td> {menuitem.description} </td>
            <td>  {menuitem.out_of_stock ? (<span> ⭐️ </span>) : (
                <span>&nbsp; &nbsp; &nbsp; &nbsp; </span>
            )}
            </td>
            <td>
                <Link to={`/menuitems/${menuitem.id}`}> More Info</Link>
            </td>
        </tr>
    );
}

export default MenuItem; 