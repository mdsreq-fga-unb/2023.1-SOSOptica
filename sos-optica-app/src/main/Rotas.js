import React from "react";
import {Route,Switch,HashRouter} from 'react-router-dom'
import CadastroCliente from "../view/CadastroCliente";

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/cadastrar-cliente" component={CadastroCliente}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas