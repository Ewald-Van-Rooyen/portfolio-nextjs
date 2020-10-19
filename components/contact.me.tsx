import React from "react";
import {HiOutlineMail} from "react-icons/hi";

const ContactMe: React.FunctionComponent = () => {
    return (<>
            <h2 className={"is-size-4 is-family-monospace has-text-white"}>
                like what you see? Want to get in touch? Buy me a coffee?
            </h2>
            <h3
                className={"mouse-over is-size-4 is-family-monospace has-text-white multi-ani"}>
                <a className={"has-text-white"} href={"mailto:mailmevanrooyen@gmail.com"}>Contact
                    me! <HiOutlineMail/></a>
            </h3>
        </>
    );

};

export default ContactMe;
