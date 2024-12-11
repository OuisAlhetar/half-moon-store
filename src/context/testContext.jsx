import { createContext, useContext, useState } from "react";

const products = [
	{
		id: 1,
		images: [
			"/images/lacoste_1.png",
			"/images/lacoste_2.png",
			"/images/lacoste_3.png",
			"/images/lacoste_4.png",
		],
		description:
			"هذا تشيرت رائع وجميل =< إنّ البشر يخافون مَنْ يحملُ السيف لا مَنْ يحمل الكَلِمة. ولكنّي أقول لكم: إنّ الكلمةَ أقوى من السّيف. وإنّ آلافَ الأسياف الباطِلة لا يُمكنها أن تقتلَ كلمةَ حَقٍّ واحدة. السّيفُ خُلِقَ للفناء، والكلمةُ خُلِقَتْ للخلود؛ وأنا كلمةُ الله، وكلمةُ الله هِيَ العُليا",
		colors: ["red", "green", "orange"],
		sizes: ["sm", "md", "lg", "xl"],
		category: "تخفيضات",
		price: 150,
		title: "تي شيرت رجالي من لاكوست",
		sale: "80%",
		rating: 3,
	},
	{
		id: 2,
		images: [
			"/images/adidas_1.png",
			"/images/adidas_2.png",
			"/images/adidas_3.png",
			"/images/adidas_4.png",
		],
		description:
			"هذا تشيرت رائع وجميل =<  إنّ البشر يخافون مَنْ يحملُ السيف لا مَنْ يحمل الكَلِمة. ولكنّي أقول لكم: إنّ الكلمةَ أقوى من السّيف. وإنّ آلافَ الأسياف الباطِلة لا يُمكنها أن تقتلَ كلمةَ حَقٍّ واحدة. السّيفُ خُلِقَ للفناء، والكلمةُ خُلِقَتْ للخلود؛ وأنا كلمةُ الله، وكلمةُ الله هِيَ العُليا",
		colors: ["red", "green", "orange"],
		sizes: ["sm", "md", "lg", "xl"],
		category: "نسائي",
		price: 150,
		title: "حذاء اديداس جميل",
		sale: "50%",
		rating: 2,
	},
	{
		id: 3,
		images: [
			"/images/product_1.png",
			"/images/product_2.png",
			"/images/product_3.png",
			"/images/product_4.png",
		],
		description:
			"هذا تشيرت رائع وجميل => إنّ البشر يخافون مَنْ يحملُ السيف لا مَنْ يحمل الكَلِمة. ولكنّي أقول لكم: إنّ الكلمةَ أقوى من السّيف. وإنّ آلافَ الأسياف الباطِلة لا يُمكنها أن تقتلَ كلمةَ حَقٍّ واحدة. السّيفُ خُلِقَ للفناء، والكلمةُ خُلِقَتْ للخلود؛ وأنا كلمةُ الله، وكلمةُ الله هِيَ العُليا",
		colors: ["red", "green", "orange"],
		sizes: ["sm", "md", "lg", "xl"],
		category: "الأكثر مبيعًا",
		price: 150,
		title: "تي شيرت بوما",
		sale: "50%",
		rating: 5,
	},
	{
		id: 5,
		images: [
			"/images/most_sold_3.jpg",
			"/images/product_2.png",
			"/images/product_3.png",
			"/images/product_4.png",
		],
		description:
			"هذا تشيرت رائع وجميل => إنّ البشر يخافون مَنْ يحملُ السيف لا مَنْ يحمل الكَلِمة. ولكنّي أقول لكم: إنّ الكلمةَ أقوى من السّيف. وإنّ آلافَ الأسياف الباطِلة لا يُمكنها أن تقتلَ كلمةَ حَقٍّ واحدة. السّيفُ خُلِقَ للفناء، والكلمةُ خُلِقَتْ للخلود؛ وأنا كلمةُ الله، وكلمةُ الله هِيَ العُليا",
		colors: ["red", "purple", "orange"],
		sizes: ["sm", "md", "lg", "xl"],
		category: "الأكثر مبيعًا",
		price: 330.8,
		title: "جاكت من أويس",
		sale: "37%",
		rating: 5,
	},
	{
		id: 4,
		images: [
			"/images/polo_1.jpg",
			"/images/polo_2.jpg",
			"/images/polo_small.png",
			"/images/polo.png",
		],
		description: "هذا قميص بولو",
		colors: ["red", "green", "orange", "purple"],
		sizes: ["sm", "md", "lg", "xl"],
		category: "أطفال",
		price: 150,
		title: "قميص بولو",
		rating: 1,
	},
];

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
	const [productsData, setProductsData] = useState(products);

	return (
		<ProductContext.Provider
			value={{ products: productsData, setProducts: setProductsData }}
		>
			{children}
		</ProductContext.Provider>
	);
};

export const useProducts = () => useContext(ProductContext);
