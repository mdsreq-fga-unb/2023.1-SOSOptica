import React from "react";
import Card from "../../components/Card";
import TableProduto from "./TableProduto";
import {withRouter} from "react-router-dom";
import ProdutoService from "../../service/ProdutoService";
import {FormGroup} from "react-bootstrap";

class ListarProduto extends React.Component{
// eslint-disable-next-line import/no-anonymous-default-export
    state = {
        produtos : []
    }
    constructor() {
        super();
        this.produtoService = new ProdutoService();
    }

    async componentDidMount() {
        let data = await (await this.produtoService.listarProdutos()).data;
        this.setState({produtos: data});
    }

    listarTodosProdutos = () => {
        this.produtoService.listarProdutos().then(response => {
                this.setState({produtos:response.data})
            }
        ).catch(error => {
            console.log(error.response)
        })

    }

    listarProdutosComfaltaNoestoque = () => {
        this.produtoService.listarFaltaNoEstoque().then(response => {
                this.setState({produtos:response.data})
            }
        ).catch(error => {
            console.log(error.response)
        })

    }

    voltar = () =>{
        this.props.history.push('/cadastrar-produto')
    }
    render(){

        return(

                <Card>
                    <div>
                        <FormGroup >
                            <div className="row" style={{margin:"20px"}}>
                                <div className="col-md-3">
                                    <button type="button" className="btn btn-primary btn-hover"  onClick={this.listarProdutosComfaltaNoestoque}>Em Falta</button>

                                </div>
                            </div>
                        </FormGroup>



                    </div>


                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                            <TableProduto produtos={this.state.produtos}></TableProduto>
                            <button type="button" className="btn btn-primary btn-hover"  onClick={this.voltar}>Cadastrar Produto</button>
                        </div>
                    </div>
                </Card>

        );
    }
}

export default withRouter(ListarProduto);
