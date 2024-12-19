import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Product } from "./product";

function Fallback({ error }) {
	return (
		<section role="alert">
			<p>Product not found</p>
			<pre>error.message</pre>
		</section>
	);
}

export default function Home() {
	return (
		<ErrorBoundary FallbackComponent={<Fallback></Fallback>}>
			<Product></Product>
		</ErrorBoundary>
	);
}
