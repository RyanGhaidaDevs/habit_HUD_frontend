import React, { Component } from 'react' ; 
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';
 
 
class PostsNew extends Component {

  renderField(field) {
    //destructuring using es6
    //field.meta.error is automatically adding error message (if any) for each Field
    // instead of having to write field.meta.error we can write error. 
    const { meta: { touched, error } } = field;

    //If touched and error styl the text box accordingly - red. 
    const className = `form-group ${touched && error ? 'has-danger': ''}`

    return(
      <div className={className} > 
      <label> {field.label} </label>
        <input 
        className="form-control"
        type="text"
        //handles all event handlers for us. 
          {...field.input}
        />
        <div className="text-help">
        {touched ? error : ""} 
        </div>
      </div>
    );
  }

  onSubmit(values) {
    //bind(this); this === component scope
    //values is an Obj with all our form inputs.
    this.props.createPost(values, () => {
      //this.props.history.push('path') will send user to specific path
      this.props.history.push('/');
    });
  }

  render() {
    //Reduxform adds property to our component; handleSubmit is one of them
    const { handleSubmit } = this.props

    return(
      //Redux form's handleSubmit will handle validation before passing to onSubmit
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <Field 
          label="user_id"
          name="user_id"
          component={this.renderField}
        /> 
        <Field 
          label="body"
          name="body"
          component={this.renderField}
        /> 
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger"> Cancel </Link>
      </form>
    )
  }
}

//Validate function is called automatically on Submit
//values is an obj that contains all values from form
//Always start with empty Error Obj; if Rrror Obj is anyhting BUT empty, errors will dispaly.
function validate(values) {
  const errors = {};

  if(!values.body){
    errors.body = "Enter a body!";
  }
  if(!values.user_id){
    errors.user_id = "Must be 1 (pending feature)"
  }

  return errors;
}


//When we want to combine connect an redux form we do as follows: 
export default reduxForm({
  //redux From validation 
  validate: validate,
  //ensure that string assigned to form: property is unique; it is the state for this specific form. 
  form: 'PostsNewForm'
})(
  connect(null,{ createPost})(PostsNew)
);
