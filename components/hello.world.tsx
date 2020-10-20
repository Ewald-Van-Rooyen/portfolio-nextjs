import React from "react";

const HelloWorld: React.FunctionComponent = () => {
    return (
        <div className={"columns is-mobile level"}>
            <p className={"is-size-4 is-family-monospace has-text-white is-size-6-mobile"}>
                I build all the stack applications, full, half, PWA, CMS.
                You name it and i'll do it.. In Javascript.

                <br/>
                <br/>
                <div className={"is-not-visible-mobile "}>
                <span className={"is-size-5 is-family-monospace has-text-white"}>Here are a few frameworks that I have used to create
                applications:</span>

                    <ul className={"is-size-6 has-text-left"}>
                        <li>
                            <div className={"tooltip"}>FE: React, Vue, Angular (Been playing around with Svelte)
                                <span className="tooltiptext">Front End</span>
                            </div>
                        </li>
                        <li>
                            <div className={"tooltip"}>BE: Nodejs, Express, Hapi, Nestjs
                                <span className="tooltiptext">Back End</span>
                            </div>
                        </li>
                        <li>Static Websites: Nextjs, Gatsby</li>
                        <li>PWA: Ionic, Nativescript</li>
                    </ul>
                </div>
            </p>

        </div>
    );
};

export default HelloWorld;