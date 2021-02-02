// @vendor
import React from "react";
import "./BFInputField.scss";
import PropTypes from 'prop-types';
import { getHomePageConstants } from '../../../constants/homePage';

const blockName = "bf-input-field";

class BFInputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: ''
        }
    }
    onChange(e) {
        let inputValue = e.target.value;
        const { 
            REGEX_VALIDATION,
        } = getHomePageConstants();
        const { onInputChange, fieldName } = this.props;

        // if(inputValue.match(REGEX_VALIDATION.NUMBER_REGEX)) {
            onInputChange(fieldName, inputValue);
        // }
    }
    render() {
        const { errorMessage } = this.state;
        const { 
            bottomBorder,
            hasLabel,
            inputValue,
            labelText,
            placeholder,
            type,
         } = this.props;
         let customClass = bottomBorder && 'border-bottom'; 

        return (
                <section className={blockName}>
                    {hasLabel && <section className={`${blockName}__label-section`}>
                        <label className={`${blockName}__label`}>{labelText}</label>
                    </section>}
                    <section className={`${blockName}__input-section`}>
                        <input 
                            className={`${blockName}__input ${blockName}__${customClass}`} 
                            value={inputValue}
                            onChange ={(e) => this.onChange(e)}
                            placeholder={placeholder}
                            type={type}
                        />
                    </section>
                    <p className={`${blockName}__error-message`}>{errorMessage}</p>
                </section>
        )
    }
}

BFInputField.defaultProps = {
    bottomBorder: false,
    hasLabel: true,
}

BFInputField.propTypes = {
    bottomBorder: PropTypes.bool,
    hasLabel: PropTypes.bool,
    inputValue: PropTypes.string,
    labelText: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
}

export default BFInputField;