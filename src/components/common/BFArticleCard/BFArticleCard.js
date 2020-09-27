// @vendor
import React from "react";
import "./BFArticleCard.scss";
import sn from "classnames";
import { Col } from "react-bootstrap";
import PropTypes from 'prop-types';

const blockName = "bf-article-card";

class BFArticleCard extends React.Component {
    render() {
        const { 
            description, 
            hasTransitionEffect,
            imgAlt, 
            imgUrl, 
            linkText, 
            noOfColumnsDesktop, 
            noOfColumnsMobile,
            noOfColumnsTablet, 
            title, 
        } = this.props;
        const colWidthDesktop = 12/noOfColumnsDesktop;
        const colWidthTablet = 12/noOfColumnsTablet;
        const colWidthMobile = 12/noOfColumnsMobile;

        const className = hasTransitionEffect && "has-transition";

        return(
            <>
                <Col xs={colWidthMobile} sm={colWidthTablet} lg={colWidthDesktop}>
                    <section className={`${blockName} p-3 mb-5 bg-white`}>
                        <img className={sn(`${blockName}__image`, `${blockName}__${className}`)} src={imgUrl} alt={imgAlt} />
                        <h2 className={`${blockName}__title`}>{title}</h2>
                        <p className={`${blockName}__desc`}>{description}</p>
                        <a href="#" className={`${blockName}__link`}>{linkText}</a>
                    </section>
                </Col>
            </>
        )
    }
}

BFArticleCard.defaultProps = {
    hasTransitionEffect: true,
    noOfColumnsDesktop: 3,
    noOfColumnsMobile: 1,
    noOfColumnsTablet: 2, 
}

BFArticleCard.propTypes = {
    description: PropTypes.string,
    hasTransitionEffect: PropTypes.bool,
    imgAlt: PropTypes.string,
    imgUrl: PropTypes.string,
    linkText: PropTypes.string,
    noOfColumnsDesktop: PropTypes.number,
    noOfColumnsMobile: PropTypes.number,
    noOfColumnsTablet: PropTypes.number, 
    title: PropTypes.string, 
}

export default BFArticleCard;