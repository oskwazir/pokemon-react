/* @flow */
var PokemonRow = React.createClass({displayName: "PokemonRow",
    render: function(){
        return (React.createElement("p", null, this.props.pokemon.name))
    }
})