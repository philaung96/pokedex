import './App.css';
import { Link, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Pokedex from '../Pokedex/Pokedex';
import MyTeam from '../MyTeam/MyTeam';
import Pokemon from '../Pokemon/Pokemon';

function App() {
	let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
	const [pokemonArr, setPokemonArr] = useState();
	const [team, setTeam] = useState([]);

	const makeApiCall = (url) => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setPokemonArr(json.results));
	};
	useEffect(() => {
		makeApiCall(url);
	}, []);

	const addPokemon = (pokemon) => {
		if (!team.includes(pokemon)) setTeam([...team, pokemon]);
	};

	const removePokemon = (pokemon) => {
		const temp = [...team];
		temp.splice(temp.indexOf(pokemon), 1);
		setTeam(temp);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<nav>
					<Link to='/pokedex'>
						<h1>Pokedex</h1>
					</Link>
					<Link to='/myteam'>
						<h1>MyTeam</h1>
					</Link>
				</nav>
			</header>
			<main>
				<section>
					<Route
						path='/pokedex'
						render={() => <Pokedex pokemonArr={pokemonArr} />}
					/>
					<Route
						path='/pokedex/:pokemon'
						render={() => <Pokemon addPokemon={addPokemon} />}
					/>
				</section>
				<Route
					path='/myteam'
					exact
					render={() => <MyTeam team={team} removePokemon={removePokemon} />}
				/>
			</main>
		</div>
	);
}

export default App;
