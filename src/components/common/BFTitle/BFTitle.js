// @vendor
import React from "react";
import "./BFTitle.scss";
import PropTypes from 'prop-types';

const blockName = "bf-title";

class BFTitle extends React.Component {
    render() {
        const { title, description } = this.props;
        
        return ( 
            <section className={blockName}>
                <h2 className={`${blockName}__heading`}>
                    {title}<span className={`${blockName}__arrow-down`} />
                </h2>
                {description && <p className={`${blockName}__desc`}>{description}</p>}
            </section>
        )
    }
}

BFTitle.propTypes = {
    title: PropTypes.string,
}

export default BFTitle;