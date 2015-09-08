var LikedPlace = React.createClass({
    unlike: function(e) {
        e.preventDefault();
        var unlikedPlace = $(e.currentTarget).parent().text();
        this.props.onUnlike({name: unlikedPlace});
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