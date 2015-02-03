/* @flow */
class PokemonRow extends React.Component{
    render() {
        return (<div className="item animated fadeIn">{this.props.pokemon.name}</div>);
    }
};