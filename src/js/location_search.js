/** @jsx React.DOM */
var LocationSearch = React.createClass({
    getInitialState: function () {
        return {
            locations: [],
            likedPlaces: []
        };
    },
    handleSearch: function (searchWord) {
        $.ajax({
            url: "http://location-backend-service.herokuapp.com/locations?name=" + searchWord
        }).done(function (data) {
            this.setState({locations: data});
        }.bind(this));
    },
    handleLike: function (location) {
        this.setState({likedPlaces: this.state.likedPlaces.concat([location])})
    },
    handleUnlike: function (location) {
        var likedPlaces = _.reject(this.state.likedPlaces, function (likedPlace) {
            return likedPlace.name == location.name
        });
        this.setState({likedPlaces: likedPlaces});
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
                    <SearchResult locations={this.state.locations} onLike={this.handleLike}
                                  onUnlike={this.handleUnlike}/>
                    <LikedPlaces likedPlaces={this.state.likedPlaces}/>
                </div>
            </div>
        );
    }
});