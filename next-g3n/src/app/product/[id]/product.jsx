"use client";

import { useParams } from "next/navigation";
import productStyles from "./product.module.css";
import { useEffect, useState } from "react";

export function Product() {
	const id = useParams().id;
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch("http://127.0.0.1:8081/products")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				const selectedItem = data[id - 1];
				setProduct(selectedItem);
			})
			.catch((error) => console.log(error));
	}, []);

	console.log(product);

	if (!product.id) {
		// throw new Error("No Product found");
	}

	return (
		<table>
			<tbody className={productStyles.table}>
				<tr>
					<th>Id</th>
					<th>Title</th>
					<th>Price</th>
					<th>Stock</th>
				</tr>
				<tr>
					<td>{product.id}</td>
					<td>{product.title}</td>
					{
						(product.price % 1 == 0) ? (

							<td>{"€"+product.price+",-"}</td>
						) : (
							<td>{"€"+(product.price)}</td>
						)
					}
					<td>{product.isSold ? "Sold" : "In supply"}</td>
				</tr>
			</tbody>
		</table>
	);
}
