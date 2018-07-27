import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMeditation, deleteMeditation} from '../actions'


class GuidedMeditationShow extends Component {
  componentDidMount(){
    //find individual meditation based on id 
    //Provided by react-router; params are all wild-card values that exist in given URL 
    // i.e. /posts/:id <-- 
    const { id } = this.props.match.params
    this.props.fetchMeditation(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    
    this.props.deleteMeditation(id, ()=> {
      this.props.history.push('/')
    });
  }

  render() {
    const { meditation } = this.props;

    //When component first renders and meditation hasn't been fetched yet. 
    if (!meditation) {
      return <div> Loading... </div>
    }

    return(
      <div> 
        <button 
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}
        >
        Delete meditation
        </button>
        <h3 align="center" >Meditation log from: {meditation.created_at.split("T")[0]} </h3> <br/>
        <h3> Insights: {meditation.insights} </h3>

        <h4> Before Meditation Self-Assessment: {meditation.before} </h4>
        <h4> After Meditation Self-Assessment: {meditation.after} </h4> <br/>
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
function mapStateToProps({ meditations }, ownProps) {
  //return just the meditation were looking for
  return { meditation: meditations[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchMeditation, deleteMeditation})(GuidedMeditationShow)