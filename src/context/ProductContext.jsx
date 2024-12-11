import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const ProductsContext = createContext();

// Create a provider component
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch products from API
	useEffect(() => {
		fetchProducts();
		fetchCategories();
	}, []);

	const fetchProducts = async () => {
		try {
			setLoading(true);
			// Replace with your actual API call
			const response = await fetch("/api/products");
			const data = await response.json();
			setProducts(data);
			setLoading(false);
		} catch (err) {
			setError("Failed to fetch products");
			setLoading(false);
		}
	};

	const fetchCategories = async () => {
		try {
			// Replace with your actual API call
			const response = await fetch("/api/categories");
			const data = await response.json();
			setCategories(data);
		} catch (err) {
			setError("Failed to fetch categories");
		}
	};

	const getProductById = (id) => {
		return products.find((product) => product.id === id);
	};

	const getProductsByCategory = (categoryId) => {
		return products.filter((product) => product.cat_id === categoryId);
	};

	const addToCart = (productId, quantity) => {
		// Implement cart logic here
		console.log(`Added product ${productId} to cart with quantity ${quantity}`);
	};

	const rateProduct = async (productId, userId, value) => {
		try {
			// Replace with your actual API call
			await fetch("/api/rate-product", {
				method: "POST",
				body: JSON.stringify({ productId, userId, value }),
				headers: { "Content-Type": "application/json" },
			});
			// Optionally update local state or refetch products
		} catch (err) {
			setError("Failed to rate product");
		}
	};

	const value = {
		products,
		categories,
		loading,
		error,
		getProductById,
		getProductsByCategory,
		addToCart,
		rateProduct,
	};

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};

// Custom hook to use the products context
export const useProducts = () => {
	const context = useContext(ProductsContext);
	if (context === undefined) {
		throw new Error("useProducts must be used within a ProductsProvider");
	}
	return context;
};
