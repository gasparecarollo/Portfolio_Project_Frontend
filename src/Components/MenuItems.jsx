import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

const API = import.meta.env.VITE_BASE_URL;

function MenuItems() {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        fetch(`${API}/menu`)
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                console.log(responseJSON);
                setMenuItems(responseJSON);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="MenuItems">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category </th>
                            <th> Price</th>
                            <th> Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menuItems.map((menuItem) => {
                            return <MenuItem key={menuItem.id}
                                menuitem={menuItem} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default MenuItems;