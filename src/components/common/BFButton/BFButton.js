// @vendor
import React from "react";
import "./BFButton.scss";
import PropTypes from 'prop-types';

const blockName = "bf-button";

class BFButton extends React.Component {
    render() {
        const { btnText, isLink, hasIcon, iconClass } = this.props;
        let className = isLink ? "is-link" : "is-btn";

        return <button className={`${blockName}`, `${blockName}__${className}`}>
            <span>{btnText}</span>
            {hasIcon && <i className={iconClass} />}
        </button>
    }
}

BFButton.defaultProps = {
    isLink: false,
    hasIcon: false,
}

BFButton.propTypes = {
    btnText: PropTypes.string,
    isLinl: PropTypes.bool,
    hasIcon: PropTypes.bool,
    iconClass: PropTypes.string,

}

export default BFButton;