import React from "react";

const HelloWorld: React.FunctionComponent = () => {
    return (
        <div className={"columns is-mobile level"}>
            <p className={"is-size-4 is-family-monospace has-text-white is-size-6-mobile"}>
                I build full stack, half stack, PWA or CMS application...
                and I use JavaScript to achieve this.

                <br/>
                 <br/>
                <div className={"is-not-visible-mobile "}>
                <span className={"is-size-5 is-family-monospace has-text-white"}> Here are a few frameworks that I have used to create
                applications:</span>

                    <ul className={"is-size-6 has-text-left"}>
                        <li>FE: React, Vue, Angular (Been playing around with Svelte)</li>
                        <li>BE: Nodejs, Express, Hapi, Nestjs</li>
                        <li>Static Websites: Nextjs, Gatsby</li>
                        <li>PWA: Ionic, Nativescript</li>
                    </ul>
                </div>
            </p>

        </div>
    );
};

export default HelloWorld;