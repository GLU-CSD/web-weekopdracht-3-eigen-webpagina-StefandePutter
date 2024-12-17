import styles from "../css/products.module.css";
import Image from "next/image";

export function Product() {
	return (
		<a href="product.php?product=$id" className={styles.product}>
			{/* <div className={styles.imgBox} style={{ backgroundImage: "url()" }}></div> */}
			<Image
				className={styles.imgBox}
				src="/goku_website.png"
				width={1200}
				height={860}
				alt="goku jacket"
			></Image>
			<div className={styles.textBox}>
				<div
					className={styles.productTitle}
					style={{ color: "rgb(255, 0, 255)" }}
				>
					$title
				</div>
				<div
					className={styles.productDescription}
					style={{ color: "rgb(255, 0, 255)" }}
				>
					$description
				</div>
			</div>
		</a>
	);
}
