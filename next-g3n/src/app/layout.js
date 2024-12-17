import "../css/style.css";

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
			<body>{children}</body>
		</html>
	);
}
