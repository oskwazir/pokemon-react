var React = require('react');
class SearchBar extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.props.onUserInput(
            this.refs.filterTextInput.getDOMNode().value
        );
    }
    render() {
        return (<form>
                    <input 
                        value={this.props.filterText}
                        onChange={this.handleChange}
                        ref="filterTextInput"
                        className="searchBar h1" 
                        type="text" 
                        placeholder="Search..." />
                </form>);
    }
};
module.exports = SearchBar;