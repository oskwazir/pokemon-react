var PokedexTable = React.createClass({displayName: "PokedexTable",
    render:function(){
        var rows = [];
        this.props.pokemon.forEach(function(pokemon){
            rows.push(React.createElement(PokemonRow, {pokemon: pokemon, key: pokemon.name}));
        });

        return (React.createElement("table", null, 
                    React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "Pokedex")
                        )
                    ), 
                    React.createElement("tbody", null, rows)
                ));
    }
});