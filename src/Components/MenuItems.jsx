import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

const API = import.meta.env.VITE_API_URL;

function MenuItems() {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => { }, []);

    return (
        <div className="MenuItems">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th> Take me there </th>
                            <th> See this menu item</th>
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