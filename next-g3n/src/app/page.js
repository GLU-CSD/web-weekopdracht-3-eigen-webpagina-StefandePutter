import styles from "../css/page.module.css";
import { Footer } from "./footer";
import { Header } from "./header";
import { Product } from "./product";

export default function Home() {
	return (
		<section>
			<Header></Header>
			<div className={styles.content}>
				<Product></Product>
			</div>
			<Footer></Footer>
		</section>
	);
}
