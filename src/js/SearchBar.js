var SearchBar = React.createClass({
    handleChange: function() {
        "use strict";
        var self = this;
        self.props.onUserInput(
            self.refs.filterTextInput.getDOMNode().value
        );
    },
    render: function(){
        "use strict";
        return (<div className="wrapper">
                    <header className="header"><h1>Pokedex</h1></header>
                    <form>
                        <input 
                            value={this.props.filterText}
                            onChange={this.handleChange}
                            ref="filterTextInput"
                            className="searchBar h1" 
                            type="text" 
                            placeholder="Search..." />
                    </form>
                </div>);
    }
});