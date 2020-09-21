import React, { Component } from 'react';
import './../css/Form.css';
import axios from 'axios';

class InputForm extends Component{
	constructor(props){
		super(props);
		this.state={
			name:"",
			age:""
		}
	}
	submitData(e){
		e.preventDefault();
		let inputArray=document.getElementsByClassName("input-field");
		let dataObject={"name":this.state.name,"age":this.state.age};
		if(dataObject.name && dataObject.age){
			for(let i=0;i<inputArray.length;i++){
				if(inputArray[i].value){
					document.getElementsByClassName("hide")[i].classList.remove("display-block");
					this.state.name='';
					this.state.age='';
				}
			}
			this.props.newCard(dataObject);
		}
		else{
			for(let i=0;i<inputArray.length;i++){
				if(!inputArray[i].value){
					document.getElementsByClassName("hide")[i].classList.add("display-block");
				}
				else{
					document.getElementsByClassName("hide")[i].classList.remove("display-block");
				}
			}

		} 
	}
	render(){
		return(
			<form>
				<p><label className="label">Name: </label><input className="input-field" type='text' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} placeholder="First Name"/><span className="hide">Please provide your Name</span></p>
				<p><label className="label">Age: </label><input className="input-field" type="number" value={this.state.age} onChange={(e)=>this.setState({age:e.target.value})} placeholder="Age"/><span className="hide">Please provide your Age</span></p>
				<input type="button" value="Submit" onClick={(e)=>
				this.submitData(e)}/>
			</form>
		)
	}
} 
class Card extends Component{
	constructor(props){
		super(props);
		 this.state={
			users:[]
		 }

	}
	componentDidMount(){
		axios
		.get(`json/user.json`)
		.then((data)=>this.setState({users:data.data.user}))
	}

	addNewCard=(newData)=>{
		this.setState(prevState=>({
			users:prevState.users.concat(newData)
		}));
	}
	
	render(){
		return(
			<div>
				<InputForm newCard={this.addNewCard}/>
				<div className="card-wrapper">
					{this.state.users.map((d)=>
						<div className="card">
							<p>{d.name}</p>
							<p>{d.age}</p>
						</div>
					)}
				</div>
			</div>
		)
	}
}

class Form extends Component{
	render(){
		return(
			<div>
				<Card />
			</div>
		)
	}
}
export default Form;