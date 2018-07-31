import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBreathingExercise, deleteBreathingExercise } from '../actions'



class BreathingExerciseShow extends Component {
  componentDidMount(){
    //find individual meditation based on id 
    //Provided by react-router; params are all wild-card values that exist in given URL 
    // i.e. /posts/:id <-- 
    const { id } = this.props.match.params
    this.props.fetchBreathingExercise(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    
    this.props.deleteBreathingExercise(id, ()=> {
      this.props.history.push('/')
    });
  }

  render() {
    const { breathingExercise } = this.props;

    //When component first renders and meditation hasn't been fetched yet. 
    if (!breathingExercise) {
      return <div> Loading... </div>
    }

    return(
      <div> 
        <button 
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}
        >
        Delete breathing exercise
        </button>
        <h3 align="center">Breathing log from: {breathingExercise.created_at.split("T")[0]} </h3> <br/>
        <h4> Round 1 time: {breathingExercise.round1} </h4>
        <h4> Round 2 time: {breathingExercise.round2} </h4>
        <h4> Round 3 time: {breathingExercise.round3} </h4> <br/>
        <div className="text-xs-center"> 
          <Link className="btn btn-primary" to="/" > 
          Back to index 
          </Link>
        </div> <br/>
        <div className="text-xs-center"> 
          <Link className="btn btn-success" to="/home">
            Back to Habit HUB 
          </Link>
        </div>
      </div>
    );
  }
}

// second arg is called ownProps by convention, props obj that is headed to this component
// this.props === ownProps
function mapStateToProps({ breathingExercises }, ownProps) {
  //return just the meditation were looking for
  return { breathingExercise: breathingExercises[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchBreathingExercise, deleteBreathingExercise})(BreathingExerciseShow)