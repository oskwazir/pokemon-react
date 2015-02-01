var FilterablePokedexTable = React.createClass({
    render: function(){
        return (
                <div>
                    <SearchBar />
                    <PokedexTable pokemon={this.props.pokemon} />
                </div>)
    }
});