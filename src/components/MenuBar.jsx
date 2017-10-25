import React from 'react'
import InputForm from './InputForm.jsx'
import './MenuBar.css'

const MenuBar = (props) => (

	<div className="menu-bar">
		<InputForm 
		inputMessage="Search Videos"
		buttonTitle="Search"
		onSend={ (value) => props.onSearch(value) }/>
	</div>

)


export default MenuBar

