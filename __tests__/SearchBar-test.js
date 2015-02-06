jest.dontMock('../build/SearchBar.react')
describe('SearchBar', function(){
  var React, TestUtils, SearchBar, fakeInputHandler;
  
  beforeEach(function(){
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    SearchBar = require('../build/SearchBar.react');
    fakeInputHandler = function(){};
  });

  it('displays a form', function(){
    var searchBarElement = TestUtils.renderIntoDocument(<SearchBar 
                        filterText=""
                        onUserInput={this.fakeInputHandler} />);

    var result = React.findDOMNode(searchBarElement);
    expect(result).toNotEqual(null);
    expect(result.nodeName).toEqual('FORM');
    expect(result.nodeType).toEqual(1);

  });

  it('and the form has an input field', function(){
    var searchBarElement = TestUtils.renderIntoDocument(<SearchBar 
                        filterText="Search"
                        onUserInput={this.fakeInputHandler} />);
    var result = React.findDOMNode(searchBarElement);
    expect(result.children[0].nodeName).toEqual('INPUT');
  });
})