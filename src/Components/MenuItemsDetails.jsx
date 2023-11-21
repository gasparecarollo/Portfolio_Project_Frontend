import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;


const MenuItemsDetails = () => {
    let { id } = useParams;
    let navigate = useNavigate;
    const [item, setItem] = useState({
        id: 0,
        name: "",
        description: "",
        category: "",
        image_id: "",
        price: "",
        out_of_stock: true,
        ranking: ""
    });
    const handleDelete = () => {
        deleteMenuItem();

    };
    const deleteMenuItem = () => {
        fetch(`${API}/menu/${id}`, {
            method: 'DELETE',
        })
            .then(() => navigate(`/menu`))
            .catch((error) => console.error(error));
    };
    useEffect(() => {
        fetch(`${API}/menu/${id}`)
            .then(res => res.json())
            .then(res => {
                setItem(res)
            })
    })

    return (
        <div>
            <h2> Food Name: {item.name}</h2>
            <h2>Category: {item.category}</h2>
            <h2> Description: {item.description}</h2>
            <h2> Photo: {item.image_id}</h2>
            <h2>Price: ${item.price}</h2>
            <h2> InStock: {item.out_of_stock}</h2>
            <h2> Ranking: {item.ranking}</h2>

            <Link to={`/menuitems/${id}/edit`}>
                <button type="Edit"> Edit Item</button>
            </Link>
            <button type='Delete' onClick={handleDelete}>Delete Item</button>
            <Link to={`/menuitems`}>
                <button> Return to Index Page </button>
            </Link>
        </div >
    );
};

export default MenuItemsDetails;