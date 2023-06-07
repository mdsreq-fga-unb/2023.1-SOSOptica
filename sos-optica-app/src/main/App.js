import React from "react";

import Rotas from "./Rotas";
import Dashboard from "../components/dashboard/Dashboard";
import NavBar from "../components/dashboard/NavBar";

import 'bootswatch/dist/lux/bootstrap.css'
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'

function App() {
    return (
        <>

            <NavBar></NavBar>
            <Dashboard></Dashboard>
            <Rotas></Rotas>

        </>
    );
}

export default App;
