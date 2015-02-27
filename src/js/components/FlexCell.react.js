/* @flow */
var React = require('react');
class FlexCell extends React.Component{
    handleClick() {
        this.props.clickHandler(`${this.props.title}`);
    }
    render(): any  {
        React.initializeTouchEvents(true);
        return <div className="cell animated fadeIn">
          <p onClick={this.handleClick.bind(this)} onTouchEnd={this.handleClick.bind(this)} >{this.props.title}</p>
        </div>;
    }
};

module.exports = FlexCell;