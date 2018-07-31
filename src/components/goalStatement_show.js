import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGoal, deleteGoal } from '../actions'



class GoalShow extends Component {
  componentDidMount(){
    //find individual meditation based on id 
    //Provided by react-router; params are all wild-card values that exist in given URL 
    // i.e. /posts/:id <-- 
    const { id } = this.props.match.params
    this.props.fetchGoal(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    
    this.props.deleteGoal(id, ()=> {
      this.props.history.push('/')
    });
  }

  render() {
    const { goal} = this.props;

    //When component first renders and meditation hasn't been fetched yet. 
    if (!goal) {
      return <div> Loading... </div>
    }

    return(
      <div> 
        <button 
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}
        >
        Delete Goal Card
        </button>
        <h3 align="center">Goal From: {goal.created_at.split("T")[0]} </h3> <br/>
        <h4> Goal Date: {goal.date} </h4> <br/>
        <h4> Goal: {goal.body} </h4> <br/>
        <h4> Most likely Pitfalls: {goal.pitfalls} </h4> <br/>
        <h4> Tactics: {goal.tactics} </h4> <br/>
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
function mapStateToProps({ goals }, ownProps) {
  //return just the meditation were looking for
  return { goal: goals[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchGoal, deleteGoal})(GoalShow)