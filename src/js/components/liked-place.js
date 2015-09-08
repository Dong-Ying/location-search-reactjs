/** @jsx React.DOM */
var LikedPlace = React.createClass({
    unlike: function(e) {
        e.preventDefault();
        this.props.onUnlike(this.props.place.id);
    },
    render: function () {
        return (
            <li className="like">
                {this.props.place.name}
                <span className="icon icon-cancel unlike" onClick={this.unlike}></span>
            </li>
        );
    }
});