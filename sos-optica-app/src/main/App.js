import 'bootswatch/dist/lux/bootstrap.css'
import Rotas from "./Rotas";
import NavBar from "../components/NavBar";
import React from "react";
function App() {
    return (
        <>
            <NavBar></NavBar>
            <div className="container" style={{overflow:"hidden"}}>
                <Rotas></Rotas>
            </div>

        </>
    );
}

export default App;
