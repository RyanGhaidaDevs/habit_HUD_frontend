import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchColdShower, deleteColdShower } from '../actions'



class ColdShowerShow extends Component {
  componentDidMount(){
    //find individual meditation based on id 
    //Provided by react-router; params are all wild-card values that exist in given URL 
    // i.e. /posts/:id <-- 
    const { id } = this.props.match.params
    this.props.fetchColdShower(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    
    this.props.deleteColdShower(id, ()=> {
      this.props.history.push('/')
    });
  }

  render() {
    const { coldShower } = this.props;

    //When component first renders and meditation hasn't been fetched yet. 
    if (!coldShower) {
      return <div> Loading... </div>
    }

    return(
      <div> 
        <button 
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}
        >
        Delete cold shower entry
        </button>
        <h3 align="center">Journal log from: {coldShower.created_at.split("T")[0]} </h3> <br/>
        <h4> Time in minutes: {coldShower.time} </h4> <br/>
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
function mapStateToProps({ coldShowers }, ownProps) {
  //return just the meditation were looking for
  return { coldShower: coldShowers[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchColdShower, deleteColdShower})(ColdShowerShow)