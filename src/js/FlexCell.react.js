/* @flow */
var React = require('react');
class FlexCell extends React.Component{
    render(): any  {
        return <div className="cell animated fadeIn">
          <img src="/img/pokeball.svg" alt="Pokeball expands into details" />
          <p>{this.props.title}</p>
        </div>;
    }
};

module.exports = FlexCell;