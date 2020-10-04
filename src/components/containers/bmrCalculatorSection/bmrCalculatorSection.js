// @vendor
import React from "react";
import "./bmrCalculatorSection.scss";
import {Row} from "react-bootstrap";
// components
import BFTitle from "../../common/BFTitle/BFTitle";
import BFButton from "../../common/BFButton/BFButton";
// constants
import { getHomePageConstants } from "../../../constants/homePage";
import BFInputField from "../../common/BFInputField/BFInputField";
import BFRadioButton from "../../common/BFRadioButton/BFRadioButton";

const blockName = "bmr-calculator-section";

class BMRCalculatorSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: null,
            bmr: null,
            gender: "Male",
            height: null,
            isCalculated: false,
            weight: null,
        }
        this.getCalorieRow = this.getCalorieRow.bind(this);
        this.handleOnCalculate = this.handleOnCalculate.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.renderBMRDetails = this.renderBMRDetails.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    getCalorieRow = (calorie) => {
        const { bmr } = this.state;

        return (
            <tr>
                <td>{calorie.activity}</td>
                <td>{bmr*calorie.multiplier}</td>
            </tr>
        )
    }

    handleOnCalculate = () => {
        this.setState({isCalculated: true});
        const { age, weight, height, gender } = this.state;  
        let bmr;

        if (gender == "male") {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
        this.setState({ bmr });
    }

    handleGoBack = () => {
        this.setState({isCalculated: false});
    }

    onInputChange = (field, value) => {
        const newState = {};
        newState[field] = value;
        this.setState({...newState});
    }

    onRadioChange = (gender) => {
        console.log(gender);
        // this.setState({gender});
    }

    renderBMRDetails = () => {
        const { bmr } = this.state;
        const { 
            activityLevelText,
            bmrText, 
            caloriesNeedText,
            caloriesPerDayText,
            calorieText,
            goBackBtn,
            resultText, 
            calorieArray,
        } = getHomePageConstants();

        return <section className={`${blockName}__result-section col-lg-5`}>
            <p className={`${blockName}__result-text`}>{resultText}</p>
            <p className={`${blockName}__bmr`}>{`${bmrText}: ${bmr} ${caloriesPerDayText}`}</p>
            <p className={`${blockName}__calorie-need`}>{caloriesNeedText}</p>
            <table class="table table-dark">
                <thead>
                    <th>{activityLevelText}</th>
                    <th>{calorieText}</th>
                </thead>
                <tbody>
                    {calorieArray.map(calorie => {
                        return this.getCalorieRow(calorie);
                    })}
                </tbody>
            </table>
            <section className={`${blockName}__calculate-button`}>
                <BFButton 
                    btnText={goBackBtn} 
                    handleOnClick={this.handleGoBack}
                />
            </section>
        </section>
    }

    renderForm = () => {
        const { 
            bmrBtnText, 
            genderText, 
        } = getHomePageConstants();
        const { age, weight, height } = this.state;

         return <form className={`${blockName}__form col-lg-5`}>
            <BFInputField 
                fieldName="age"
                inputValue={age}
                labelText="My Age"
                onInputChange={this.onInputChange}
                placeholder="In years"
                type="text"
            />
            <BFInputField 
                fieldName="weight"
                inputValue={weight}
                labelText="My Weight"
                onInputChange={this.onInputChange}
                placeholder="In kgs"
                type="text"
            />
            <BFInputField 
                fieldName="height"
                inputValue={height}
                labelText="My Height"
                onInputChange={this.onInputChange}
                placeholder="In centimeters"
                type="text"
            />
            <section className={`${blockName}__gender-section`}>
                <h2 className={`${blockName}__gender-title`}>{genderText}</h2>
                <BFRadioButton 
                    value="male"
                    label="Male"
                    name="gender"
                    type="radio"
                    onRadioChange={this.onRadioChange}
                />
                <BFRadioButton 
                    value="female"
                    label="Female"
                    name="gender"
                    type="radio"
                    onRadioChange={this.onRadioChange}
                />
            </section>
            <section className={`${blockName}__calculate-button`}>
                <BFButton 
                    btnText={bmrBtnText} 
                    hasIcon={true}
                    iconClass="fab fa-leanpub"
                    handleOnClick={this.handleOnCalculate}
                />
            </section>
        </form>
    }

    render() {
        const { 
            bmrImageAlt, 
            bmrImageSource, 
            bmrTitle,  
        } = getHomePageConstants();
        const { isCalculated } = this.state;
        let renderedComponent = isCalculated ? this.renderBMRDetails() : this.renderForm();

        return (
            <section className={`${blockName}`}>
                <BFTitle title={bmrTitle} />
                <Row className="col-xs-12 col-sm-12 col-lg-12">
                    <section className={`${blockName}__image col-lg-7`}>
                        <img src={bmrImageSource} alt={bmrImageAlt} />
                    </section>
                    {renderedComponent} 
                </Row>
            </section>
        )
    }
}

export default BMRCalculatorSection;
