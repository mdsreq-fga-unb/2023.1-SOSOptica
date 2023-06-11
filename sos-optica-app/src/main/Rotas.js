import React from "react";
import {Route,Switch,HashRouter} from 'react-router-dom'
import CadastroCliente from "../view/CadastroCliente";
import EditarCliente from "../view/EditarCliente";

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/cadastrar-cliente" component={CadastroCliente}></Route>
            </Switch>
            <Switch>
                <Route path="/editar-cliente/:id" component={EditarCliente}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas