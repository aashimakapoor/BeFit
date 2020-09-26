
// @vendor
import React from "react";
import "./homeView.scss";
import { connect } from 'react-redux';
// actions
import { getHomeData } from "./../../actions/homeActions";
// components
import HealthTipsSection from "../../components/containers/healthTipsSection/healthTipsSection";
import HealthArticlesSection from "../../components/containers/healthArticlesSection/healthArticlesSection";
import HealthyRecipesSection from "../../components/containers/healthyRecipesSection/healthyRecipesSection";

const blockName = "home-view";

class HomeView extends React.Component {
  componentDidMount() {
    const { getHomeData } = this.props;
    getHomeData('json/homeData.json');
  }

  render() {
    const { homeData } = this.props;
    const homeDataContainer = homeData && homeData.homeDataContainer;
    const { healthyTips, healthArticles, healthyRecipes } = homeDataContainer;
    
    return (
      <>
        <HealthTipsSection healthyTips={healthyTips} />
        <section className={`${blockName}__centre`}>
          <HealthArticlesSection healthArticles={healthArticles} />
          <HealthyRecipesSection healthyRecipes={healthyRecipes} />
        </section>
      </>
    ); 
  }
}

const mapStateToProps = (state) => {
	return{
		homeData: state.homeDataReducer,
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
      getHomeData: (url) => dispatch(getHomeData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);

