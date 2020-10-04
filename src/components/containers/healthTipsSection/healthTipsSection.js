// @vendor
import React from "react";
import "./healthTipsSection.scss";
import {Row, Col} from "react-bootstrap";
// components
import BFButton from "./../../common/BFButton/BFButton";

const blockName = "healthy-tips-section";

class HealthyTipsSection extends React.Component {
    
    render() {
        const { healthyTips } = this.props;
        const title = healthyTips && healthyTips.title;
        const description = healthyTips && healthyTips.description;
        const lintText = healthyTips && healthyTips.lintText;

        return (
            <section className={`${blockName}__wrapper`}>
                <Row className={`${blockName}`}> 
                    <Col xs={12} sm={8} className={`${blockName}__left-section`}>
                        <h2 className={`${blockName}__title`}>{title}</h2>
                        <p className={`${blockName}__desc`}>{description}</p>
                    </Col>
                    <Col xs={12} sm={4} className={`${blockName}__right-section`}>
                        <BFButton 
                            btnText={lintText} 
                        />
                    </Col>
                </Row>
            </section>
        )
    }
}

export default HealthyTipsSection;
