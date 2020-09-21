import React ,{Component} from "react";
import { connect } from 'react-redux';

class ChildTwo extends React.Component{
    render(){
         return(
             <div>
                 <button value="counter">{this.props.increament.counter}</button>
             </div>
         )
     }
}
const mapStateToProps=(state)=>{
    return {
        increament:state.increament
    };
};
export default connect(mapStateToProps)(ChildTwo);
