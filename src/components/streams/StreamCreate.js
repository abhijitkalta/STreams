import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../Actions/index';

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length < 3) {
    errors.title = 'Must be 3 characters or more'
  }

  if (!values.description) {
    errors.description = 'Required'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.description > 5) {
    warnings.description = 'Hmm, it seems a bit long...'
  }
  return warnings
}

class StreamCreate extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  onSubmit(formValues){
    this.props.createStream(formValues);
  }

  renderField ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) {
    return (
      <div className="field">
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span className="ui error message">{error}</span>) ||
              (warning && <span className="ui error message">{warning}</span>))}
        </div>
      </div>
    )
  }

  render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field
            name="title"
            type="text"
            component={this.renderField}
            label="Title"
            />
          <Field name="description" type="text" component={this.renderField} label="Description" />
          <div>
            <button type="submit" disabled={this.props.submitting} className="ui primary button">
              Submit
            </button>
            <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset} className="ui button">
              Clear Values
            </button>
        </div>
        </form>
      </div>
    )
  }
};

const formWrapped = reduxForm({
  form: 'StreamCreate',
  validate,
  warn
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
