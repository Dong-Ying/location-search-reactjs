/** @jsx React.DOM */
var SearchResult = React.createClass({
    like: function (e) {
        e.preventDefault();
        var likedPlace = {name: $(e.currentTarget).parent().find("h5").text()};
        this.props.onLike(likedPlace);
    },
    toggleLike: function (e) {
        e.preventDefault();
        var likeButton = $(e.currentTarget);
        var location = {name: likeButton.parent().find("h5").text()};
        if (likeButton.text() == "Like") {
            likeButton.text("Unlike");
            this.props.onLike(location);
        } else {
            likeButton.text("Like");
            this.props.onUnlike(location);
        }
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
                                    <a onClick={this.toggleLike} className="like button tiny right">Like</a>
                                </div>
                            )
                        }.bind(this))
                    }
                </div>
            </div>
        );
    }
});