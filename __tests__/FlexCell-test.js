jest.dontMock('../build/FlexCell.react');
describe('FlexCell', function() {
  it('displays text passed as a prop', function() {
    var React = require('react/addons');
    var FlexCell = require('../build/FlexCell.react');
    var TestUtils = React.addons.TestUtils;

    // Render a paragraph element with the name of a fake pokemon
    var pokemon = {name:'Wuzzy'};
    var FlexCellNode = TestUtils.renderIntoDocument(<FlexCell title={pokemon.name} key={pokemon.name}/>);

    // Verify that it actually was made with the right name.
    var text = React.findDOMNode(FlexCellNode).textContent;
    expect(text).toEqual(pokemon.name);
  });
});