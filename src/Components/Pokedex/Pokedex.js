import { Link } from 'react-router-dom';
import './Pokedex.css';
const Pokedex = (props) => {
	let pokemonJsx = [];
	if (props.pokemonArr) {
		pokemonJsx = props.pokemonArr.map((pokemon) => (
			<Link to={'/pokedex/' + pokemon.name} key={pokemon.name}>
				<div className='pokemon'>
					<p>{pokemon.name}</p>
				</div>
			</Link>
		));
	}
	return <div id='pokedex'>{pokemonJsx}</div>;
};

export default Pokedex;
