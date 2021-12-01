import React, { Component } from 'react'
import { Consumer } from '../../context'

import TrackCard from './TrackCard';
import Spinner from '../Layout/Spinner';

export default class Tracks extends Component{
  render(){
  return(
<Consumer>
  {
  value=>{
      const {track_list,heading}  = value;
      if(track_list === undefined || track_list.length===0){
        return <Spinner/>
      }
      else{
        return (
        <React.Fragment>
          <h3 className="text-center mb-2 mt-5">{heading}</h3>
          <div className="row gy-3 ml-auto mt-5">
            {track_list.map(item => (
            <TrackCard key={item.track.track_id} track={item.track}/>
            )
            )}
          </div>
        </React.Fragment>
        )

      }
    }
  }
</Consumer>
  )
  }
}
