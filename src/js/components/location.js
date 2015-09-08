/** @jsx React.DOM */
var Location = React.createClass({
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
            <div className="panel large-12 columns">
                <h5>{this.props.location.name}</h5>
                <h6>{this.props.location.description}</h6>
                <a onClick={this.toggleLike} className="like button tiny right">Like</a>
            </div>
        )
    }
});