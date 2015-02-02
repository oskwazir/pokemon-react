var PokedexTable = React.createClass({
    render:function(){
        "use strict";
        var rows = [];
        this.props.pokemon.forEach(function(pokemon){
            rows.push(<PokemonRow pokemon={pokemon} key={pokemon.name} />);
        });

        return (<div className="main">
                    {rows}
                </div>);
    }
});