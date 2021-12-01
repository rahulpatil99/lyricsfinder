// import React from 'react'
import React, { Component } from 'react'
import { Consumer } from '../../context';
import axios from 'axios';
import './Search.css';


export default class Search extends Component {

state={
  title:''
}

searchTrack = (dispatch , e) =>{
  e.preventDefault();

  axios.get(`https://corsanywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.title}&page_size=3&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_LYRIC_KEY}`)
      .then(res=> {
        dispatch({
          type:'SEARCH_TRACKS',
          payload:res.data.message.body.track_list
        })
      })
    .catch(err=>console.log(err));

}

onChange=(e)=>{
  this.setState({title: e.target.value});
}

  render() {
    return (
      <Consumer>
        {value=>{
          const {dispatch} = value;
          return (
            <div>
              <form onSubmit={this.searchTrack.bind(this,dispatch)}>
              <div className="row gx-0">
                <div className="col-lg-3 col-md-3 col-sm-0"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <center><h1>Search lyrics</h1></center>
              </div>
                <div className="col-lg-3 col-md-3 col-sm-0"></div>
              </div>
              <div className="row gx-0">
                <div className="col-lg-3 col-md-3 col-sm-0"></div>
                <div className="col-lg-6 col-md-6 col-sm-12 pseudo-search">
                <input type="text" placeholder="Search..." value={this.state.title} onChange={this.onChange}/>
                <button className="fa fa-search" type="submit" ></button>
              </div>
                <div className="col-lg-3 col-md-3 col-sm-0"></div>
              </div>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

