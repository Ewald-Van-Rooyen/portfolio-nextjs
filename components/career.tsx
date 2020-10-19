import React from "react";

const Career: React.FunctionComponent = () => {
    return (
        <div className={"columns is-mobile level"}>
            <p className={"is-size-4 is-family-monospace has-text-white is-size-6-mobile"}>
                I have been in the software development space for a while.
                This has given me the opportunity to work with a few amazing companies.

                <br/>
                <div className={"is-size-5"}>
                    <ul className={"has-text-left is-size-6-mobile"}>
                        <li><a className={"has-text-white"} href={"https://info.peachpayments.com/?keyword=peach%20payments&gclid=Cj0KCQjw8rT8BRCbARIsALWiOvSZfQBCuYJ9GXdo26HYXEBrsHizq8J9EFuYj0NIlsA_L91oSaT9JlwaApg9EALw_wcB"}>Peach Payment (Electronic payments/E-commerce)</a></li>
                        <li><a className={"has-text-white"} href={"https://www.capitecbank.co.za/"}>Capitec Bank</a></li>
                        <li><a className={"has-text-white"} href={"https://www.imqs.co.za/"}>IMQS (Infrastructure management software)</a></li>
                    </ul>
                </div>
            </p>

        </div>
    );
};

export default Career;