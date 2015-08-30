/** @jsx React.DOM */
var SearchForm = React.createClass({
    search: function (e) {
        e.preventDefault();
        var search_word = React.findDOMNode(this.refs.searchWord).value.trim();
        this.props.onSearch(search_word);
    },
    render: function () {
        return (
            <div id="searchForm">
                <div className="large-9 medium-9 columns">
                    <input type="text" id="locationInput" ref="searchWord"
                           placeholder="Type a location name to search"/>
                </div>
                <div className="large-3 medium-3 columns">
                    <input type="button" onClick={this.search} className="submit button tiny" id="searchButton"
                           value="search"/>
                </div>
            </div>
        );
    }
});