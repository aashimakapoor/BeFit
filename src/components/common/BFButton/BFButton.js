// @vendor
import React from "react";
import "./BFButton.scss";
import PropTypes from 'prop-types';

const blockName = "bf-button";

class BFButton extends React.Component {
    render() {
        const { btnText, isLink, handleOnClick } = this.props;
        let className = isLink ? "is-link" : "is-btn";

        return <button 
                    className={`${blockName}`, `${blockName}__${className}`}
                    onClick={handleOnClick}
                >
            <span>{btnText}</span>
        </button>
    }
}

BFButton.defaultProps = {
    isLink: false,
}

BFButton.propTypes = {
    btnText: PropTypes.string,
    isLinl: PropTypes.bool,
    handleOnClick: PropTypes.func,
}

export default BFButton;