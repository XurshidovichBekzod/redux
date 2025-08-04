import React from 'react'
import Headercom from '../../components/Headercom/Headercom'
import { Outlet } from "react-router-dom";
import Footercom from '../../components/Footercom/Footercom';

const Layout = () => {
    return (
        <>
            <Headercom />
            <main>
                <Outlet />
            </main>
            <Footercom/>
        </>
    )
}

export default Layout