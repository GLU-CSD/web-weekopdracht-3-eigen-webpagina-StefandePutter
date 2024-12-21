import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Product } from "./product";

function Fallback({ error }) {
	return (
		<section role="alert">
			<p>Product not found</p>
			<pre>{error}</pre>
		</section>
	);
}

export function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }]
}

export default function Home() {
	return (
		<ErrorBoundary FallbackComponent={<Fallback></Fallback>}>
			<Product></Product>
		</ErrorBoundary>
	);
}
