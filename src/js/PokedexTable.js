var PokedexTable = React.createClass({
    render:function(){
        "use strict";
        var self = this;
        var rows = [];
        self.props.pokemon.forEach(function(pokemon){
            if(pokemon.name.indexOf(self.props.filterText) === -1){
                return;
            }
            rows.push(<PokemonRow pokemon={pokemon} key={pokemon.name} />);
        });
        return (
            <div className="main">
                    {rows}
                </div>);
    }
});