import React from "react";
import Container from "../components/container";
import ProjectSetup from "../components/project.setup";
import HelloWorld from "../components/hello.world";
import Career from "../components/career";
import ContactMe from "../components/contact.me";
import Home from "../components/home";

export enum PAGE_NAME {
    HOME = "HOME",
    HELLO_WORLD = "HELLO_WORLD",
    PROJECT_SETUP = "PROJECT_SETUP",
    CAREER = "CAREER",
    CONTACT_ME = "CONTACT_ME"
}

interface LandingStateStateInterface {
    diamondPositionClass: string;
    heading: string;
    currentPosition: PAGE_NAME;
}

class LandingPage extends React.Component<{}, LandingStateStateInterface> {
    constructor(props: {}) {
        super(props);

        this.state = {
            diamondPositionClass: "",
            heading: "EWALD VAN ROOYEN",
            currentPosition: PAGE_NAME.HOME
        };
    }

    switchUI = (): void => {
        this.setState({
            diamondPositionClass: "rotate-45",
            heading: "Hello World",
            currentPosition: PAGE_NAME.HOME
        });
    };

    goHomeClickCallback = (): void => {
        this.setState({
            diamondPositionClass: "rotate-0",
            heading: "EWALD VAN ROOYEN"
        });
    };

    clickCallback = (newPosition: PAGE_NAME): void => {
        switch (newPosition) {
            case PAGE_NAME.HOME:
                this.setState({
                    diamondPositionClass: "rotate-0",
                    heading: "EWALD VAN ROOYEN",
                    currentPosition: newPosition
                });
                break;
            case PAGE_NAME.HELLO_WORLD:
                this.setState({
                    diamondPositionClass: "rotate-45",
                    heading: "HELLO WORLD",
                    currentPosition: newPosition
                });
                break;
            case PAGE_NAME.CAREER:
                this.setState({
                    diamondPositionClass: "rotate-90",
                    heading: "CAREER",
                    currentPosition: newPosition
                });
                break;
            case PAGE_NAME.PROJECT_SETUP:
                this.setState({
                    diamondPositionClass: "rotate-135",
                    heading: "PROJECT SETUP",
                    currentPosition: newPosition
                });
                break;
            case PAGE_NAME.CONTACT_ME:
                this.setState({
                    diamondPositionClass: "rotate-180",
                    heading: "CONTACT ME",
                    currentPosition: newPosition
                });
                break;
        }
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const isNotHome: boolean = this.state.currentPosition !== PAGE_NAME.HOME;

        return (
            <Container currentPage={this.state.currentPosition}
                       isNavigationEnabled={isNotHome}
                       heading={this.state.heading}
                       diamondPositionClass={this.state.diamondPositionClass}
                       clickCallback={this.clickCallback}
                       doesHaveRedShadow={isNotHome}>

                {this.state.currentPosition === PAGE_NAME.HOME && (<Home clickCallback={() => {
                    this.clickCallback(PAGE_NAME.HELLO_WORLD);
                }}/>)}
                {this.state.currentPosition === PAGE_NAME.HELLO_WORLD && <HelloWorld/>}
                {this.state.currentPosition === PAGE_NAME.PROJECT_SETUP && <ProjectSetup/>}
                {this.state.currentPosition === PAGE_NAME.CAREER && <Career/>}
                {this.state.currentPosition === PAGE_NAME.CONTACT_ME && <ContactMe/>}
            </ Container>
        );
    }


};

export default LandingPage;