import styles from "./Main.module.css";
function Main() {
	return (
		<div className={styles.main}>
			<h1 className={styles.main__title}>
				<span className={styles}>Hungry?</span> Find your next meal
			</h1>
			<button className={styles}>See all restaurants</button>
			<div className={styles.bg}></div>
		</div>
	);
}

export default Main;
