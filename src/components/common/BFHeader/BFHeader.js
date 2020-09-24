// @vendor
import React from "react";
import "./BFHeader.scss";
import sn from "classnames";
// components
import BFNavbar from "./../BFNavbar/BFNavbar";
// Constants
import { getHeaderNavLabels } from "../../../constants/header";

const blockName = "bf-header";

class BFHeader extends React.Component {
    render() {
        const { quote } = getHeaderNavLabels();
        
        return (
            <>
                <section className={blockName}>
                    <section className={sn(`${blockName}__layer`)} />
                    <BFNavbar />
                    <section className={sn(`${blockName}__quote`)}>{`"${quote}"`}</section>
                </section>
            </>
        )
    }
}

export default BFHeader;