import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function MenuItemForm() {
    let { id } = useParams();
    const navigate = useNavigate();

    const [menuItem, setMenuItem] = useState({
        name: "",
        url: "",
        description: "",
        is_favorite: false,

    });

    const handleTextChange = (event) => {
        setMenuItem({ ...menuItem, [event.target.id]: event.target.value });

    };

    const handleCheckboxChange = () => {
        setMenuItem({ ...menuItem, is_favorite: !bookmark.is_favorite })
    };

    const updateMenuItem = () => {
        console.log(`${API}/menuItems/${id}`);

        fetch(`${API}/menuItems/${id}`, {
            method: "PUT",
            body: JSON.stringify(menuItem),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                navigate(`/menuItems/${id}`);
            })
            .then((response) => {
                navigate(`/bookmarks/${id}`);
            })
            .catch((error) => console.error("catch", error));

    };


    //On page load, fill in the form with menuitem data.

    useEffect(() => {
        fetch(`${API}/menuitems/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                setMenuItem(responseJSON);
            })
            .catch((error) => console.error(error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateMenuItems();
    }