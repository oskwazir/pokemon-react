var SearchBar = React.createClass({displayName: "SearchBar",
    render: function(){
        return React.createElement("form", null, 
                    React.createElement("input", {type: "text", placeholder: "Search..."})
                )
    }
});