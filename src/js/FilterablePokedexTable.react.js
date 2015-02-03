var React = require('react');
var SearchBar = require('./SearchBar.react');
var PokedexTable = require('./PokedexTable.react');

class FilterablePokedexTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterText: ''};
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    render(){
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
};

module.exports = FilterablePokedexTable;