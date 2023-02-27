import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import streams from '../../apis/streams';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  //Admin
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }
  //stream
  renderList() {
    return this.props.streams.map((stream) => {
      const { title, description, id } = stream;
      return (
        <div className="item" key={id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {title}
            <div className="description">{description} </div>
          </div>
        </div>
      );
    });
  }
  //create stream link
  renderCreate() {
    if (this.props.isSignedIn === true) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

//mapStateToProps
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  }; //Object.values is a function that convert object  to array
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
