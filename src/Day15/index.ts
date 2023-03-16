type Product = {
	name: String;
	category: String;
	price: number;
};

export function groupProducts(products: Array<Product>, category: String) {
	const filteredProducts = products.reduce(
		(prev: any, curr) => {
			if (curr.category !== category) return prev;

			return {
				products: [...prev.products, curr.name],
				totalPrice: prev.totalPrice + curr.price,
			};
		},
		{
			products: [],
			totalPrice: 0,
		}
	);

	return {
		products: filteredProducts.products.join(', '),
		totalPrice: filteredProducts.totalPrice,
	};
}
