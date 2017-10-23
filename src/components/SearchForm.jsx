import React, { Component } from 'react';


class SearchForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: "",
    }
  }

  search(value){
  	this.props.onSearch(value)
 }


render(){

return(
	<div>
	<input 
      onChange={(event)=> this.setState({inputValue:event.target.value})}
      value={ this.state.inputValue }/>
      <button onClick={()=>{ this.search(this.state.inputValue)}}> Search </button>
     </div>
	)
}
}

export default SearchForm;