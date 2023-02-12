import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import streams from '../../apis/streams';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map((stream) => {
      const { title, description, id } = stream;
      return (
        <div className="item" key={id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {title}
            <div className="description">{description} </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

//mapStateToProps
const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) }; //Object.values is a function that convert object  to array
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
