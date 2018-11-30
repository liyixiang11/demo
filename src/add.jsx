import React, { Component } from 'react';


class Add extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            age:''
        }
    }
  render() {
    let {name,age} = this.state;
    return (
      <div>
          <input type="text" value={name} onChange={this.inputChange.bind(this)} /><br/>
          <input type="text" value={age} onChange={this.passwordChange.bind(this)}/><br/>
          <button onClick={this.confirmAction.bind(this)}>增加</button>
      </div>
    );
  }
  inputChange(ev){
    this.setState({name: ev.target.value,});
  }
  passwordChange(ev){
    this.setState({age: ev.target.value,});
  }
  confirmAction(){
      this.props.text(this.state.name,this.state.age)
  }
}

export default Add;
