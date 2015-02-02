var SearchBar = React.createClass({
    render: function(){
        "use strict";
        return (<div className="wrapper">
                    <header className="header"><h1>Pokedex</h1></header>
                    <form>
                        <input className="searchBar" type="text" placeholder="Search..." />
                    </form>
                </div>);
    }
});

/*
<div class="wrapper">
  <header class="header"><h1>Pokedex</h1></header>
    <form>
    <input class="searchBar" type="text" placeholder="Search..." />
  </form>
</div>
*/