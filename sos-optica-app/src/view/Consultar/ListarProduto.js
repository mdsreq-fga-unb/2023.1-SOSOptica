import React from "react";
import Card from "../../components/Card";
import TableProduto from "./TableProduto";
import {withRouter} from "react-router-dom";
import ProdutoService from "../../service/ProdutoService";
import {FormGroup} from "react-bootstrap";

class ListarProduto extends React.Component{

    state = {
        produtos : []
    }
    constructor() {
        super();
        this.produtoService = new ProdutoService();
    }

    listarTodosProdutos = () => {
        this.produtoService.listarProdutos().then(response => {
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
        this.listarTodosProdutos()
        return(

                <Card>
                    <div>
                        <FormGroup >
                            <div className="row" style={{margin:"20px"}}>
                                <div className="col-md-3">
                                        <input type="text"
                                               name="nomeProduto"
                                               className="form-control"
                                               placeholder="Digite o nome do produto"
                                               id="inputNome"

                                        />

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
