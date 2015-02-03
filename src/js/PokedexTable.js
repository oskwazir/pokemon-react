class PokedexTable extends React.Component{
    constructor() {
        super();
        this.render = this.render.bind(this);
      }
    render() {
        var rows = [];
        this.props.pokemon.forEach( pokemon => {
            if(pokemon.name.indexOf(this.props.filterText) === -1){
                return;
            }
            rows.push(<PokemonRow pokemon={pokemon} key={pokemon.name} />);
        });
        return (<div className="main">{rows}</div>);
    }
};