
// @vendor
import React from "react";
import "./homeView.scss";
import { connect } from 'react-redux';
// actions
import { getHomeData } from "./../../actions/homeActions";
// components
import HealthyTipsSection from "../../components/containers/healthyTipsSection/healthyTipsSection";

class HomeView extends React.Component {
  componentDidMount() {
    const { getHomeData } = this.props;
    getHomeData('json/homeData.json');
  }

  render() {
    const { homeData } = this.props;
    return (
      <HealthyTipsSection homeData={homeData} />
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

