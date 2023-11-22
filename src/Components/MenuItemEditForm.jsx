import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function MenuItemEditForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [menuItem, setMenuItem] = useState({
        name: "",
        image_id: "",
        category: "",
        description: "",
        price: "",
        out_of_stock: false,
        ranking: "",
    });

    const handleTextChange = (event) => {
        setMenuItem({ ...menuItem, [event.target.id]: event.target.value });

    };

    const handleCheckboxChange = () => {
        setMenuItem({ ...menuItem, out_of_stock: !menuItem.out_of_stock })
    };

    const updateMenuItem = async () => {
        const menuData = {
            name: menuItem.name,
            category: menuItem.category,
            image_id: menuItem.image_id,
            description: menuItem.description,
            price: menuItem.price,
            ranking: menuItem.ranking,
            out_of_stock: menuItem.out_of_stock
        }

        try {
            const fetchMenu = await
                fetch(`${API}/menuItems/${id}`, {
                    method: "PUT",
                    body: JSON.stringify(menuData),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
            if (!fetchMenu.ok) {
                throw new Error({ Error: `Invalid response: ${fetchMenu.status}` });
            };
            navigate(`/menuItems/${id}`);
        } catch (error) {
            return error
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateMenuItem();
    };



    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name: </label>
                <input
                    id="name"
                    value={menuItem.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of food item"
                    required />

                <label htmlFor="image_id" > image_id: </label>
                <input
                    id="image_id"
                    type="text"
                    value={menuItem.image_id}
                    placeholder="name of the image in your assets folder"
                    onChange={handleTextChange}
                />
                <label
                    htmlFor="category"> Category: </label>
                <input
                    id="category"
                    type="text"
                    name="category"
                    value={menuItem.category}
                    placeholder="name of the category of food for this menu item"
                    onChange={handleTextChange}
                />
                <label htmlFor="out_of_stock" > Stock Availability:</label>
                <input
                    id="out_of_stock"
                    name="out_of_stock"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={menuItem.out_of_stock}
                />
                <label
                    htmlFor="description"> Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={menuItem.description}
                    onChange={handleTextChange}
                    placeholder="Description of the food item you are adding to the menu."
                />
                <label htmlFor="price"> Price </label>
                <input id="price" value={menuItem.price}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="Price of the food item"
                    required
                />

                <label htmlFor="ranking" > Ranking: </label>
                <input
                    id="ranking"
                    name="ranking"
                    type="number"
                    value={menuItem.ranking}
                    onChange={handleTextChange}
                    placeholder="Rank the food item from 1-10"
                />
                <br />
                <button type="submit"> Submit </button>
            </form >
            <Link to={`/menuitems/${id}`}>
                <button> On Second Thought!</button>
            </Link>
        </div >
    );
}

export default MenuItemEditForm;