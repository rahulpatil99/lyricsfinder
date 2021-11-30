import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list:[
      {Track :{track_name : 'a'}},
      {Track :{track_name : 'a'}
    }
    ]
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer =  Context.Consumer;
