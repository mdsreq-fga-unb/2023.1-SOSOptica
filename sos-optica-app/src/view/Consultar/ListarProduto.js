import React from "react";
import Card from "../../components/Card";
import TableProduto from "./TableProduto";
import {withRouter} from "react-router-dom";
import ProdutoService from "../../service/ProdutoService";
import {FormGroup} from "react-bootstrap";
import Dashboard from "../../components/dashboard/Dashboard";
import NavBar from "../../components/dashboard/NavBar";
import {mensagemErro,mensagemSucesso} from "../../components/toastr";

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

    deletar = (produto) => {
        console.log(produto)
        if (window.confirm("Deseja deletar o produto?") === true) {
            this.produtoService.deletar(produto.id).then(response => {
                    const todos = this.state.produtos;
                    const index = todos.indexOf(produto);
                    todos.splice(index,1);
                    this.setState(todos);
                    mensagemSucesso("Produto deletado com sucesso!")

                }
            ).catch(error => {
                mensagemErro("Erro ao deletar produto!")
            })
        }

    }
    render(){

        return(
            <>
                <NavBar></NavBar>
            <Dashboard></Dashboard>

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
                            <TableProduto produtos={this.state.produtos} deleteAction={this.deletar}></TableProduto>
                            <button type="button" className="btn btn-primary btn-hover"  onClick={this.voltar}>Cadastrar Produto</button>
                        </div>
                    </div>
                </Card>
            </>


        );
    }
}

export default withRouter(ListarProduto);
