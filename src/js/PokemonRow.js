/* @flow */
var PokemonRow = React.createClass({
    render: function(){
        "use strict";
        return (<div className="item">{this.props.pokemon.name}</div>);
    }
});