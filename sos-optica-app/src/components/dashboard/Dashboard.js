import React from "react";
import 'boxicons/css/boxicons.min.css';
import './style.css'
import './images/logo.png'
import Item from "./Item";

class Dashboard extends React.Component{
    render() {
        return(
            <>
            <nav className="sidebar">
                <div className="menu_content">
                    <ul className="menu_items">
                        <div className="menu_title menu_dahsboard"></div>
                   <Item href="#/home" label="Home" icon="bx bx-home-alt"></Item>
                    </ul>
                    <ul className="menu_items">
                        <div className="menu_title menu_cliente"></div>
                        <Item href="#/cadastrar-cliente" label ="Novo Cliente" icon = "bx bxs-user"></Item>
                        {/*<Item href="#/cadastrar-receita" label ="Nova Receita" icon ="bx bx-glasses"></Item>*/}
                        <Item href="#/listar-clientes" label ="Clientes" icon ="bx bxs-book-reader"></Item>
                    </ul>

                    <ul className="menu_items">
                        <div className="menu_title menu_vendas"></div>
                        <Item href="#/cadastrar-venda" label = "Cadastrar Venda" icon="bx bxs-cart"></Item>
                        <Item href="#/listar-vendas" label="Historico Venda" icon="bx bxs-bookmark-alt"></Item>
                    </ul>

                    <ul className="menu_items">
                        <div className="menu_title menu_produtos"></div>
                        <Item href="#/cadastrar-produto" label="Cadastrar Produto" icon="bx bxs-truck"></Item>
                        <Item href="#/listar-produtos" label="Estoque" icon="bx bxs-truck"></Item>
                    </ul>

                </div>
            </nav>
            </>
    )}

}

export default Dashboard;
