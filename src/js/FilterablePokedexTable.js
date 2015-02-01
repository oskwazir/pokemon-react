var FilterablePokedexTable = React.createClass({
    render: function(){
        "use strict";
        return (
                <div>
                    <SearchBar />
                    <PokedexTable pokemon={this.props.pokemon} />
                </div>);
    }
});