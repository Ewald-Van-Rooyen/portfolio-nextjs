import React, {ReactNode} from "react";

import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
import {PAGE_NAME} from "../pages/landing.page";

enum DIRECTION {
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

interface ContainerPropsInterface {
    currentPage: PAGE_NAME;
    clickCallback: (newPosition: PAGE_NAME) => void;
    diamondPositionClass: string;
    heading: string;
    children?: ReactNode;
    doesHaveRedShadow?: boolean;
    isNavigationEnabled: boolean;
}


const Container: React.FunctionComponent<ContainerPropsInterface> = (props) => {

    const navigateScreens = (direction: DIRECTION) => {
        if (direction === DIRECTION.RIGHT) {
            if (props.currentPage === PAGE_NAME.HELLO_WORLD) {
                props.clickCallback(PAGE_NAME.PROJECT_SETUP);
            }
        } else {
            if (props.currentPage === PAGE_NAME.PROJECT_SETUP) {
                props.clickCallback(PAGE_NAME.HELLO_WORLD);
            }
        }
    };

    const navigationButtons = (
        <>
            <div onClick={()=>{navigateScreens(DIRECTION.LEFT)}} className={"arrows"}><BiLeftArrow className={"left-float-button has-text-white is-mobile arrows"}/>
            </div>
            <div onClick={()=>{navigateScreens(DIRECTION.RIGHT)}} className={"arrows"}><BiRightArrow className={"right-float-button has-text-white is-mobile arrows"}/>
            </div>
        </>);

    return (
        <div className={"container full-height is-widescreen p-6 is-mobile top"}>
            <div className={"block"}>
                <div className="content center is-mobile is-four-fifths">
                    <div onClick={() => {
                        props.clickCallback(PAGE_NAME.HOME)
                    }}
                         className={`container has-text-centered is-block ${props.diamondPositionClass}`}>
                        <img className={"diamond arrows"} src={"/diamond.png"}/>
                    </div>
                    <div className="background-opacity container has-text-centered p-6 white-border is-block size">
                        {props.isNavigationEnabled && navigationButtons}
                        <h1 className={`is-size-1 is-family-monospace has-text-white ${props.doesHaveRedShadow ? "shadow" : ""}`}>
                            {props.heading}
                        </h1>
                        {props.children}
                        <div className="line1"/>
                        <div className="line2"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Container;