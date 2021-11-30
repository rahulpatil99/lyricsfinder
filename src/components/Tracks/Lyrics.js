import React, { Component } from 'react'
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router-dom';
import axios from "axios";
// import Moment from "react-moment";

export default class Lyrics extends Component {
  state ={
    track:{},
    lyrics:{}
  }

  componentDidMount(){
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_LYRIC_KEY}`)
      .then(res=> {
        this.setState(
          {
            lyrics:res.data.message.body.lyrics});
            return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_LYRIC_KEY}`)
            })
      .then(res=> {
        this.setState(
          {
            track:res.data.message.body.track});
            })
    .catch(err=>console.log(err));
  }

  render() {
      const {track,lyrics}  = this.state;
      if(track === undefined || Object.keys(track).length===0 || lyrics=== undefined || Object.keys(lyrics).length===0){
        return <Spinner/>
      }
      else{
        return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track.track_name} by{" "}
            <span className="text-secondary">{track.track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Song Genre</strong>:{" "}
            {track.track.primary_genres.music_genre_list.length === 0
              ? "NO GENRE AVAILABLE"
              : track.track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <strong>Release Date</strong>:{" "}
            {/* <Moment format="MM/DD/YYYY">
              {track.track.first_release_date}
            </Moment> */}
          </li>
        </ul>
        </React.Fragment>
        )

      }
  }
}
