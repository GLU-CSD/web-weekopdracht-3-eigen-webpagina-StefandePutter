import "../css/header.css";

export function Header() {
	return (
		<section>
			<img
				src={null}
				className="headerImage"
				style={{ backgroundColor: "darkorange" }}
			></img>
			<header id="myHeader">
				<a href="./" className="logo">
					Logo
				</a>
				<div className="headerRight">
					<a className="active" href="./">
						Home
					</a>
					<a href="#contact">Contact</a>
					<a href="#about">About</a>
				</div>
			</header>
		</section>
	);
}
