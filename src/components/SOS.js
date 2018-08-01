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
        <br/>
        <YouTube
          className="youtube"
          videoId="QlWIXoH8p1s"
          opts={opts}
          onReady={this._onReady}
        />
        <div align="center">
        <img  src="https://quotefancy.com/media/wallpaper/3840x2160/282692-Lance-Armstrong-Quote-Pain-is-temporary-It-may-last-a-minute-or-an.jpg" alt="text" width="80%"/>
        </div>
        <br/>
        
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