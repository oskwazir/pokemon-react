/* @flow */
var React = require('react');
var FlexCell: any = require('./FlexCell.react');
var FlexDetail = require('./FlexDetail.react');

class FlexGrid extends React.Component{
    state: {detail: string};
    render: Function;
    constructor(): void {
        super();
        this.state = {detail:''};
        this.render = this.render.bind(this);
    }
    handleDetailSelection(title: string) {
        console.log(`You picked ${title}`);
        this.setState({detail:title});
    }
    handleDetailClosing(){
        this.setState({detail:''});
    }
    render(): any {
        if(this.state.detail){
            return (<FlexDetail title={this.state.detail}
                                closeHandler={this.handleDetailClosing.bind(this)}/>);
        } else {
            return (
                <main className="main">
                {this.props.pokemon.map( p => {
                    if( p.name.indexOf(this.props.filterText.toLowerCase()) === -1){
                        return;
                    }
                return <FlexCell title={p.name} key={p.name} clickHandler={this.handleDetailSelection.bind(this)}/>
            })}</main>);
        }
    }
};

module.exports = FlexGrid;