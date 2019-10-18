import React, {Component} from 'react'; 
import { Card, CardImg,  CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';

import { Nav, Navbar, NavItem } from "react-bootstrap";

 export default class Home extends Component {

  render() {
      return (
        <div> 
          Test
        </div> 
      // <div>
      //   <Navbar fluid collapseOnSelect>
      //   <Navbar.Header>
      //     <Navbar.Brand>
      //       <Link to="/goals">Start Your Journey</Link>
      //     </Navbar.Brand>
      //     <Navbar.Brand>
      //       <Link to="/">View Your Logs</Link>
      //     </Navbar.Brand>
      //     <Navbar.Brand>
      //       <Link to="/SOS" >SOS</Link>
      //     </Navbar.Brand>
      //     {/* <Navbar.Brand>
      //     <Link to="/yourFractalTree"> View Your Fractal Tree </Link>
      //     </Navbar.Brand> */}
      //     <Navbar.Toggle />
      //   </Navbar.Header>
      //   <Navbar.Collapse>
      //     <Nav pullRight>
      //       <NavItem href="/login">Signup</NavItem>
      //       <NavItem href="/login">Login</NavItem>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar> <br/> 
      //    <div align="center">
      //    <img src="https://i.pinimg.com/originals/8b/63/98/8b6398624f2e6f31e5ee69bae79cb3c3.png" height="300px"/>
      //    </div>
      //    <br/>
      //   <Card body outline color="primary"> 
      //     <CardImg top width="50%" src="https://ideapod.com/wp-content/uploads/2017/12/stoicism-marcus-aurelius-leadership-e1498983897275.jpg" alt="Card image cap" />
      //     <CardBody>
      //       <h3>Journal Entry </h3>
      //       <h4><i>A documented failure is infinitely more valuable than an undocumented one.</i> </h4>
      //       <Link className="btn btn-primary" to="/posts/new">
      //       Submit Your Daily Log
      //       </Link>
      //     </CardBody>
      //   </Card>
      //   <Card>
      //     <CardImg top width="50%" src="https://i1.wp.com/blog.mindvalley.com/wp-content/uploads/2018/02/Alan-Watts.jpeg?fit=740%2C416&ssl=1" height="280px"alt="Card image cap" />
      //     <CardBody>
      //      <h3>Guided Meditation</h3>
      //      <h4><i>A clear mind is a prerequisite to any successful endeavour.</i></h4>
      //       <Link className="btn btn-primary" to="/guidedMeditations/new">
      //       Begin Your Guided Meditation
      //       </Link>
      //     </CardBody>
      //   </Card>
      //   <Card>
      //     <CardImg top width="50%" src="http://caldwelltreecare.com/wp-content/uploads/2015/03/tree-care.jpg" height="280px"alt="Card image cap" />
      //     <CardBody>
      //       <h3>Breathing Exercise</h3>
      //       <h4><i>Challenging breathing exercise to dissipate anxiety, brain-fog and negativity.</i></h4>
      //       <Link className="btn btn-primary" to="/breathingExercises/new">
      //       Take The Breathing Challenge
      //       </Link>
      //     </CardBody>
      //   </Card>
      //   <Card>
      //     <CardImg top width="50%" src="https://cdn.newsapi.com.au/image/v1/0fa717523d10364022133ae11883b831" height="280px"alt="Card image cap" />
      //     <CardBody>
      //       <h3>Cold Immersion</h3>
      //       <h4><i>Cold immersion is one of the most powerful habits a human can integrate into their lives; made popular by Whim Hoff.</i></h4> 
      //       <Link className="btn btn-primary" to="/coldShowers/new">
      //       Take The Cold Shower Challenge
      //       </Link>
      //     </CardBody>
      //   </Card>
      // </div>
    );
  };
  
  }
