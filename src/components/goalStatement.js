import React, { Component } from 'react' ; 
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createGoal } from '../actions';
import '../style/style.css'


 
 
class GoalStatement extends Component {

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
    this.props.createPost(values, () => {
      //this.props.history.push('path') will send user to specific path
      this.props.history.push('/home');
    });
  }

  render() {
    //Reduxform adds property to our component; handleSubmit is one of them
    const { handleSubmit } = this.props

    return(
      <div>
        
        <div className="header">
          <h2> Congratulations on beginning your journey to a better Self! </h2 >
          
        </div>
        <div className="image-blurred-edge">
          <img src="http://www.simonlee.online/wp-content/uploads/2015/05/mountainpath.jpg" alt="text" className="image"/> <br/>
        </div>
        <div className="header"> 
       
        <h3> Goals must be actionable, concise in their definition and with a set time-frame</h3>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            label="user_id"
            name="user_id"
            component={this.renderField}
          /> 
          <Field 
            label="What do you want to accomplish?"
            name="body"
            component={this.renderField}
          /> 
          <Field 
            label="What realistic time-frame are you allocating for yourself? (in days)"
            name="date"
            component={this.renderField}
          /> 
                <h4> Once submitted you will not be able to edit this, so be certain you adhered to the parameters defined above!</h4>
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
}

//Validate function is called automatically on Submit
//values is an obj that contains all values from form
//Always start with empty Error Obj; if Rrror Obj is anyhting BUT empty, errors will dispaly.
function validate(values) {
  const errors = {};

  if(!values.body){
    errors.body = "Enter your goal statement here";
  }
  if(!values.date){
    errors.date = "Enter a date";
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
  form: 'GoalStatementForm'
})(
  connect(null,{ createGoal })(GoalStatement)
);
