var FilterablePokedexTable = React.createClass({displayName: "FilterablePokedexTable",
    render: function(){
        return (
                React.createElement("div", null, 
                    React.createElement(SearchBar, null), 
                    React.createElement(PokedexTable, {pokemon: this.props.pokemon})
                ))
    }
});