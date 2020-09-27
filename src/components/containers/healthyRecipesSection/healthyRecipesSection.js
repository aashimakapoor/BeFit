// @vendor
import React from "react";
import "./healthyRecipesSection.scss";
// constants
import { getHomePageConstants } from "../../../constants/homePage";
// components
import BFTitle from "../../common/BFTitle/BFTitle";
import BFCarousal from "../../common/BFCarousal/BFCarousal";

const blockName = "healthy-recipes-section";

class HealthyRecipesSection extends React.Component {
    
    render() {
        const { healthyRecipes } = this.props;
        const { recipesTitle } = getHomePageConstants();

        return (
            <section className={`${blockName}`}>
                <BFTitle title={recipesTitle} />
                <BFCarousal carousalList={healthyRecipes} />
            </section>
        )
    }
}

export default HealthyRecipesSection;
