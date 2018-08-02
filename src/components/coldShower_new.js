import React, { Component } from 'react' ; 
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createColdShower } from '../actions';
import YouTube from 'react-youtube';

 
 
class ColdShower extends Component {

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
    this.props.createColdShower(values, () => {
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
          videoId="GShvGXwaijg"
          opts={opts}
          onReady={this._onReady}
        /> 
        <div align="center">
        <a data-flickr-embed="true"  href="https://www.flickr.com/photos/158630612@N07/29935939548/in/dateposted-public/" title="oie_2173220Vn9J50p0"><img src="https://farm2.staticflickr.com/1815/29935939548_d86de18878_z.jpg" width="840" height="356" alt="oie_2173220Vn9J50p0"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>        </div>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <Field 
          label="user_id"
          name="user_id"
          component={this.renderField}
        /> 
        <Field 
          label="time"
          name="time"
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
}

//Validate function is called automatically on Submit
//values is an obj that contains all values from form
//Always start with empty Error Obj; if Rrror Obj is anyhting BUT empty, errors will dispaly.
function validate(values) {
  const errors = {};

  if(!values.time){
    errors.time = "Enter a time in minutes!";
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
  form: 'ColdShowerForm'
})(
  connect(null,{ createColdShower })(ColdShower)
);
