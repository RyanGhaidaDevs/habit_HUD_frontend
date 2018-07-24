import React, {Component} from 'react'; 
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

 export default class Home extends Component {

  render() {
      return (
      <div>
        <Card body outline color="primary">
          <CardImg top width="33%" src="https://ideapod.com/wp-content/uploads/2017/12/stoicism-marcus-aurelius-leadership-e1498983897275.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Journal Entry</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>A documented failure is infinitely more valuable than an undocumented one.</CardText>
            <Link className="btn btn-primary" to="/posts/new">
            Submit Your Daily Log
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="33%" src="https://i1.wp.com/blog.mindvalley.com/wp-content/uploads/2018/02/Alan-Watts.jpeg?fit=740%2C416&ssl=1" height="230px"alt="Card image cap" />
          <CardBody>
            <CardTitle>Guided Meditation</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>A clear mind is a prerequisite to any successful endeavour</CardText>
            <Link className="btn btn-primary" to="/guidedMeditation">
            Begin Your Guided Meditation
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="33%" src="http://rielworld.com/wp-content/uploads/2011/05/Buddhist-monk-Thailand.jpg" height="230px"alt="Card image cap" />
          <CardBody>
            <CardTitle>Breathing Exercise</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>Challenging breathing exercise; made popular by Whim Hoff</CardText>
            <Link className="btn btn-primary" to="/breathingExercise">
            Take The Breathing Challenge
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="33%" src="https://cdn.newsapi.com.au/image/v1/0fa717523d10364022133ae11883b831" height="230px"alt="Card image cap" />
          <CardBody>
            <CardTitle>Cold Immersion</CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText>Cold immersion is one of the most powerful habits a human can integrate into their lives. Popularized by Whim Hoff, commitment to this habit can have extraordinary results both physically and mentally  </CardText>
            <Link className="btn btn-primary" to="/coldShower">
            Take The Cold Shower Challenge
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  }


// function mapStateToProps(state) {
//   return {
//     books: state.books
//   }; 
// }

//Anything returned from this function will end up as props to the Home container. 
// function mapDispatchToProps(dispatch) {
//   //Whenever selectBook is called, the result should be passed to all our reducers
//   return bindActionCreators({ selectBook: selectBook}, dispatch)
// }

// Promote Home from a component to a container, it needs to know about this
//new dispatch method, selectBook. Make it available 
// as a prop. 
// export default connect(mapStateToProps, mapDispatchToProps)(Home); 