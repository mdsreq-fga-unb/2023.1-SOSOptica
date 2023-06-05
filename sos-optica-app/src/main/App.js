import 'bootswatch/dist/lux/bootstrap.css'
import Rotas from "./Rotas";
import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import NavBar from "../components/dashboard/NavBar";
function App() {
    return (
        <>
            <NavBar></NavBar>
            <Dashboard></Dashboard>
            <div className="container" style={{overflow:"hidden",position: "relative"}}>

                <Rotas></Rotas>
            </div>

        </>
    );
}

export default App;
