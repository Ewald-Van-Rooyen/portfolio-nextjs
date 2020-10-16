import React from "react";
import Container from "../components/container";
import ProjectSetup from "../components/project.setup";
import AboutMe from "../components/about.me";

export enum PAGE_NAME {
    HOME = "HOME",
    HELLO_WORLD = "HELLO_WORLD",
    PROJECT_SETUP = "PROJECT_SETUP"
}

interface LandingStateStateInterface {
    showLandingContent: boolean;
    showHelloWorld: boolean;
    showProjectSetup: boolean;
    diamondPositionClass: string;
    heading: string;
    currentPosition: PAGE_NAME;
}

class LandingPage extends React.Component<{}, LandingStateStateInterface> {
    constructor(props: {}) {
        super(props);

        this.state = {
            showLandingContent: true,
            showHelloWorld: false,
            showProjectSetup: false,
            diamondPositionClass: "",
            heading: "EWALD VAN ROOYEN",
            currentPosition: PAGE_NAME.HOME
        };
    }

    switchUI = (): void => {
        this.setState({
            showLandingContent: !this.state.showLandingContent,
            diamondPositionClass: "rotate-45",
            heading: "Hello World",
            currentPosition: PAGE_NAME.HOME
        });
    };

    goHomeClickCallback = (): void => {
        this.setState({
            showLandingContent: true,
            diamondPositionClass: "rotate-0",
            heading: "EWALD VAN ROOYEN"
        });
    };

    clickCallback = (newPosition: PAGE_NAME): void => {
        switch (newPosition) {
            case PAGE_NAME.HOME:
                this.setState({
                    showLandingContent: true,
                    showHelloWorld: false,
                    showProjectSetup: false,
                    diamondPositionClass: "rotate-0",
                    heading: "EWALD VAN ROOYEN",
                    currentPosition: newPosition
                });
                break;
            case PAGE_NAME.HELLO_WORLD:
                this.setState({
                    showHelloWorld: true,
                    showLandingContent: false,
                    showProjectSetup: false,
                    diamondPositionClass: "rotate-45",
                    heading: "HELLO WORLD",
                    currentPosition: newPosition
                });
                break;
            case PAGE_NAME.PROJECT_SETUP:
                this.setState({
                    showHelloWorld: false,
                    showLandingContent: false,
                    showProjectSetup: true,
                    diamondPositionClass: "rotate-90",
                    heading: "PROJECT SETUP",
                    currentPosition: newPosition
                });
                break;
        }
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const mainScreenContent = (<>
                <h2 className={"is-size-4 is-family-monospace has-text-white"}>
                    full stack developer by day, sleepless father by night
                </h2>
                <h3 onClick={() => {
                    this.clickCallback(PAGE_NAME.HELLO_WORLD)
                }}
                    className={"mouse-over is-size-4 is-family-monospace has-text-white multi-ani"}>
                    Want to know more?
                </h3>
            </>
        );

        return (
            <Container currentPage={this.state.currentPosition}
                       isNavigationEnabled={!this.state.showLandingContent}
                       heading={this.state.heading}
                       diamondPositionClass={this.state.diamondPositionClass}
                       clickCallback={this.clickCallback}
                       doesHaveRedShadow={!this.state.showLandingContent}>

                {this.state.showLandingContent && mainScreenContent}
                {this.state.showHelloWorld && <AboutMe/>}
                {this.state.showProjectSetup && <ProjectSetup/>}
            </Container>
        );
    }


};

export default LandingPage;