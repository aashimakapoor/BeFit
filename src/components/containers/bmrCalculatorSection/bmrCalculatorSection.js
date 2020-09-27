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
            exerciseDays: null,
            gender: "Male",
            age: '',
            weight: '',
            height: '',
            fatPercentage: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange = (field, value) => {
        const newState = {};
        newState[field] = value;
        this.setState({...newState});
        console.log(this.state.age);
    }

    render() {
        const { 
            bmrBtnText, 
            bmrImageAlt, 
            bmrImageSource, 
            bmrTitle, 
            genderText, 
        } = getHomePageConstants();

        return (
            <section className={`${blockName}`}>
                <BFTitle title={bmrTitle} />
                <Row className="col-xs-12 col-sm-12 col-lg-12">
                    <section className={`${blockName}__image col-lg-8`}>
                        <img src={bmrImageSource} alt={bmrImageAlt} />
                    </section>
                    <form className={`${blockName}__form col-lg-4`}>
                        <BFInputField 
                            fieldName="age"
                            inputValue={this.state.age}
                            labelText="My Age"
                            onInputChange={this.onInputChange}
                            type="text"
                        />
                        <BFInputField 
                            fieldName="weight"
                            inputValue={this.state.weight}
                            labelText="My Weight"
                            onInputChange={this.onInputChange}
                            type="text"
                        />
                        <BFInputField 
                            fieldName="height"
                            inputValue={this.state.height}
                            labelText="My Height"
                            onInputChange={this.onInputChange}
                            type="text"
                        />
                        <section className={`${blockName}__gender-section`}>
                            <h2 className={`${blockName}__gender-title`}>{genderText}</h2>
                            <BFRadioButton 
                                id="male"
                                inputValue="male"
                                labelText="Male"
                                name="gender"
                                type="radio"
                            />
                            <BFRadioButton 
                                id="female"
                                inputValue="female"
                                labelText="Female"
                                name="gender"
                                type="radio"
                            />
                        </section>
                        <section className={`${blockName}__calculate-button`}>
                            <BFButton 
                                btnText={bmrBtnText} 
                                hasIcon={true}
                                iconClass="fab fa-leanpub"
                            />
                        </section>
                    </form>
                </Row>
            </section>
        )
    }
}

export default BMRCalculatorSection;
