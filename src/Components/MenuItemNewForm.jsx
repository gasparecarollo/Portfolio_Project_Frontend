import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function MenuItemNewForm() {
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

    //Add a Menu item. Redirect to the index view.
    const addMenuItem = () => {
        fetch(`${API}/menuitems`, {
            method: "POST",
            body: JSON.stringify(menuitem),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                navigate(`/menuitems`);
            })
            .catch((error) => console.error("catch", error));
    };

    const handleTextChange = (event) => {
        setMenuItem({
            ...menuItem, [event.target.id]:
                event.target.value
        });
    };

    const handleCheckboxChange = () => {
        setMenuItem({ ...menuItem, out_of_stock: !out_of_stock })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        addMenuItem();
    };

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name: </label>
                <input
                    id="name"
                    value={menuItem.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of food item"
                    required
                />
                <label htmlFor="image_id"> Image_id:</label>
                <input
                    id="image_id"
                    type="text"
                    value={menuItem.image_id}
                    onChange={handleTextChange}
                    placeholder="Image name inside your assets folder"
                />
                <label htmlFor="category"> Category: </label>
                <input
                    id="category"
                    name="category"
                    type="text"
                    value={menuItem.category}
                    onChange={handleTextChange}
                    placeholder="Category of the food item"
                />
                <label htmlFor="description"> Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={menuItem.description}
                    placeholder="Describe the food item your adding to your menu."
                />
                <label htmlFor="Price"> Price: </label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    value={menuItem.price}
                    onChange={handleTextChange}
                    placeholder="Price of your food item."
                />
                <label htmlFor="Stock"> Stock Availability: </label>
                <input
                    id="out_of_stock"
                    type="checkbox"
                    value={menuItem.out_of_stock}
                    onChange={handleCheckboxChange}
                    checked={menuItem.out_of_stock}
                />
                <label htmlFor="ranking"> Ranking:</label>
                <input
                    id="ranking"
                    name="ranking"
                    type="number"
                    min="0"
                    max="10"
                    step="1"
                    value={menuItem.ranking}
                    onChange={handleTextChange}
                    placeholder="A ranking between 1 and 10"
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default MenuItemNewForm;