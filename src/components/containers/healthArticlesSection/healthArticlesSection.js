// @vendor
import React from "react";
import "./healthArticlesSection.scss";
import {Row} from "react-bootstrap";
// components
import BFArticleCard from "./../../common/BFArticleCard/BFArticleCard";

const blockName = "health-articles-section";

class HealthArticlesSection extends React.Component {
    
    render() {
        const { healthArticles } = this.props;

        return (
            <Row className={`${blockName}`}> 
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
        )
    }
}

export default HealthArticlesSection;
