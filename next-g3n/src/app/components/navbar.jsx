import Link from "next/link";
import "./navbar.css";

export function Navbar() {
	return (
		<header id="myHeader">
			<Link href="/" className="logo">
				Logo
			</Link>
			<div className="headerRight">
				<Link href="/" className="active">
					Home
				</Link>
				<Link href="/contact">Contact</Link>
				<Link href="/about">About</Link>
			</div>
		</header>
	);
}
