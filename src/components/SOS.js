import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';




class SOS extends Component {
 
  render() {
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
          videoId="QlWIXoH8p1s"
          opts={opts}
          onReady={this._onReady}
        />
        <div className="text-xs-center"> 
          <Link className="btn btn-success" to="/home">
            Back to Battle
          </Link>
        </div>
      </div>
    );
  }
}

export default SOS; 