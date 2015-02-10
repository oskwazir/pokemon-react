/* @flow */
var React = require('react');
class FlexCell extends React.Component{
    render(): any  {
        return <div className="cell animated fadeIn">
          <p>{this.props.title}</p>
        </div>;
    }
};

module.exports = FlexCell;