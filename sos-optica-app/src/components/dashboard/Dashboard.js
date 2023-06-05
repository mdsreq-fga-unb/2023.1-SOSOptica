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
                   <Item href="/" label="Home" icon="bx bx-home-alt"></Item>
                    </ul>
                    <ul className="menu_items">
                        <div className="menu_title menu_cliente"></div>
                        <Item href="/#/cadastrar-cliente" label ="Novo Cliente" icon = "bx bxs-user"></Item>
                        <Item href="#" label = "Nova Receita" icon ="bx bx-glasses"></Item>
                        <Item href="#" label ="Clientes" icon ="bx bxs-book-reader"></Item>
                    </ul>

                    <ul className="menu_items">
                        <div className="menu_title menu_vendas"></div>
                        <Item href="#" label = "Cadastrar Venda" icon="bx bxs-cart"></Item>
                        <Item href="#" label="Historico Venda" icon="bx bxs-bookmark-alt"></Item>
                    </ul>

                    <ul className="menu_items">
                        <div className="menu_title menu_produtos"></div>
                        <Item href="" label="Estoque" icon="bx bxs-truck"></Item>
                    </ul>

                </div>
            </nav>
                </>
    )}

}

export default Dashboard;
