import React from "react";
import {withRouter} from "react-router-dom";
import {mensagemErro, mensagemSucesso} from "../../components/toastr";
import NavBar from "../../components/dashboard/NavBar";
import Dashboard from "../../components/dashboard/Dashboard";
import Card from "../../components/Card";
import FormGroup from "../../components/form-group";
import ProdutoService from "../../service/ProdutoService";

class CadastroProduto extends React.Component{

    state = {
        nomeProduto : "",
        descricao : "",
        fornecedor : "",
        marca : "",
        precoCusto : "",
        precoVenda : "",
        qtDePecas : ""
    }

    constructor() {
        super();
       this.produtoService = new ProdutoService();
    }
    validar(){
        const msgs = []

        if(!this.state.nomeProduto){
            msgs.push('O campo nome do produto é obrigatorio')
        }


        if (!this.state.descricao){
            msgs.push('O campo descricao é obrigatorio')
        }
        if (!this.state.fornecedor){
            msgs.push('O campo fornecedor  é obrigatorio')
        }

        if (!this.state.marca){
            msgs.push('O campo marca  é obrigatorio')
        }
        if (!this.state.precoCusto){
            msgs.push('O campo preço custo  é obrigatorio')
        }
        if (!this.state.precoVenda){
            msgs.push('O campo preço venda  é obrigatorio')
        }

        if (!this.state.qtDePecas){
            msgs.push('O campo Quantidade de peças  é obrigatorio')
        }



        return msgs;

    }

    cadastrar = () =>{

        const msgs = this.validar();
        if (msgs && msgs.length > 0 ){
            msgs.forEach((msg,index) =>{
                mensagemErro(msg)
            });
            return false
        }

        const dadosProduto = {
            nomeProduto: this.state.nomeProduto,
            descricao : this.state.descricao,
            fornecedor: this.state.fornecedor,
            marca : this.state.marca,
            precoCusto : this.state.precoCusto,
            precoVenda : this.state.precoVenda,
            qtDePecas : this.state.qtDePecas
        }
        this.produtoService.salvar(dadosProduto).then(response => {
            mensagemSucesso("Cadastro realizado com sucesso")
            this.cancelar()
        }).catch(error => {
            mensagemErro(error.response.data)
        });

    }

    cancelar = () =>{
        this.props.history.push('/listar-produtos')
    }
    render() {
        return (
            <>
                <NavBar></NavBar>
                <Dashboard></Dashboard>

                <Card title="Cadastro Produto"  icon="bx bxs-user">

                    <div className="form-control-sm row g-2"  >
                        <div class="col-md-6">
                            <FormGroup label="Produto * " htmlFor="inputDefault" >
                                <input type="text"
                                       name="nomeProduto"
                                       className="form-control"
                                       placeholder="Digite o nome do produto"
                                       id="inputNome"
                                       onChange={e => this.setState({nomeProduto: e.target.value})}
                                />

                            </FormGroup>
                        </div>


                        <div class="col-md-6">
                            <FormGroup label="Descrição * " htmlFor="inputDefault">
                                <input
                                           type="text"
                                           className="form-control"
                                           placeholder="Digite a descrição do produto"
                                           id="inputDescricao"
                                           name="descricao"
                                           onChange={e => this.setState({descricao: e.target.value})}
                                />
                            </FormGroup>
                        </div>


                        <div class="col-md-6">
                            <FormGroup label="Cor * " htmlFor="inputDefault">
                                <input
                                        type="fornecedor"
                                           className="form-control"
                                            placeholder="Digite a cor do produto"
                                           id="inputFornecedor"
                                           name="fornecedor"
                                           onChange={e => this.setState({fornecedor: e.target.value})}
                                />
                            </FormGroup>
                        </div>

                        <div class="col-md-6">
                            <FormGroup label="Marca * " htmlFor="inputDefault">
                                <input type="marca"
                                       className="form-control"
                                       placeholder="Digite a marca do produto"
                                       id="inputMarca"
                                       name="marca"
                                       onChange={e => this.setState({marca : e.target.value})}/>
                            </FormGroup>
                        </div>

                        <div class="col-md-6">
                            <FormGroup label="Preço custo * " htmlFor="inputDefault">
                                <input type="price"
                                       className="form-control"
                                       placeholder="Digite o preço de custo do produto"
                                       id="inputPrecoCusto"
                                       name="precoCusto"

                                       onChange={e => this.setState({precoCusto: e.target.value})}/>
                            </FormGroup>
                        </div>

                        <div className="col-md-6">
                            <FormGroup label="Preço Venda * " htmlFor="inputDefault">
                                <input type="price"
                                       className="form-control"
                                       placeholder="Digite o preço de venda do produto"
                                       id="inputPrecoVenda"
                                       name="precoVenda"

                                       onChange={e => this.setState({precoVenda: e.target.value})}/>
                            </FormGroup>
                        </div>

                        <div className="col-md-6">
                            <FormGroup label="Quantidade de Peças * " htmlFor="inputDefault">
                                <input type="price"
                                       className="form-control"
                                       placeholder="Digite a quantidade de peças do produto"
                                       id="inputQtDePecas"
                                       name="qtDePecas"

                                       onChange={e => this.setState({qtDePecas: e.target.value})}/>
                            </FormGroup>
                        </div>

                        <br/>
                        <div class="col-md-6 mt-5">
                            <button onClick={this.cadastrar} type="button" className="btn btn-primary btn-hover" style={{borderRadius:"12px"}} >Cadastrar</button>
                            <button onClick={this.cancelar} type="button" className="btn btn-primary btn-hover" style={{borderRadius:"12px", margin:"5px"}} >Cancelar</button>
                        </div>
                    </div>
                </Card>

            </>
        );
    }

}

export default withRouter(CadastroProduto)