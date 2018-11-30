import React, { Component } from 'react';


class list extends Component {
    constructor() {
        super()
        this.state = {
            peoples: [],
        }
    }
    
    render() {
        let { people } = this.props;
        let { peoples, isExist } = this.state;
        peoples.push(people)
        
        var li =[];
        for (var i = 0; i < peoples.length; i++) {                      
          li.push(  <li key={i}>
                名字：{peoples[i].name},年龄：{peoples[i].age} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.del.bind(this,i)} key={i}>删除</button>
                <button>修改</button>
            </li>)
         }
         console.log('----------',this.state.peoples);
        return (
            <div>

                <ul>
                    {li}
                </ul>


            </div>
        );
    }
    del(i) {
        console.log(this.state.peoples);
        let peoples1 = this.state.peoples
        peoples1.splice(i,1)
       
        console.log('----',peoples1);
        
        if(this.state.peoples.length==1){
            peoples1.splice(0,1)
        }
        else{
            peoples1.splice(i,1)
            // peoples1.splice(this.state.peoples.length-1,1)
        }
            this.setState({peoples:peoples1})
        // }
    }
   
}

export default list;