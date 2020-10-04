// @vendor
import React from "react";
import "./BFRadioButton.scss";
import PropTypes from 'prop-types';

const blockName = "bf-radio-button";

class BFRadioButton extends React.Component {
    constructor(props) {
        super(props);
    }
    // onChange(e) {
    //     const { onSelectRadio } = this.props;
    //     console.log(e);
    //     onSelectRadio(e.target.value);
    // }
    render() {
        const { 
            value,
            label,
            name,
            type,
            onRadioChange,
         } = this.props;

        return (
                <span className={blockName}>
                    <input 
                        className={`${blockName}__input`} 
                        id={value}
                        name={name}
                        type={type}
                        value={value}
                        onChange={onRadioChange}
                    />  
                    <label for={value} className={`${blockName}__label`} >{label}</label>
                </span>
        )
    }
}

BFRadioButton.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    onRadioChange: PropTypes.func,
}

export default BFRadioButton;