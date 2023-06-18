import React from "react";
import {withRouter} from "react-router-dom";
import VendaService from "../../service/VendaService";
import Card from "../../components/Card";
import TableVenda from "./TableVenda";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';


class ListarVenda extends React.Component{
    state = {  vendas : [], paginaAtual: 1, totalPages: 1 }
 
    handlePageChange = (page) => {
        this.props.history.push(`/listar-vendas/${page}`);
        this.componentDidMount();
    }

    constructor(props) {
        super(props);
        this.vendaService = new VendaService();
    }

    async componentDidMount() {
        let id = (this.props.match.params.page || 1) - 1;
        let data = await (await this.vendaService.listarVendas(id)).data;
        this.setState({vendas: data.content});
        this.setState({paginaAtual: id + 1});
        this.setState({totalPages: data.totalPages});
    }

    voltar = () =>{
        this.props.history.push('/cadastrar-venda')
    }
    
    render(){
        return(    
                    <Card>
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                            <TableVenda vendas={this.state.vendas}></TableVenda>
                            <button type="button" className="btn btn-primary"  onClick={this.voltar}>Cadastrar Venda</button>
                        </div>
                        <span style={{height:"20px"}}></span>
                        <ResponsivePagination
                            current={this.state.paginaAtual}
                            total={this.state.totalPages}
                            onPageChange={page => this.handlePageChange(page)}
                        />
                    </div>
                    </Card>

        )
    }
}

export default withRouter(ListarVenda)