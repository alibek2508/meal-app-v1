function Restaurants({ addRestaurants }) {
	return (
		<div>
			{addRestaurants.map((elem, index) => {
				return <p key={index}>{elem.name}</p>;
			})}
		</div>
	);
}

export default Restaurants;
