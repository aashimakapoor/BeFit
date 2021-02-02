// @vendor
import React from "react";
import "./BFRadioButton.scss";
import PropTypes from 'prop-types';

const blockName = "bf-radio-button";

class BFRadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        const { onRadioChange } = this.props;
        onRadioChange(e.target.value);
    }
    render() {
        const { 
            value,
            label,
            name,
            type,
         } = this.props;

        return (
                <span className={blockName}>
                    <input 
                        className={`${blockName}__input`} 
                        id={value}
                        name={name}
                        type={type}
                        value={value}
                        onChange={this.onChange}
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