// @vendor
import React from "react";
import "./healthArticlesSection.scss";
import {Row} from "react-bootstrap";
// components
import BFArticleCard from "./../../common/BFArticleCard/BFArticleCard";
import BFTitle from "../../common/BFTitle/BFTitle";
// constants
import { getHomevPageConstants } from "./../../../constants/homePage";

const blockName = "health-articles-section";

class HealthArticlesSection extends React.Component {
    
    render() {
        const { healthArticles } = this.props;
        const { newstitle } = getHomevPageConstants();
        return (
            <section className={`${blockName}`}>
                <BFTitle title={newstitle} />
                <Row className={`${blockName}__articles`}>
                    {healthArticles && healthArticles.map(article => {
                        return <BFArticleCard 
                                description={article.description}
                                imgAlt={article.imgAlt}
                                imgUrl={article.imgUrl} 
                                linkText={article.lintText}
                                noOfColumnsDesktop={3}
                                noOfColumnsMobile={1}
                                noOfColumnsTablet={2} 
                                title={article.title} 
                                />
                        })
                    }
                </Row>
            </section>
        )
    }
}

export default HealthArticlesSection;
