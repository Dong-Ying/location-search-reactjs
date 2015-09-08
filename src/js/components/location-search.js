/** @jsx React.DOM */
var LocationSearch = React.createClass({
    getInitialState: function () {
        return {
            locations: [{
                name: 'Melbourne',
                description: 'A great place',
                liked: false,
                id: _.uniqueId('todo_')
            }],
            likedPlaces: []
        };
    },
    handleSearch: function (newLocations) {
        this.setState({
            locations: newLocations
        });
    },
    toggleLike: function(id) {
        var locations = this.state.locations;
        var location = _.first(_.where(locations, {id: id}));
        location.liked = !location.liked;
        this.setState({locations: locations});
    },
    render: function () {
        return (
            <div>
                <div className="row">
                    <SearchForm onSearch={this.handleSearch}/>
                </div>

                <div className="row">
                    <hr className="large-12 columns"/>
                </div>

                <div className="row">
                    <SearchResult locations={this.state.locations} onToggleLike={this.toggleLike}/>
                    <LikedPlaces locations={this.state.locations} onUnlike={this.toggleLike}/>
                </div>
            </div>
        );
    }
});