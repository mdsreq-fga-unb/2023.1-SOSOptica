import React from "react";
import {Route,Switch,HashRouter} from 'react-router-dom'
import CadastroCliente from "../view/cadastro/CadastroCliente";
import CadastroReceita from "../view/cadastro/CadastroReceita";
import EditarCliente from "../view/EditarCliente";
import ListarCliente from "../view/Consultar/ListarCliente";
import ListarProduto from "../view/Consultar/ListarProduto";
import CadastroVenda from "../view/cadastro/CadastroVenda";
import ListarVenda from "../view/Consultar/ListarVenda";
import CastrarProdutos from "../view/cadastro/CastrarProdutos";

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/cadastrar-cliente"    component={CadastroCliente}></Route>
                <Route path="/editar-cliente/:id"   component={EditarCliente}></Route>
                <Route path="/listar-clientes"      component={ListarCliente}></Route>
                <Route path="/listar-produtos"      component={ListarProduto}></Route>
                <Route path="/cadastrar-venda"      component={CadastroVenda}></Route>
                <Route path="/listar-vendas/:page"  component={ListarVenda}></Route>
                <Route path="/listar-vendas"        component={ListarVenda}></Route>
                <Route path="/cadastrar-receita"    component={CadastroReceita}></Route>
                <Route path="/cadastrar-produto"    component={CastrarProdutos}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas