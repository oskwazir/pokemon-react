/* @flow */
var React = require('react');
var FlexCell: any = require('./FlexCell.react');

class FlexGrid extends React.Component{
    render: Function;
    constructor(): void {
        super();
        this.render = this.render.bind(this);
      }
    render(): any {
        //not sure how to annotate JSX so I just make it any.
        // var rows:Array<any> = [];
        // this.props.pokemon.map( pokemon => {
        //     if(pokemon.name.indexOf(this.props.filterText) === -1){
        //         return;
        //     }
        //     rows.push(<FlexCell title={pokemon.name} key={pokemon.name} />);
        // });

        return (<div className="main">
            {this.props.pokemon.map( p => {
                if( p.name.indexOf(this.props.filterText) === -1){
                    return;
                }
                return <FlexCell title={p.name} key={p.name} />
            })}</div>);
    }
};

module.exports = FlexGrid;