var FilterablePokedexTable = React.createClass({
    getInitialState: function() {
        return {
            filterText: ''
        };
    },
    handleUserInput: function(filterText) {
        var self = this;
        self.setState({
            filterText: filterText
        });
    },
    render: function(){
        "use strict";
        return (
                <div>
                    <SearchBar 
                        filterText={this.state.filterText}
                        onUserInput={this.handleUserInput} />
                    <PokedexTable 
                        filterText={this.state.filterText}
                        pokemon={this.props.pokemon} />
                </div>);
    }
});