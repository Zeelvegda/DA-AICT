import { Outlet } from "react-router-dom";
import Header from "../MyComponents/header";

export default function Layout(){
    return(
        <>
        {/* <Header/> */}
        <Outlet/>

        </>
    )
}