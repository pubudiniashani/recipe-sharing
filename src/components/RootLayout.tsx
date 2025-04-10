import Navbar from "./Navigation.tsx";
import {Outlet} from "react-router";

export function RootLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

