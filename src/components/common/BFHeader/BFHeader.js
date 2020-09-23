// @vendor
import React from "react";
import "./BFHeader.scss";
import {
    Navbar, Nav
} from "react-bootstrap";
import sn from "classnames";
// Constants
import { getHeaderNavLabels } from "../../../constants/header";

const blockName = "bf-header";

class BFHeader extends React.Component {
    render() {
        const { NAV_ITEMS, title, quote } = getHeaderNavLabels();
        return (
            <>
                <section className={blockName}>
                    <section className={sn(`${blockName}__layer`)} />
                    <Navbar collapseOnSelect expand="lg">
                        <Navbar.Brand href="#home">{title}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                {NAV_ITEMS.map((nav, index) => {
                                    return <Nav.Link eventKey={index} href={nav.link}>{nav.label}</Nav.Link>
                                })}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <section className={sn(`${blockName}__quote`)}>{`"${quote}"`}</section>
                </section>
            </>
        )
    }
}

export default BFHeader;