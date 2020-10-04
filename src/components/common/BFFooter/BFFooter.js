// @vendor
import React from "react";
import "./BFFooter.scss";
import { Col, Row } from "react-bootstrap";
// Constants
import { getFooterConstants } from "../../../constants/footer";
// components
import BFTitle from "../BFTitle/BFTitle";
import BFInputField from "../BFInputField/BFInputField";
import BFButton from "../BFButton/BFButton";

const blockName = "bf-footer";

class BFFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            isSent: false,
        }

        this.handleSendBtn = this.handleSendBtn.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.renderBefitDescription = this.renderBefitDescription.bind(this);
        this.renderContactUsForm = this.renderContactUsForm.bind(this);
        this.renderBefitAddress = this.renderBefitAddress.bind(this);
    }

    handleSendBtn = () => {
        const { name, email, message } = this.state;
    }

    onInputChange = (field, value) => {
        const newState = {};
        newState[field] = value;
        this.setState({...newState});
    }

    renderBefitDescription = () => {
        const { 
            title, 
            descriptionOne, 
            descriptionTwo, 
            copyrightText 
        } = getFooterConstants();

        return (
            <>
                <h2 className={`${blockName}__logo`}>{title}</h2>
                <p className={`${blockName}__desc-one`}>{descriptionOne}</p>
                <p className={`${blockName}__desc-two`}>{descriptionTwo}</p>
                <p className={`${blockName}__copyright-text`}>{copyrightText}</p>
            </>
        )
    }

    renderContactUsForm = () => {
        const { name, email, message} = this.state;
        const { contactUsLabel, sendBtnText } = getFooterConstants();

        return (
            <section className={`${blockName}__contact-us-section`}>
                <h2 className={`${blockName}__contact-us-heading`}>{contactUsLabel}</h2>
                <form className={`${blockName}__contact-us-form`}>
                    <BFInputField 
                        bottomBorder={true}
                        fieldName="name"
                        inputValue={name}
                        onInputChange={this.onInputChange}
                        placeholder="Name"
                        type="text"
                    />
                    <BFInputField 
                        bottomBorder={true}
                        fieldName="email"
                        inputValue={email}
                        onInputChange={this.onInputChange}
                        placeholder="Email"
                        type="email"
                    />
                    <BFInputField 
                        bottomBorder={true}
                        fieldName="message"
                        inputValue={message}
                        onInputChange={this.onInputChange}
                        placeholder="Message"
                        type="text"
                    />
                </form>
                <section className={`${blockName}__calculate-button`}>
                    <BFButton 
                        btnText={sendBtnText} 
                        handleOnClick={this.handleSendBtn}
                    />
                </section>
            </section>
        )
    }

    renderBefitAddress = () => {
        const { 
            addressLabel,
            addressValue,
            phoneLabel,
            phoneValue,
            emailLabel,
            emailValue,
        } = getFooterConstants();

        return (
            <>
                <BFTitle title={addressLabel} description={addressValue} />
                <BFTitle title={phoneLabel} description={phoneValue} />
                <BFTitle title={emailLabel} description={emailValue} />
            </>
        )
    }

    render() {
        return (
            <>
                <Row className={`${blockName}`}>
                    <Col xs={12} sm={12} lg={3} className={`${blockName}__left`}>
                        {this.renderBefitDescription()}
                    </Col>
                    <Col xs={12} sm={12} lg={6} className={`${blockName}__middle`}>
                        {this.renderContactUsForm()}
                    </Col>
                    <Col xs={12} sm={12} lg={3} className={`${blockName}__right`}>
                        {this.renderBefitAddress()}
                    </Col>
                </Row>
            </>
        )
    }
}

export default BFFooter;