import React from "react";
import LandingPage from "./landing.page";
import ParticlesBackground from "../components/background";
import Headers from "../components/headers";

export default function IndexPage() {
    return (
        <>
            <Headers/>
            <ParticlesBackground/>
            <LandingPage/>
        </>
    )
}
