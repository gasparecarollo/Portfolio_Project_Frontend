import React from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const MenuItemsDetails = () => {
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


    const API = import.meta.env.VITE_BASE_URL;
    const { id } = useParams();
    const { navigate } = useNavigate();

    useEffect(() => {
        fetch(`${API}/menuitems/${id}`)
            .then(res => res.json())
            .then(res => {
                setItem(res)

            })
            .catch((error) => {
                console.error(error);
            })
    }, [id, API]);

    const handleDelete = () => {
        deleteMenuItem();
    };

    const deleteMenuItem = () => {
        fetch(`${API}/menuitems/${id}`, {
            method: 'DELETE',
        })
            .then(() => navigate(`/menuitems`))
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <div>
                <h2> Food Name: {item.name} </h2>
                <h2>Category: {item.category}</h2>
                <h2> Description: {item.description}</h2>
                <h2> Photo: <img src={`/images/${item.image_id}.png`} alt="Food pic" /></h2>
                <h2>Price: ${item.price}</h2>
                <h2> InStock: {item.out_of_stock}</h2>
                <h2> Ranking: {item.ranking}</h2>
            </div >
            <div className='links'>
                <Link to={`/menuitems/${id}/edit`}>
                    <button type="Edit"> Edit Item</button>
                </Link>
                <button onClick={handleDelete}>Delete Item</button>
                <Link to={`/menuitems`}>
                    <button>  Back to Menu </button>
                </Link>
            </div>
        </div>

    );
};

export default MenuItemsDetails;