import React, { useState } from "react";
export const MenuWrap = React.createContext();
function MenuContext({ children }) {
	const [menuImage, viewer] = useState([		{
			id: 1,
			url: "https://nishkitchen.com/wp-content/uploads/2015/04/Chettinad-fish-fry-1B.jpg",
			name: "Sea Food",
			details: [
				{
					log: 1,
					name: "Tandori Fish Tikka",
					amount: 200,
				},
						{ log: 2, name: "Salamon Rice Bowl", amount: 500 },			{ log: 3, name: "Prawn Curry", amount: 400 },
			  { log: 4, name: "Prawn Biriyani", amount: 600 },		
			  { log: 5, name: "Grilled Fish with Ginger Sauce", amount: 350 },
			],
		},
			{
			id: 2,
			url: "https://farm9.staticflickr.com/8586/16023214373_90552b64f6_o.jpg",
			name: "parotta",
			details: [
				{
					log: 1,
					name: "Parotta (with chicken)",
					amount: 400,
				},
				{ log: 2, name: "Parotta (with salna only)", amount: 200 },
			],
		},		{
			id: 3,
			url: "https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg",
			name: "Biriyani",
			details: [
				{
					log: 1,
					name: "Mutton Biriyani",
					amount: 250,
				},
				{
					log: 2,
					name: "Chicken Biriyani",
					amount: 350,
				},
				{
					log: 3,
					name: "Hyderabadi Biriyani",
					amount: 500,
				},
				{
					log: 4,
					name: "Malabar Biriyani",
					amount: 600,
				},
			],
		},
	{
			id: 4,
			url: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRRto3IlY56MlAIOAvXHvPEVxBDVzG1uz1zULEBYdJ-I4Aa-xOyPEVvv7fmIjLnxaOz",
			name: "Burger",
			details: [
				{
					log: 1,
					name: "Burger (Larger)",
					amount: 800,
				},
				{ log: 2, name: "Burger (Medium)", amount: 500 },
			],
		},


		
		{
			id: 5,
			url: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost.s3.amazonaws.com%2Fpublic%2F4HSB4C2MXJ5OCCP4HGYPGP47EU.jpg?h=982&w=1200",
			name: "Salad",
			details: [
				{
					log: 1,
					name: "salad (with nuts)",
					amount: 800,
				},
				{
					log: 2,
					name: "Salad (without nuts)",
					amount: 500,
				},
			],
		},
		{
			id: 6,
			url: "https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg",
			name: "Sandwich",
			details: [
				{
					log: 1,
					name: "sandwich (vegetable)",
					amount: 100,
				},
				{ log: 2, name: "sandwich (Egg)", amount: 200 },
			],
		},

		{
			id: 7,
			url: "https://thumbs.dreamstime.com/z/south-indian-breakfast-idli-dosa-chutney-indian-breakfast-lentil-rice-pancake-also-known-as-dosa-dumplings-known-as-idli-158574513.jpg",
			name: "Idly Dosa",
			details: [
				{
					log: 1,
					name: "Idly (only)",
					amount: 50,
				},
				{
					log: 2,
					name: "Dosa (only)",
					amount: 50,
				},
				{
					log: 3,
					name: "Idly & Dosa (Combo)",
					amount: 120,
				},
			],
		},		{
			id: 8,
			url: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F12D0579-A792-4814-B2B2-8689A8669358/Derivates/E5479E71-0BD7-4337-9FBE-AA580146C3E7.jpg",
			name: "Chapati",
			details: [
				{
					log: 1,
					name: "Butter Naan",
					amount: 200,
				},
				{ log: 2, name: "Tantori Roti", amount: 600 },
			],
		},

		
		{
			id: 9,
			url: "https://i0.wp.com/beextravegant.com/wp-content/uploads/2023/05/DSC03427-2.jpg?resize=728%2C1024&ssl=1",
			name: "Vada Pav",
			details: [
				{
					log: 1,
					name: "Vada Pav",
					amount: 150,
				},
				{
					log: 2,
					name: "Dabeli",
					amount: 200,
				},
			],
		},	  {
			id: 10,
			url: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/09/Strawberry-Juice-Recipe.jpg",
			name: "Strawberry Juice",
			details: [
				{
					log: 1,
					name: "StrawBerry Juice (with ice)",
					amount: 100,
				},
			],
		},
	  {
			id: 11,
			url: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/07/Mango-Juice-Recipe.jpg",
			name: "Orange Juice",
			details: [
				{
					log: 1,
					name: "Orange Juice (with ice)",
					amount: 40,
				},
			],
		},
		
		{
			id: 12,
			url: "https://www.cookforindia.com/wp-content/uploads/2016/02/Momos-snap.jpg",
			name: "Momos",
			details: [
				{
					log: 1,
					name: "Momos (with veg)",
					amount: 200,
				},
					{ log: 2, name: "Momos (with Mushroom)", amount: 300 },			{ log: 3, name: "Momos (with chicken)", amount: 500 },
			],
		},
	]);
	return (
		<MenuWrap.Provider value={{ menuImage }}>{children}</MenuWrap.Provider>
	);
}
export default MenuContext;
