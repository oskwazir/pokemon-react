/* @flow */
var React = require('react');
var SearchBar:any = require('./SearchBar.react');
var FlexGrid:any = require('./FlexGrid.react');

class FilterableFlexGrid extends React.Component {
    state: {filterText: string};
    handleUserInput: Function;

    constructor(props: Object): void {
        super(props);
        this.state = {filterText: ''};
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(filterText: string) {
        this.setState({
            filterText: filterText
        });
    }
    render(): any{
        return (
                <div>
                    <SearchBar 
                        filterText={this.state.filterText}
                        onUserInput={this.handleUserInput} />
                    <FlexGrid 
                        filterText={this.state.filterText}
                        pokemon={this.props.pokemon} />
                </div>);
    }
};

module.exports = FilterableFlexGrid;