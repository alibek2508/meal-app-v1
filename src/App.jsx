import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Header from "./components/Header";
import Main from "./components/Main";
import Restaurants from "./components/Restaurants";
import "./App.css";

function App() {
	const supabase = createClient(
		"https://vbjvlbaapwbzhpmjtnkr.supabase.co",
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZianZsYmFhcHdiemhwbWp0bmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTcwMjcsImV4cCI6MjAyNjMzMzAyN30.MnNuDljYgITjt5m35rgIq2Qi81RyBroSzUZkwAl8jSA"
	);

	const [restaurants, setRestaurants] = useState([]);

	async function getRestorans() {
		try {
			const response = await supabase.from("restaurants").select();
			setRestaurants(response.data);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		getRestorans();
	}, []);
	return (
		<div>
			<Header />
			<Main />
			<Restaurants addRestaurants={restaurants} />
		</div>
	);
}

export default App;
