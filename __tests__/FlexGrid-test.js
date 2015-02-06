jest.dontMock('../build/FlexGrid.react')
describe('FlexGrid', function(){
  var React, TestUtils, FlexGrid,filterText,pokemon;
  
  beforeEach(function(){
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    FlexGrid = require('../build/FlexGrid.react');
    filterText='';
    pokemon=[]
  });

  it('displays a grid of FlexCells', function(){
    var flexGridElement = TestUtils.renderIntoDocument(
        <FlexGrid 
          filterText={filterText}
          pokemon={pokemon} />);

    var result = React.findDOMNode(flexGridElement);
    expect(result).toNotEqual(null);
    expect(result.nodeName).toEqual('DIV');
    expect(result.nodeType).toEqual(1);

  });
})