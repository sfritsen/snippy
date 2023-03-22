import navbarStyles from './navbar.module.css';

export default function Navbar() {
	return (
		<>
			<nav className={navbarStyles.navbar}>
				<div className={navbarStyles.app_title}>Snippy</div>
			</nav>
		</>
	);
}
