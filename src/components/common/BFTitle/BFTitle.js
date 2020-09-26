// @vendor
import React from "react";
import "./BFTitle.scss";
import PropTypes from 'prop-types';

const blockName = "bf-title";

class BFTitle extends React.Component {
    render() {
        const { title } = this.props;
        
        return  <h2 className={`${blockName}`}>
        {title}<span className={`${blockName}__arrow-down`} />
    </h2>
    }
}

BFTitle.propTypes = {
    title: PropTypes.string,
}

export default BFTitle;