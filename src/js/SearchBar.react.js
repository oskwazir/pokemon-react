/* @flow */
var React = require('react');
class SearchBar extends React.Component {
    handleChange: Function;
    constructor(): void {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(): void {
        this.props.onUserInput(this.refs.filterTextInput.getDOMNode().value);
    }
    render(): any {
        return (
                <ul className="navigation">
                  <li><a href="#">Pokedex</a></li>
                    <form>
                        <input 
                            value={this.props.filterText}
                            onChange={this.handleChange}
                            ref="filterTextInput"
                            className="searchBar h1" 
                            type="text" 
                            placeholder="Search..." />
                    </form>
                </ul>);
    }
};
module.exports = SearchBar;
