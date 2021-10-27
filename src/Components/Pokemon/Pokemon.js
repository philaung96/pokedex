import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';
import './Pokemon.css';

const Pokemon = (props) => {
	const { pokemon } = useParams();
	const [pokemonObj, setPokemonObj] = useState({
		name: '',
		height: '',
		weight: '',
		type: '',
		img: '',
	});

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
			.then((res) => res.json())
			.then((json) => {
				setPokemonObj({
					name: json.name,
					height: json.height,
					weight: json.weight,
					type: json.types,
					img: json.sprites.front_default,
				});
			});
	}, [pokemon]);

	let typeStr = '';
	if (pokemonObj.type)
		pokemonObj.type.forEach((type) => {
			typeStr += type.type.name + ' ';
		});

	return (
		<div>
			<div className='pokemon-data'>
				<img src={pokemonObj.img} alt='...' />
				<p>Name: {pokemonObj.name}</p>
				<p>Height: {pokemonObj.height}</p>
				<p>Weight: {pokemonObj.weight}</p>
				<p>Type: {typeStr}</p>
				<button onClick={() => props.addPokemon(pokemonObj)}>
					add to team
				</button>
			</div>
		</div>
	);
};

export default Pokemon;
