// @vendor
import React from "react";
import "./BFNavbar.scss";
import {
    Navbar, Nav
} from "react-bootstrap";
import sn from "classnames";
// Constants
import { getHeaderNavLabels } from "../../../constants/header";

const blockName = "bf-navbar";

class BFNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navClass: 'not-fixed',
            isTop: true, 
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 120;
            if (isTop !== this.state.isTop) {
                this.setState({ navClass: 'fixed' })
            } else {
                this.setState({ navClass: 'not-fixed' })
            }
        });
    }

    render() {
        const { NAV_ITEMS, title } = getHeaderNavLabels();
        const { navClass } = this.state;

        return (
            <section className={sn(`${blockName}`, `${navClass}`)}>
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
            </section>
        )
    }
}

export default BFNavbar;