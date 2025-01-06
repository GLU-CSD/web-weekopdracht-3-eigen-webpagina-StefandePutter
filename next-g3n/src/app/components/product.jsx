"use client";

import productStyles from "./product.module.css";

export function Product(product) {
    product = product.product;
	console.log(product);

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
					<td>{parseInt(product.isSold) ? "Sold" : "In supply"}</td>
				</tr>
			</tbody>
		</table>
	);
}
