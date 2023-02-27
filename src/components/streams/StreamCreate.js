import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
//Field is a component and reduxForm is a function

class StreamCreate extends React.Component {
  //call back fun to handle onSubmit[we dont prevent defaul here as we do earlier]
  onSubmit = (formValues) => {
    //formprops is an object containig name & description
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
//Field doesnt know how to display the elments directly so we should use components props
/**<input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
 * we can shorten this as 
  <input {...formProps.input}/>
      or destructure the object

      {input}  and inside <input {...input}/>
 */
