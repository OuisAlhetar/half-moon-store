// src/CartContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
		setCartItems(savedCartItems);
		calculateTotalPrice(savedCartItems);
	}, []);

	const calculateTotalPrice = (items) => {
		const total = items.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);
		setTotalPrice(total);
	};

	const updateCartItem = (updatedItem) => {
		const updatedCartItems = cartItems.map((item) =>
			item.id === updatedItem.id ? updatedItem : item
		);
		setCartItems(updatedCartItems);
		calculateTotalPrice(updatedCartItems);
		localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
	};

	const removeCartItem = (itemId) => {
		const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
		setCartItems(updatedCartItems);
		calculateTotalPrice(updatedCartItems);
		localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
	};

	const addToCart = (product) => {
		const existingItem = cartItems.find((item) => item.id === product.id);
		if (existingItem) {
			updateCartItem({ ...existingItem, quantity: existingItem.quantity + 1 });
		} else {
			const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
			setCartItems(updatedCartItems);
			calculateTotalPrice(updatedCartItems);
			localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
		}
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				totalPrice,
				updateCartItem,
				removeCartItem,
				addToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
