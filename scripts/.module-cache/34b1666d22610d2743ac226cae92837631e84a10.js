/* @flow */
var PokemonRow = React.createClass({displayName: "PokemonRow",
    render: function(){
        return (React.createElement("tr", null, React.createElement("td", null, this.props.pokemon.name)))
    }
})