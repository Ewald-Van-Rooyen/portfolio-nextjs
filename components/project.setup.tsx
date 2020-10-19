import React from "react";
import {FaReact} from "react-icons/fa";
import {SiBulma, SiJavascript, SiNextDotJs} from "react-icons/si";
import {VscGithubInverted} from "react-icons/vsc";

const ProjectSetup: React.FunctionComponent = () => {
    return (
        <>
            <p className={"is-size-6-mobile is-size-4 is-family-monospace has-text-white"}>The following technologies
                where used to create this website</p>
            <ul className={"has-text-left is-family-monospace has-text-white is-size-5"}>
                <li><a className={"has-text-white"} href={"https://reactjs.org/"}>React <FaReact/></a></li>
                <li><a className={"has-text-white"} href={"https://nextjs.org/"}>Nextjs <SiNextDotJs/></a></li>
                <li><a className={"has-text-white"} href={"https://bulma.io/"}>Bulma Css <SiBulma/></a></li>
                <li><a className={"has-text-white"}
                       href={"https://vincentgarreau.com/particles.js/"}>Particles.js <SiJavascript/></a></li>
            </ul>
            <p className={"is-size-4 is-family-monospace has-text-white is-not-visible-mobile"}>
                <a className={"has-text-white"} href={"https://github.com/Ewald-Van-Rooyen/portfolio-nextjs"}>View this project on my
                    Github <VscGithubInverted/></a>
            </p>
        </>
    )
};

export default ProjectSetup;