import React from "react";
import {withRouter} from "react-router-dom";
import VendaService from "../../service/VendaService";
import Card from "../../components/Card";
import TableVenda from "./TableVenda";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';


class ListarVenda extends React.Component{
    state = {  vendas : [], paginaAtual: 1, totalPages: 1, pesquisar: "" }
 
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

    pesquisar = async () =>{
        let data = (await this.vendaService.pesquisarProdutoOuNome(this.state.pesquisar)).data;
        this.setState({vendas: data || []});
        this.setState({paginaAtual: 1});
        this.setState({totalPages: 1});
    }
    
    render(){
        return(    
                    <Card>
                    <div className="row" >
                        <div className="col-md-6 ms-auto" style={{padding: "0 45px 0 0", marginTop: "20px"}}> 
                        <input  type="text"
                                           name="nomeCliente"
                                           className="form-control col-md-1"
                                           placeholder="Nome ou produto"
                                           id="inputNome"
                                           style={{float: "left", width: "70%"}}
                                           onChange={e => this.setState({pesquisar: e.target.value})}
                                    />
                                    
                         <button type="button" style={{float: "right", width: "30%"}} className="btn btn-primary float-right"  onClick={this.pesquisar}>Pesquisar</button>
                        </div>
                    </div>
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