import React from "react";
import {Route,Switch,HashRouter} from 'react-router-dom'
import CadastroCliente from "../view/CadastroCliente";
import EditarCliente from "../view/EditarCliente";
import ListarCliente from "../view/Consultar/ListarCliente";

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/cadastrar-cliente" component={CadastroCliente}></Route>
                <Route path="/editar-cliente/:id" component={EditarCliente}></Route>
                <Route path="/listar-clientes" component={ListarCliente}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas