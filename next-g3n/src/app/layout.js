import "../css/style.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

export const metadata = {
	title: "NEXT G3N",
	description: "Sells custom jackets",
	keywords: [
		"Custom",
		"Jackets",
		"Pokemon",
		"Goku",
		"Melenia",
		"Klee",
		"genshin",
	],
	creator: "NEXT-G3N",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="backgroundLines">
				<img
					src={null}
					className="headerImage"
					style={{ backgroundColor: "darkorange" }}
				></img>
				<Navbar></Navbar>
				<div className="content">{children}</div>
				<Footer></Footer>
			</body>
		</html>
	);
}
