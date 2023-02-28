import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

//on click callback fun. but we dont want the event propagate from its child so we should use stopPropagation
const closeModal = () => {
  return history.push('/');
};

class StreamDelete extends React.Component {
  //first loads
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  //support render
  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to={`/`} className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    //:TODO: remember that we gain stream object from our mapstateto props...until then[wait fetch] we want to display some message
    if (!this.props.stream) {
      return `Are you sure you want to delete this ?`;
    }
    return `Are you sure you want to delete the stream with title ${this.props.stream.title}`;
  }
  //render
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={closeModal}
      />
    );
  }
}
//map state-ownProps.match.params.id__ return specific key of obj. so using that we select the specific obj using property selector []
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
  //so we expect a stream object
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
//React fragment is a JSX looking element that allow us to return a multiple elments inside[instead of Div]
//it is not rendered in the elements so if we inspect we cant find it
