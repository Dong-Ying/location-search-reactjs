/** @jsx React.DOM */
var SearchResult = React.createClass({
    like: function(e) {
        e.preventDefault();
        var likedPlace = {name: $(e.currentTarget).parent().find("h5").text()};
        this.props.onLike(likedPlace);
    },
    render: function () {
        return (
            <div id="searchResults" className="large-8 medium-8 columns">
                <h4>Search results</h4>

                <div id="results">
                    {
                        this.props.locations.map(function (location) {
                            return (
                                <div className="panel large-12 columns">
                                    <h5>{location.name}</h5>
                                    <h6>{location.description}</h6>
                                    <a onClick={this.like} className="like button tiny right">Like</a>
                                </div>
                            )
                        }.bind(this))
                    }
                </div>
            </div>
        );
    }
});