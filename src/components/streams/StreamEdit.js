import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
  //fetch its own data
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const matchedId = ownProps.match.params.id;
  return { stream: state.streams[matchedId] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
//with React-Router each component needs to be designed to work in isolation (fetch its own data)
//which means we shouldnt depand on state since we setch the data in the componentDidMount stage

//for the streamForm we use a initialvalues props with two curly braces so we write two properties with name and description ....which will be matched with our name [<Field
/*          name="title"
          component={this.renderInput}
          label={'Enter the title'}
        />] */

//for the lodash the pick function pick the desired items as object , from the given object
