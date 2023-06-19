import React from "react";
import {Route,Switch,HashRouter} from 'react-router-dom'
import CadastroCliente from "../view/cadastro/CadastroCliente";
import EditarCliente from "../view/EditarCliente";
import ListarCliente from "../view/Consultar/ListarCliente";
import ListarProduto from "../view/Consultar/ListarProduto";
import CadastroVenda from "../view/cadastro/CadastroVenda";
import ListarVenda from "../view/Consultar/ListarVenda";

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/cadastrar-cliente" component={CadastroCliente}></Route>
                <Route path="/editar-cliente/:id" component={EditarCliente}></Route>
                <Route path="/listar-clientes" component={ListarCliente}></Route>
                <Route path="/listar-produtos" component={ListarProduto}></Route>
                <Route path="/cadastrar-venda" component={CadastroVenda}></Route>
                <Route path="/listar-vendas/:page" component={ListarVenda}></Route>
                <Route path="/listar-vendas" component={ListarVenda}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas