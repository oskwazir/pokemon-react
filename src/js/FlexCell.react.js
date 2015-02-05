/* @flow */
var React = require('react');
class FlexCell extends React.Component{
    render(): any  {
        return <p className="cell animated fadeIn">{this.props.title}</p>;
    }
};

module.exports = FlexCell;