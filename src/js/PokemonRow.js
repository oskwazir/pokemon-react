/* @flow */
var PokemonRow = React.createClass({
    render: function(){
        "use strict";
        return (<div className="item animated fadeIn">{this.props.pokemon.name}</div>);
    }
});