/* @flow */
"use strict";

var React = require('react');
var FilterableFlexGrid:any = require('./FilterableFlexGrid.react');

var POKEMON = [{"name": "rattata", "resource_uri": "api/v1/pokemon/19/"},
{"name": "charmander", "resource_uri": "api/v1/pokemon/4/"},
{"name": "charmeleon", "resource_uri": "api/v1/pokemon/5/"},
{"name": "wartortle", "resource_uri": "api/v1/pokemon/8/"},
{"name": "blastoise", "resource_uri": "api/v1/pokemon/9/"},
{"name": "caterpie", "resource_uri": "api/v1/pokemon/10/"},
{"name": "metapod", "resource_uri": "api/v1/pokemon/11/"},
{"name": "butterfree", "resource_uri": "api/v1/pokemon/12/"},
{"name": "spearow", "resource_uri": "api/v1/pokemon/21/"},
{"name": "kakuna", "resource_uri": "api/v1/pokemon/14/"},
{"name": "beedrill", "resource_uri": "api/v1/pokemon/15/"},
{"name": "pidgey", "resource_uri": "api/v1/pokemon/16/"},
{"name": "pidgeotto", "resource_uri": "api/v1/pokemon/17/"},
{"name": "pidgeot", "resource_uri": "api/v1/pokemon/18/"},
{"name": "raticate", "resource_uri": "api/v1/pokemon/20/"},
{"name": "fearow", "resource_uri": "api/v1/pokemon/22/"},
{"name": "pikachu", "resource_uri": "api/v1/pokemon/25/"},
{"name": "ekans", "resource_uri": "api/v1/pokemon/23/"},
{"name": "raichu", "resource_uri": "api/v1/pokemon/26/"},
{"name": "arbok", "resource_uri": "api/v1/pokemon/24/"},
{"name": "nidorina", "resource_uri": "api/v1/pokemon/30/"},
{"name": "sandshrew", "resource_uri": "api/v1/pokemon/27/"},
{"name": "nidoran-m", "resource_uri": "api/v1/pokemon/32/"},
{"name": "nidoran-f", "resource_uri": "api/v1/pokemon/29/"},
{"name": "nidoqueen", "resource_uri": "api/v1/pokemon/31/"},
{"name": "nidorino", "resource_uri": "api/v1/pokemon/33/"},
{"name": "nidoking", "resource_uri": "api/v1/pokemon/34/"},
{"name": "clefable", "resource_uri": "api/v1/pokemon/36/"},
{"name": "jigglypuff", "resource_uri": "api/v1/pokemon/39/"},
{"name": "vulpix", "resource_uri": "api/v1/pokemon/37/"},
{"name": "ninetales", "resource_uri": "api/v1/pokemon/38/"},
{"name": "wigglytuff", "resource_uri": "api/v1/pokemon/40/"},
{"name": "zubat", "resource_uri": "api/v1/pokemon/41/"},
{"name": "venonat", "resource_uri": "api/v1/pokemon/48/"},
{"name": "meowth", "resource_uri": "api/v1/pokemon/52/"},
{"name": "golbat", "resource_uri": "api/v1/pokemon/42/"},
{"name": "oddish", "resource_uri": "api/v1/pokemon/43/"},
{"name": "gloom", "resource_uri": "api/v1/pokemon/44/"},
{"name": "vileplume", "resource_uri": "api/v1/pokemon/45/"}];

React.render(<FilterableFlexGrid  pokemon={POKEMON} />, document.getElementById('container'));