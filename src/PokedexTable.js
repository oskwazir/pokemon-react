var PokedexTable = React.createClass({
    render:function(){
        var rows = [];
        this.props.pokemon.forEach(function(pokemon){
            rows.push(<PokemonRow pokemon={pokemon} key={pokemon.name} />);
        });

        return (<div><h1 className="list-title">Pokedex</h1>
                <ul>
                    <li>{rows}</li>
                </ul></div>);
    }
});