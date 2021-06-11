import React, { Component} from 'react';
import './index.css'


class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      newItem: "",
      list: []
    }
    
  }
  updateInput(key,value){
    this.setState({
      [key]:value
    });
  }
  addItem(){
    const newItem ={
      id: 1+ Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];
    list.push(newItem);
    
    this.setState({
      list, newItem: ""
    })
  }
  deleteItem(id){
    const list= [...this.state.list]
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
     list: updatedList
    })
  }
render()
{
  return (
    <>
      <div className= "main-div">
      <div className = "center-div">
        <br />
        <h1> Tasks to be done by EOD</h1>
        <br />
        <input type= "text" placeholder= "Add Task"value= {this.state.newItem}
            onChange = {e => this.updateInput("newItem", e.target.value)} />
        <button onClick={() => this.addItem()}>+</button> <br />
        <ol>
        {this.state.list.map(item =>{
                return (
                  <div className="todo-style">
                  <li key={item.id}>
                      {item.value}
                      <button className= "fa-times" onClick={()=> this.deleteItem(item.id)}>
                        X
                      </button>
                  </li>
                  </div>
                )
              })}
        </ol>
      </div>
      </div>
    </>
  );
  
};
}

export default App;

