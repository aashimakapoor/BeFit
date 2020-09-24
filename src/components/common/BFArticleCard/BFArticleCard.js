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

        return(
            <>
                <Col xs={colWidthMobile} sm={colWidthTablet} lg={colWidthDesktop}>
                    <section className={`${blockName} shadow p-3 mb-5 bg-white`}>
                        <img className={`${blockName}__image`} src={imgUrl} alt={imgAlt} />
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
    noOfColumnsDesktop: 3,
    noOfColumnsMobile: 2,
    noOfColumnsTablet: 1, 
}

BFArticleCard.propTypes = {
    description: PropTypes.string,
    imgAlt: PropTypes.string,
    imgUrl: PropTypes.string,
    linkText: PropTypes.string,
    noOfColumnsDesktop: PropTypes.number,
    noOfColumnsMobile: PropTypes.number,
    noOfColumnsTablet: PropTypes.number, 
    title: PropTypes.string, 

}

export default BFArticleCard;