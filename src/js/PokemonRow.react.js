/* @flow */
var React = require('react');
class PokemonRow extends React.Component{
    render() {
        return (<p className="item animated fadeIn">{this.props.pokemon.name}</p>);
    }
};

module.exports = PokemonRow;