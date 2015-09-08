/** @jsx React.DOM */
var SearchResult = React.createClass({
    render: function () {
        return (
            <div id="searchResults" className="large-8 medium-8 columns">
                <h4>Search results</h4>

                <div id="results">
                    {
                        this.props.locations.map(function (location) {
                            return (
                                <Location location={location} onLike={this.props.onLike}
                                          onUnlike={this.props.onUnlike}/>
                            )
                        }.bind(this))
                    }
                </div>
            </div>
        );
    }
});