import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Header from "../MyComponents/header";
import Main from "../MyComponents/main";
import Sheild from "../MyComponents/shielding";
import Inflatablespacecraft from "../MyComponents/Spacecraft";
import LiquidHydrogen from "../MyComponents/Liquid";
import ActiveRadiation from "../MyComponents/ActiveRadiation";
import MultiLayered from "../MyComponents/MultiLayered";
import Carbonnanotube from "../MyComponents/Carbon";
import Facebook from "../MyComponents/facebook";
import Linkedin from "../MyComponents/linkedin";

const router = createBrowserRouter([
    {
        path: "",
        element: <Header />,
        children: [
            
        ]   
    },
    {
        path: "mypage",
        element: <Main />,
    },
    
    {
        path: "mypage/sheild",
        element: <Sheild />,
    },
    {
        path: "mypage/Inflatablespacecraft",
        element: <Inflatablespacecraft />,
    },
    {
        path: "mypage/LiquidHydrogen",
        element: <LiquidHydrogen />,
    },
    {
        path: "mypage/ActiveRadiation",
        element: <ActiveRadiation />,
    },
    {
        path: "mypage/MultiLayered",
        element: <MultiLayered />,
    },
    {
        path: "mypage/Carbonnanotube",
        element: <Carbonnanotube />,
    },
    {
        path: "facebook",
        element: <Facebook />,
    },
    {
        path: "linkedin",
        element: <Linkedin />,
    },
])

export default router;