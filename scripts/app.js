"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var FilterablePokedexTable = (function (_React$Component) {
    function FilterablePokedexTable(props) {
        _get(Object.getPrototypeOf(FilterablePokedexTable.prototype), "constructor", this).call(this, props);
        this.state = { filterText: "" };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    _inherits(FilterablePokedexTable, _React$Component);

    _prototypeProperties(FilterablePokedexTable, null, {
        handleUserInput: {
            value: function handleUserInput(filterText) {
                this.setState({
                    filterText: filterText
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement("div", null, React.createElement(SearchBar, {
                    filterText: this.state.filterText,
                    onUserInput: this.handleUserInput }), React.createElement(PokedexTable, {
                    filterText: this.state.filterText,
                    pokemon: this.props.pokemon }));
            },
            writable: true,
            configurable: true
        }
    });

    return FilterablePokedexTable;
})(React.Component);

;
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PokedexTable = (function (_React$Component) {
    function PokedexTable() {
        _get(Object.getPrototypeOf(PokedexTable.prototype), "constructor", this).call(this);
        this.render = this.render.bind(this);
    }

    _inherits(PokedexTable, _React$Component);

    _prototypeProperties(PokedexTable, null, {
        render: {
            value: function render() {
                var _this = this;
                var rows = [];
                this.props.pokemon.forEach(function (pokemon) {
                    if (pokemon.name.indexOf(_this.props.filterText) === -1) {
                        return;
                    }
                    rows.push(React.createElement(PokemonRow, { pokemon: pokemon, key: pokemon.name }));
                });
                return React.createElement("div", { className: "main" }, rows);
            },
            writable: true,
            configurable: true
        }
    });

    return PokedexTable;
})(React.Component);

;
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

/* @flow */
var PokemonRow = (function (_React$Component) {
    function PokemonRow() {
        if (Object.getPrototypeOf(PokemonRow) !== null) {
            Object.getPrototypeOf(PokemonRow).apply(this, arguments);
        }
    }

    _inherits(PokemonRow, _React$Component);

    _prototypeProperties(PokemonRow, null, {
        render: {
            value: function render() {
                return React.createElement("div", { className: "item animated fadeIn" }, this.props.pokemon.name);
            },
            writable: true,
            configurable: true
        }
    });

    return PokemonRow;
})(React.Component);

;
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var SearchBar = (function (_React$Component) {
    function SearchBar() {
        _get(Object.getPrototypeOf(SearchBar.prototype), "constructor", this).call(this);
        this.handleChange = this.handleChange.bind(this);
    }

    _inherits(SearchBar, _React$Component);

    _prototypeProperties(SearchBar, null, {
        handleChange: {
            value: function handleChange() {
                this.props.onUserInput(this.refs.filterTextInput.getDOMNode().value);
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement("div", { className: "wrapper" }, React.createElement("header", { className: "header" }, React.createElement("h1", null, "Pokedex")), React.createElement("form", null, React.createElement("input", {
                    value: this.props.filterText,
                    onChange: this.handleChange,
                    ref: "filterTextInput",
                    className: "searchBar h1",
                    type: "text",
                    placeholder: "Search..." })));
            },
            writable: true,
            configurable: true
        }
    });

    return SearchBar;
})(React.Component);

;
"use strict";

var POKEMON = [{ name: "rattata", resource_uri: "api/v1/pokemon/19/" }, { name: "charmander", resource_uri: "api/v1/pokemon/4/" }, { name: "charmeleon", resource_uri: "api/v1/pokemon/5/" }, { name: "wartortle", resource_uri: "api/v1/pokemon/8/" }, { name: "blastoise", resource_uri: "api/v1/pokemon/9/" }, { name: "caterpie", resource_uri: "api/v1/pokemon/10/" }, { name: "metapod", resource_uri: "api/v1/pokemon/11/" }, { name: "butterfree", resource_uri: "api/v1/pokemon/12/" }, { name: "spearow", resource_uri: "api/v1/pokemon/21/" }, { name: "kakuna", resource_uri: "api/v1/pokemon/14/" }, { name: "beedrill", resource_uri: "api/v1/pokemon/15/" }, { name: "pidgey", resource_uri: "api/v1/pokemon/16/" }, { name: "pidgeotto", resource_uri: "api/v1/pokemon/17/" }, { name: "pidgeot", resource_uri: "api/v1/pokemon/18/" }, { name: "raticate", resource_uri: "api/v1/pokemon/20/" }, { name: "fearow", resource_uri: "api/v1/pokemon/22/" }, { name: "pikachu", resource_uri: "api/v1/pokemon/25/" }, { name: "ekans", resource_uri: "api/v1/pokemon/23/" }, { name: "raichu", resource_uri: "api/v1/pokemon/26/" }, { name: "arbok", resource_uri: "api/v1/pokemon/24/" }, { name: "nidorina", resource_uri: "api/v1/pokemon/30/" }, { name: "sandshrew", resource_uri: "api/v1/pokemon/27/" }, { name: "nidoran-m", resource_uri: "api/v1/pokemon/32/" }, { name: "nidoran-f", resource_uri: "api/v1/pokemon/29/" }, { name: "nidoqueen", resource_uri: "api/v1/pokemon/31/" }, { name: "nidorino", resource_uri: "api/v1/pokemon/33/" }, { name: "nidoking", resource_uri: "api/v1/pokemon/34/" }, { name: "clefable", resource_uri: "api/v1/pokemon/36/" }, { name: "jigglypuff", resource_uri: "api/v1/pokemon/39/" }, { name: "vulpix", resource_uri: "api/v1/pokemon/37/" }, { name: "ninetales", resource_uri: "api/v1/pokemon/38/" }, { name: "wigglytuff", resource_uri: "api/v1/pokemon/40/" }, { name: "zubat", resource_uri: "api/v1/pokemon/41/" }, { name: "venonat", resource_uri: "api/v1/pokemon/48/" }, { name: "meowth", resource_uri: "api/v1/pokemon/52/" }, { name: "golbat", resource_uri: "api/v1/pokemon/42/" }, { name: "oddish", resource_uri: "api/v1/pokemon/43/" }, { name: "gloom", resource_uri: "api/v1/pokemon/44/" }, { name: "vileplume", resource_uri: "api/v1/pokemon/45/" }];

React.render(React.createElement(FilterablePokedexTable, { pokemon: POKEMON }), document.getElementById("container"));