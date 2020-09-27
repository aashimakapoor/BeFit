// @vendor
import React from "react";
import "./BFInputField.scss";
import PropTypes from 'prop-types';

const blockName = "bf-input-field";

class BFInputField extends React.Component {
    constructor(props) {
        super(props);
    }
    onChange(e) {
        const { onInputChange, fieldName } = this.props;

        onInputChange(fieldName,e.target.value);
    }
    render() {
        const { 
            hasLabel,
            inputValue,
            labelText,
            type,
         } = this.props;

        return (
                <section className={blockName}>
                    {hasLabel && <section className={`${blockName}__label-section`}>
                        <label className={`${blockName}__label`}>{labelText}</label>
                    </section>}
                    <section className={`${blockName}__input-section`}>
                        <input 
                            className={`${blockName}__input`} 
                            value={inputValue}
                            onChange ={(e) => this.onChange(e)}
                            type={type}
                        />
                    </section>
                </section>
        )
    }
}

BFInputField.defaultProps = {
    hasLabel: true,
}

BFInputField.propTypes = {
    hasLabel: PropTypes.bool,
    inputValue: PropTypes.string,
    labelText: PropTypes.string,
    type: PropTypes.string,
}

export default BFInputField;