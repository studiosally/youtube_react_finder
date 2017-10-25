import React, { Component } from 'react';


class InputForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: "",
    }
  }

  search(value){
  	this.props.onSend(value)
 }


render(){

return(
	<form onSubmit ={
    (event)=>{ 
      event.preventDefault(); 
      this.search(this.state.inputValue)
    }}>
	 <input 
      onChange={(event)=> this.setState({inputValue:event.target.value})}
      value={ this.state.inputValue }/>
  
    <button> {this.props.buttonTitle} </button>
  
  </form>
	)
}
}

export default InputForm;