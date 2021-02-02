// @vendor
import React from "react";
import "./BFButton.scss";
import sn from "classnames";
import PropTypes from 'prop-types';

const blockName = "bf-button";

class BFButton extends React.Component {
    render() {
        const {
            btnText, 
            handleOnClick, 
            isDisabled, 
            isLink, 
        } = this.props;
        let customClass = isLink ? "is-link" : "is-btn";

        return <button 
                    className={sn(`${blockName}`, `${blockName}__${customClass}`)}
                    onClick={handleOnClick}
                    disabled={isDisabled}
                >
            <span>{btnText}</span>
        </button>
    }
}

BFButton.defaultProps = {
    isDisabled: false,
    isLink: false,
}

BFButton.propTypes = {
    btnText: PropTypes.string,
    isDisabled: PropTypes.bool,
    isLinl: PropTypes.bool,
    handleOnClick: PropTypes.func,
}

export default BFButton;