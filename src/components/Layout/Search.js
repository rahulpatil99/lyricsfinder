import React from 'react'
import './Search.css';


export default function Search() {
  return (
    <div>
      <form>
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
        <input type="text" placeholder="Search..."/>
        <button className="fa fa-search" type="submit"></button>
      </div>
        <div className="col-lg-3 col-md-3 col-sm-0"></div>
      </div>
      </form>
    </div>
  )
}
