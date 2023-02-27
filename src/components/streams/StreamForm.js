import React from 'react';
import { Field, reduxForm } from 'redux-form';

//Field is a component and reduxForm is a function
//Reusable component
class StreamForm extends React.Component {
  //handleing error
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    //in the formProps object we cant find other properties ratheer than input and meta so other properties will pass on as prop
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`; //to show red the input
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  //call back fun to handle onSubmit[we dont prevent defaul here as we do earlier]
  onSubmit = (formValues) => {
    //formprops is an object containig name & description
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label={'Enter the title'}
        />
        <Field
          name="description"
          component={this.renderInput}
          label={'Enter the description'}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
//Validate[it will be called in mount stage and everytime a user interactes  ]-if we return empty object redux think we are valid ,but if it is key value pair object then we have error
const validate = (formValues) => {
  const errors = {};
  //if there is no title
  if (!formValues.title) {
    errors.title = 'you must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'you must enter a description';
  }

  return errors; //it is valid
};

export default reduxForm({
  form: 'streamForm',
  validate: validate,
})(StreamForm);

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
