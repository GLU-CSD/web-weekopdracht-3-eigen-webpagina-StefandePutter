"use client";

import { useParams } from "next/navigation";
import { productStyle } from "./product.module.css";
import { useEffect, useState } from "react";

export function Product() {
	const id = useParams().id;
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8081/products")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const selectedItem = data[id - 1];
				setProduct(selectedItem);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			{product.id + " " + product.title + " " + product.price + " "}
			{product.isSold ? "Sold" : "In supply"}
		</div>
	);
}
