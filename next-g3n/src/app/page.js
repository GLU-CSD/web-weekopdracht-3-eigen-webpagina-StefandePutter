import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {
	const data = await fetch("http://127.0.0.1:8081/products");
	const products = await data.json();

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
