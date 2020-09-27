// @vendor
import React from "react";
import "./BFRadioButton.scss";
import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";

const blockName = "bf-radio-button";

class BFRadioButton extends React.Component {
    constructor(props) {
        super(props);
    }
    onChange(e) {
        const { onInputChange, fieldName } = this.props;

        onInputChange(fieldName,e.target.value);
    }
    render() {
        const { 
            id,
            inputValue,
            labelText,
            name,
            type,
         } = this.props;

        return (
                <span className={blockName}>
                    <input 
                        className={`${blockName}__input`} 
                        id={id}
                        name={name}
                        type={type}
                        value={inputValue}
                    />  
                    <label for={id} className={`${blockName}__label`} >{labelText}</label>
                </span>
        )
    }
}

BFRadioButton.propTypes = {
    id: PropTypes.string,
    inputValue: PropTypes.string,
    labelText: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
}

export default BFRadioButton;