import React from "react";

import Rotas from "./Rotas";
import NavBar from "../components/dashboard/NavBar";

import 'bootswatch/dist/lux/bootstrap.css'
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'
import Dashboard from "../components/dashboard/Dashboard";

function App() {
    return (
        <>
            <Dashboard></Dashboard>
            <NavBar></NavBar>
            <Rotas></Rotas>


        </>
    );
}

export default App;
