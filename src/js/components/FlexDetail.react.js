/* @flow */
var React = require('react');
class FlexDetail extends React.Component{
    render(): any  {
        return  <div className="detail animated fadeIn">
                    <span onClick={this.props.closeHandler} className="close">&#11013; Back to Pokedex</span>
                    <header>
                        <h1 className="title">{this.props.title}</h1>
                    </header>
                </div>;
    }
};

module.exports = FlexDetail;