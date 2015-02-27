/* @flow */
var React = require('react');
var request = require('superagent');
var SearchBar:any = require('./SearchBar.react');
var FlexGrid:any = require('./FlexGrid.react');

// var apiBase = function(baseURI: string){
//     return (request) => `${baseURI}${request.url}`;
// }

class FilterableFlexGrid extends React.Component {
    state: {filterText: string};
    handleUserInput: Function;
    constructor(props: Object): void {
        super(props);
        this.state = {filterText: '', pokemon:[] };
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    componentDidMount(){
    request('http://pokeapi.azurewebsites.net/pokedex', res => {
        const responseText = res.body;
         this.setState({
            pokemon:responseText.pokemon
        })
    })
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
                        pokemon={this.state.pokemon} />
                    <aside className="aside aside-1"></aside>
                    <aside className="aside aside-1"></aside>
                </div>);
    }
};

module.exports = FilterableFlexGrid;