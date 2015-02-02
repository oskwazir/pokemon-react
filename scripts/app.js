"use strict";

var FilterablePokedexTable = React.createClass({ displayName: "FilterablePokedexTable",
    getInitialState: function () {
        return {
            filterText: ""
        };
    },
    handleUserInput: function (filterText) {
        var self = this;
        self.setState({
            filterText: filterText
        });
    },
    render: function () {
        "use strict";
        return React.createElement("div", null, React.createElement(SearchBar, {
            filterText: this.state.filterText,
            onUserInput: this.handleUserInput }), React.createElement(PokedexTable, {
            filterText: this.state.filterText,
            pokemon: this.props.pokemon }));
    }
});
"use strict";

var PokedexTable = React.createClass({ displayName: "PokedexTable",
    render: function () {
        "use strict";
        var self = this;
        var rows = [];
        self.props.pokemon.forEach(function (pokemon) {
            if (pokemon.name.indexOf(self.props.filterText) === -1) {
                return;
            }
            rows.push(React.createElement(PokemonRow, { pokemon: pokemon, key: pokemon.name }));
        });
        return React.createElement("div", { className: "main" }, rows);
    }
});
"use strict";

/* @flow */
var PokemonRow = React.createClass({ displayName: "PokemonRow",
    render: function () {
        "use strict";
        return React.createElement("div", { className: "item" }, this.props.pokemon.name);
    }
});
"use strict";

var SearchBar = React.createClass({ displayName: "SearchBar",
    handleChange: function () {
        "use strict";
        var self = this;
        self.props.onUserInput(self.refs.filterTextInput.getDOMNode().value);
    },
    render: function () {
        "use strict";
        return React.createElement("div", { className: "wrapper" }, React.createElement("header", { className: "header" }, React.createElement("h1", null, "Pokedex")), React.createElement("form", null, React.createElement("input", {
            value: this.props.filterText,
            onChange: this.handleChange,
            ref: "filterTextInput",
            className: "searchBar",
            type: "text",
            placeholder: "Search..." })));
    }
});
"use strict";

var POKEMON = [{ name: "rattata", resource_uri: "api/v1/pokemon/19/" }, { name: "charmander", resource_uri: "api/v1/pokemon/4/" }, { name: "charmeleon", resource_uri: "api/v1/pokemon/5/" }, { name: "wartortle", resource_uri: "api/v1/pokemon/8/" }, { name: "blastoise", resource_uri: "api/v1/pokemon/9/" }, { name: "caterpie", resource_uri: "api/v1/pokemon/10/" }, { name: "metapod", resource_uri: "api/v1/pokemon/11/" }, { name: "butterfree", resource_uri: "api/v1/pokemon/12/" }, { name: "spearow", resource_uri: "api/v1/pokemon/21/" }, { name: "kakuna", resource_uri: "api/v1/pokemon/14/" }, { name: "beedrill", resource_uri: "api/v1/pokemon/15/" }, { name: "pidgey", resource_uri: "api/v1/pokemon/16/" }, { name: "pidgeotto", resource_uri: "api/v1/pokemon/17/" }, { name: "pidgeot", resource_uri: "api/v1/pokemon/18/" }, { name: "raticate", resource_uri: "api/v1/pokemon/20/" }, { name: "fearow", resource_uri: "api/v1/pokemon/22/" }, { name: "pikachu", resource_uri: "api/v1/pokemon/25/" }, { name: "ekans", resource_uri: "api/v1/pokemon/23/" }, { name: "raichu", resource_uri: "api/v1/pokemon/26/" }, { name: "arbok", resource_uri: "api/v1/pokemon/24/" }, { name: "nidorina", resource_uri: "api/v1/pokemon/30/" }, { name: "sandshrew", resource_uri: "api/v1/pokemon/27/" }, { name: "nidoran-m", resource_uri: "api/v1/pokemon/32/" }, { name: "nidoran-f", resource_uri: "api/v1/pokemon/29/" }, { name: "nidoqueen", resource_uri: "api/v1/pokemon/31/" }, { name: "nidorino", resource_uri: "api/v1/pokemon/33/" }, { name: "nidoking", resource_uri: "api/v1/pokemon/34/" }, { name: "clefable", resource_uri: "api/v1/pokemon/36/" }, { name: "jigglypuff", resource_uri: "api/v1/pokemon/39/" }, { name: "vulpix", resource_uri: "api/v1/pokemon/37/" }, { name: "ninetales", resource_uri: "api/v1/pokemon/38/" }, { name: "wigglytuff", resource_uri: "api/v1/pokemon/40/" }, { name: "zubat", resource_uri: "api/v1/pokemon/41/" }, { name: "venonat", resource_uri: "api/v1/pokemon/48/" }, { name: "meowth", resource_uri: "api/v1/pokemon/52/" }, { name: "golbat", resource_uri: "api/v1/pokemon/42/" }, { name: "oddish", resource_uri: "api/v1/pokemon/43/" }, { name: "gloom", resource_uri: "api/v1/pokemon/44/" }, { name: "vileplume", resource_uri: "api/v1/pokemon/45/" }];

React.render(React.createElement(FilterablePokedexTable, { pokemon: POKEMON }), document.getElementById("container"));