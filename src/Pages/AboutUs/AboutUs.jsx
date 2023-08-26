import React from "react";
import Achievement from "../../React Components/Achievement/Achievement";
import Founder from "../../React Components/Founder/Founder";
import Campaingn from "../../React Components/Campaingn/Campaingns";
import Mission from "../../React Components/Mission/Mission";
import Teams from "../../React Components/Team/Team";
import Support from "../../React Components/Support/Support";

export default function AboutUs(){
    return (
        <>
            <Founder />
            <Mission />
            <Campaingn />
            <Teams />
            <Achievement />
            <Support />
        </>
    );
}