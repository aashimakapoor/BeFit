import React ,{Component} from "react";
import { connect } from 'react-redux';

class ChildOne extends React.Component{
    increaseCounter=(e)=>{
        e.preventDefault();
        this.props.incCounter(this.props.increament.number);
    }
    render(){
        return(
            <div>
                <button value="counter" onClick={(e)=>this.increaseCounter(e)}>Counter</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        increament:state.increament
    };
};
export default connect(mapStateToProps)(ChildOne);