import './MyTeam.css';

const MyTeam = (props) => {
	const teamJsx = props.team.map((pokemon) => {
		return (
			<div className='pokemon-data'>
				<img src={pokemon.img} alt={pokemon.name} />
				<p>{pokemon.name}</p>
				<button onClick={() => props.removePokemon(pokemon)}>Remove</button>
			</div>
		);
	});

	return <div id='my-team'>{teamJsx}</div>;
};

export default MyTeam;
