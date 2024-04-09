import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
import basket from "../assets/basket_icon.svg";
function Header() {
	return (
		<div className={styles.header}>
			<header>
				<div className={styles.logo}>
					<img className={styles.logo__img} src={logo} alt="" />
					<span className={styles.logo__text}>QuickMeal</span>
				</div>
			</header>
			<div className={styles.navcontainer}>
				<nav className="navbar">
					<ul className={styles.navbar__menu}>
						<li className={styles.navbar__list}>
							<a href="">Home</a>
						</li>
						<li className={styles.navbar__list}>
							<a href="">All restaurants</a>
						</li>
					</ul>
				</nav>
				<div className={styles.header__basket}>
					<img src={basket} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Header;
