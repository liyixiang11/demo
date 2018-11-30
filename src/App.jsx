import React, { Component } from 'react';
import logo from './logo.svg';
import Add from './add.jsx'
import List from './list.jsx'
class App extends Component {
  constructor(){
    super()
    this.state={
     people:{}
    }
  }
  render() {
    let {name,age} = this.state
    return (
      <div>
          <Add text={this.nameValue.bind(this)}></Add>
          <hr/>
          <List people={this.state.people}></List>
      </div>
    );
  }
  nameValue(value,age){
    this.setState({people:{name:value,age:age}})

    console.log('接到了',this.state.people);
    
  }
}

export default App;
