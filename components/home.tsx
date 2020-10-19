import React from "react";

interface HomeInterface {
    clickCallback: () => void;
}

const Home: React.FunctionComponent<HomeInterface> = (props) => {
    return (
        <>
            <h2 className={"is-size-4 is-family-monospace has-text-white"}>
                full stack developer by day, sleepless father by night
            </h2>
            <h3 onClick={props.clickCallback}
                className={"mouse-over is-size-4 is-family-monospace has-text-white multi-ani"}>
                Want to know more?
            </h3>
        </>
    );
};

export default Home;