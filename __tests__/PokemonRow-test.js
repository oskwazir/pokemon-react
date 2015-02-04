jest.dontMock('../build/PokemonRow.react');
describe('PokemonRow', function() {
  it('displays the name of the Pokemon', function() {
    var React = require('react/addons');
    var PokemonRow = require('../build/PokemonRow.react');
    var TestUtils = React.addons.TestUtils;

    // Render a paragraph element with the name of a fake pokemon
    var pokemon = {name:'Wuzzy'};
    var pokemonRow = TestUtils.renderIntoDocument(<PokemonRow pokemon={pokemon} key={pokemon.name}/>);

    // Verify that it actually was made with the right name.
    var name = React.findDOMNode(pokemonRow).textContent;
    expect(name).toEqual(pokemon.name);
  });
});