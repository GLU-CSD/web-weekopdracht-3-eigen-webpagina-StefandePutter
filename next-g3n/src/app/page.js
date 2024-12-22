"use client"

import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	// const data = await fetch('/next-g3n/public/result_data.json')
	// const products = await data.json();

	const [products, setProduct] = useState([]);

  useEffect(() => {
    // If you're using Create React App and the file is in the public folder
    fetch('/next-g3n/result_data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProduct(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

	return (
		<section className={styles.wrapper}>
			{products.map((product) => (
				<Link
					key={product.id}
					href={"/product/" + product.id}
					className={styles.product}
				>
					<Image
						className={styles.imgBox}
						src={"/next-g3n/" + product.image}
						loading="eager"
						width={1200}
						height={860}
						unoptimized={true}
						alt="goku jacket"
					></Image>
					<div className={styles.textBox}>
						<div
							className={styles.productTitle}
							style={{ color: "rgb(" + product.mainColor + ")" }}
						>
							{product.title}
						</div>
						<div
							className={styles.productDescription}
							style={{
								color: "rgb(" + product.secondColor + ")",
							}}
						>
							{product.description}
						</div>
						<button className={styles.productButton}>Go to product</button>
					</div>
				</Link>
			))}
		</section>
	);
}
