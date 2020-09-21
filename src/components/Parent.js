import React , { Component } from 'react';
import axios from 'axios';
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import {increamentData} from "../actions/myAction";
import { connect } from 'react-redux';
import { store } from './../index';

class Parent extends React.Component{
    
    componentDidMount(){
        this.props.increamentData(`json/counter.json`);
    }
    increamentCounter=(number)=>{
       let counter_var=JSON.parse(this.props.increament.counter);
       let number_var=JSON.parse(this.props.increament.number);
       let a=counter_var+number_var;
       this.props.increament.counter=a;
       this.props.increament.number=number_var;
       store.dispatch({
	        type: 'INCREAMENT_NUM',
	        data: this.props.increament
		});	
    }
    render(){
        return(
            <div>
               <ChildOne incCounter={this.increamentCounter} />
               <ChildTwo />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        increament:state.increament
    };
};
const mapDispatchToProps=(dispatch)=>{
    return{
        increamentData:(url)=>dispatch(increamentData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Parent);

