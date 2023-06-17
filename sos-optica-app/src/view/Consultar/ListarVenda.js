import React from "react";
import {withRouter} from "react-router-dom";
import VendaService from "../../service/VendaService";
import Card from "../../components/Card";
import TableVenda from "./TableVenda";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';


class ListarVenda extends React.Component{
    state = {  clientes : [], paginaAtual: 3 }
    totalPages = 0;
   
    
    handlePageChange = (page) => {
        this.props.history.push(`/listar-vendas/${page}`)
    }

    constructor(props) {
        super(props);
        this.vendaService = new VendaService();
    }

    listarTodosClientes = (id) => {
        let page = id - 1;
        this.vendaService.listarClientes(page).then(response => {
            this.setState({clientes:response.data.content})
            this.setState({paginaAtual: id})
            this.totalPages = response.data.totalPages;
        }
        ).catch(error => {
            console.log(error.response)
        })

    }

    voltar = () =>{
        this.props.history.push('/cadastrar-venda')
    }
    
    

    render(){

        let id = (this.props.match.params.page || 1)
        this.listarTodosClientes(id)
        return(
                    <Card>
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                            <TableVenda vendas={this.state.clientes}></TableVenda>
                            <button type="button" className="btn btn-primary"  onClick={this.voltar}>Cadastrar Venda</button>
                        </div>
                        <ResponsivePagination
                            current={this.state.paginaAtual}
                            total={this.totalPages}
                            onPageChange={page => this.handlePageChange(page)}
                        />
                    </div>
                    </Card>

        )
    }
}

export default withRouter(ListarVenda)