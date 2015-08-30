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
    handleLike: function (likedPlace) {
        this.setState({likedPlaces: this.state.likedPlaces.concat([likedPlace])})
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
                    <SearchResult locations={this.state.locations} onLike={this.handleLike}/>
                    <LikedPlaces likedPlaces={this.state.likedPlaces}/>
                </div>
            </div>
        );
    }
});