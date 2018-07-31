import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGoal, deleteGoal } from '../actions';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';



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
        <br/>
        <div key={goal.id} align="center">
         
         <br/>
         <Card >
            <h2> YOUR GOAL CARD </h2>
            <h3> {goal.body} | by: {goal.date}</h3>
            <CardImg top width="50%" src="https://greatist.com/sites/default/files/goal-setting-feature.jpg" height="320px"alt="Card image cap" />
            <CardBody>
            <CardTitle>  </CardTitle> <br/>
            <CardSubtitle> <h4>Top Reasons I may not succeed: {goal.pitfalls} </h4></CardSubtitle> <br/>
            <CardText> <h4>How I plan to overcome my pitfalls: {goal.tactics} </h4></CardText> <br/>
            </CardBody>
            <button 
              className="btn btn-danger pull-xs-center"
              onClick={this.onDeleteClick.bind(this)}>
              Delete Goal Card
              </button> 
              <br/>
        </Card>
        </div>
        <div> <br/> <br/>
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