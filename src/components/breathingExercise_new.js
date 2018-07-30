import React, { Component } from 'react' ; 
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBreathingExercise } from '../actions';
import YouTube from 'react-youtube';

 
 
class BreathingExercise extends Component {

  renderField(field) {
    //destructuring using es6
    //field.meta.error is automatically adding error message (if any) for each Field
    // instead of having to write field.meta.error we can write error. 
    const { meta: { touched, error } } = field;

    //If touched and error style the text box accordingly - red. 
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
    this.props.createBreathingExercise(values, () => {
      //this.props.history.push('path') will send user to specific path
      this.props.history.push('/home');
    });
  }

  render() {
    //Reduxform adds property to our component; handleSubmit is one of them
    const { handleSubmit } = this.props

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return(
      <div>
      <YouTube
      className="youtube"
      videoId="LU6Oi80n5J4"
      opts={opts}
      onReady={this._onReady}
      />
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <Field 
          label="user_id"
          name="user_id"
          component={this.renderField}
        /> 
        <Field 
          label="round 1"
          name="round1"
          component={this.renderField}
        /> 
        <Field 
          label="round 2"
          name="round2"
          component={this.renderField}
        /> 
        <Field 
          label="round 3"
          name="round3"
          component={this.renderField}
        /> 
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/home" className="btn btn-danger"> Cancel </Link>
      </form>
      <div className="text-xs-center"> 
          <Link className="btn btn-success" to="/home">
            Back to Habit HUB 
          </Link>
        </div>
      </div>
    )
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

//Validate function is called automatically on Submit
//values is an obj that contains all values from form
//Always start with empty Error Obj; if Rrror Obj is anyhting BUT empty, errors will dispaly.
function validate(values) {
  const errors = {};

  if(!values.round1){
    errors.round1 = "Enter a time!";
  }
  if(!values.round2){
    errors.round2 = "Enter a time!";
  }
  if(!values.round3){
    errors.round3 = "Enter a time!";
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
  form: 'BreathingExerciseForm'
})(
  connect(null,{ createBreathingExercise })(BreathingExercise)
);
