/** @jsx React.DOM */
var LikedPlaces = React.createClass({
    render: function () {
        var likedPlacesNodes = this.props.likedPlaces.map(function (likedPlace) {
            return (
                <LikedPlace place={likedPlace} onUnlike={this.props.onUnlike}/>
            )
        }.bind(this));

        return (
            <div id="likedPlaces" className="large-4 medium-4 columns">
                <h4>Places I liked</h4>
                <nav>
                    <ul>
                        {likedPlacesNodes}
                    </ul>
                </nav>
            </div>
        );
    }
});