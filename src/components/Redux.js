import React, { Component } from 'react';
import './../css/Form.css';
import { connect } from 'react-redux';
import { increamentData } from '../actions/myAction';
import { store } from './../index';

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
	
	componentDidMount(){
		this.props.increamentData(`json/user.json`);
	}

	addNewCard=(newData)=>{
		let user = this.props.user;
		user = user.concat(newData);
		store.dispatch({
	        type: 'ITEMS_FETCH_DATA_SUCCESS',
	        user:user
		});	
	}
	
	render(){
		return(
			<div>
				<InputForm newCard={this.addNewCard}/>
				<div className="card-wrapper">
					{this.props.user.map((d)=>
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

class Redux extends Component{
	render(){
		return(
			<div>
				<Card />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        increamentData: (url) => dispatch(increamentData(url))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Redux);

