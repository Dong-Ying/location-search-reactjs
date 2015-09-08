/** @jsx React.DOM */
var Location = React.createClass({
    toggleLike: function (e) {
        e.preventDefault();
        this.props.onToggleLike(this.props.location.id);
    },
    render: function () {
        var location = this.props.location;
        return (
            <div className="panel large-12 columns">
                <h5>{location.name}</h5>
                <h6>{location.description}</h6>
                <a onClick={this.toggleLike} className="like button tiny right">
                    {location.liked ? 'Unlike' : 'Like' }
                </a>
            </div>
        )
    }
});